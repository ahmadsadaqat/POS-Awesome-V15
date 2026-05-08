import {
	getPrintTemplate,
	getTermsAndConditions,
	memoryInitPromise,
} from "./offline/index";
import nunjucks from "nunjucks";

declare const frappe: any;

function normaliseTemplate(template: string) {
	if (!template) return template;
	return template.replace(/"""([\s\S]*?)"""/g, (_, str) => {
		const escaped = str
			.replace(/\\/g, "\\\\")
			.replace(/"/g, '\\"')
			.replace(/\r?\n/g, "\\n");
		return `"${escaped}"`;
	});
}

function attachFormatter(obj: any) {
	if (!obj || typeof obj !== "object" || obj.get_formatted) return;
	obj.get_formatted = function (field: string) {
		return this?.[field];
	};
}

function computePaidAmount(doc: any) {
	if (!doc) return 0;

	const paymentsTotal = (doc.payments || []).reduce(
		(sum: number, p: any) => sum + Math.abs(parseFloat(p.amount) || 0),
		0,
	);

	const creditSale =
		doc.is_credit_sale === true ||
		doc.is_credit_sale === 1 ||
		doc.is_credit_sale === "1" ||
		String(doc.is_credit_sale).toLowerCase() === "yes";

	if (creditSale || paymentsTotal === 0) {
		return 0;
	}

	const base = doc.paid_amount ?? doc.grand_total ?? 0;
	return paymentsTotal || base;
}

function defaultOfflineHTML(invoice: any, terms = "") {
	if (!invoice) return "";

	const itemsRows = (invoice.items || [])
		.map((item: any) => {
			const priceListRate = item.price_list_rate || 0;
			const rate = item.rate || 0;
			const amount = item.amount || 0;
			const discount = priceListRate > rate ? priceListRate - rate : 0;
			
			const priceListFmt = priceListRate > 0 
				? (frappe?.utils?.fmt_money ? frappe.utils.fmt_money(Math.round(priceListRate), invoice.currency) : Math.round(priceListRate)) 
				: '-';
			const rateFmt = frappe?.utils?.fmt_money ? frappe.utils.fmt_money(Math.round(rate), invoice.currency) : Math.round(rate);
			const discountFmt = discount > 0 
				? (frappe?.utils?.fmt_money ? frappe.utils.fmt_money(Math.round(discount), invoice.currency) : Math.round(discount)) 
				: '-';
			const amountFmt = frappe?.utils?.fmt_money ? frappe.utils.fmt_money(Math.round(amount), invoice.currency) : Math.round(amount);

			return `<tr>
            <td class="text-left">${item.item_name || ""}</td>
            <td class="text-center">${item.uom || ""}</td>
            <td class="text-center">${Math.round(item.qty || 0)}</td>
            <td class="text-right">${priceListFmt}</td>
            <td class="text-right">${rateFmt}</td>
            <td class="text-right">${discountFmt}</td>
            <td class="text-right">${amountFmt}</td>
        </tr>`;
		})
		.join("");

	const totalQty = invoice.total_qty || (invoice.items || []).reduce((acc: number, it: any) => acc + (it.qty || 0), 0);
	const discountAmount = invoice.discount_amount || 0;
	const taxesAmount = invoice.total_taxes_and_charges || 0;

	let taxesRow = "";
	if (taxesAmount > 0) {
		const fmtTaxes = frappe?.utils?.fmt_money ? frappe.utils.fmt_money(Math.round(taxesAmount), invoice.currency) : Math.round(taxesAmount);
		taxesRow = `<tr>
        <td class="text-left" colspan="5">Sales Tax</td>
        <td class="text-right" colspan="2"><b>${fmtTaxes}</b></td>
    </tr>`;
	}

	const fmtDiscount = frappe?.utils?.fmt_money ? frappe.utils.fmt_money(Math.round(discountAmount), invoice.currency) : Math.round(discountAmount);
	const fmtGrandTotal = frappe?.utils?.fmt_money ? frappe.utils.fmt_money(Math.round(invoice.grand_total || 0), invoice.currency) : Math.round(invoice.grand_total || 0);

	const paymentsRows = (invoice.payments || [])
		.filter((p: any) => p.amount > 0)
		.map((p: any) => {
			const fmtAmt = frappe?.utils?.fmt_money ? frappe.utils.fmt_money(Math.round(p.amount), invoice.currency) : Math.round(p.amount);
			return `<tr>
            <td class="text-left" colspan="5">${p.mode_of_payment || ""}</td>
            <td class="text-right" colspan="2"><b>${fmtAmt}</b></td>
        </tr>`;
		}).join("");

	const paymentsSection = paymentsRows ? `<table style="width:100%; border-collapse: collapse; font-size: 11px; margin-top: 5px;">
    <tr><td colspan="7"><b>Payment Mode:</b></td></tr>
    ${paymentsRows}
</table>` : "";

	const duplicateBanner = invoice.custom_is_duplicate == 1 ? `<div class="text-center" style="margin-bottom: 10px;">
    <div class="duplicate-banner">*** DUPLICATE COPY ***</div>
</div>` : "";

	const branchHtml = invoice.custom_branch ? `<b>${invoice.custom_branch}</b>` : "";
	const timeStr = invoice.posting_time ? invoice.posting_time.substring(0, 5) : "";
	const fbrHtml = invoice.fbr_invoice_id ? `<div style="font-size: 8px; margin-top: 2px;">${invoice.fbr_invoice_id}</div>` : "";

	return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Invoice ${invoice.name || ""}</title>
    <style>
        body, html { margin: 0 !important; padding: 0 !important; }
        .print-format { font-family: sans-serif !important; background-color: white; color: black; padding-top: 0in !important; padding-bottom: 30px !important; margin-top: 0in !important; }
        @media screen { .print-format { width: 3.1in; padding: 0.1in; padding-top: 0in !important; min-height: 10in; } }
        @media print { .print-format { width: 100%; padding: 0px !important; padding-right: 8px !important; padding-bottom: 40px !important; margin: 0px !important; } * { -webkit-print-color-adjust: exact; } }
        .print-format table, .print-format tr, .print-format td, .print-format div, .print-format p { line-height: 1.1; vertical-align: middle; }
        .logo-container { text-align: center; margin-bottom: 5px; margin-top: 0px !important; padding-top: 0px !important; display: block; }
        .logo-container img { width: 140px; max-width: 100%; height: auto; display: block; margin: 0 auto; }
        .duplicate-banner { border: 2px solid black; margin: 5px 0; padding: 5px; font-weight: bold; font-size: 14px; text-transform: uppercase; display: inline-block; }
        .items-table { width: 100%; border-collapse: collapse; font-size: 10px; table-layout: fixed; margin-top: 5px; }
        .items-table th { border-top: 2px solid black; border-bottom: 2px solid black; padding: 4px 1px; word-wrap: break-word; }
        .items-table td { padding: 3px 1px; word-wrap: break-word; border-bottom: 1px solid #f2f2f2; }
        .header-table { width: 100%; font-size: 11px; }
        .header-table td { padding: 2px 0; }
        .footer-columns { width: 100%; margin-top: 10px; }
        .footer-columns td { vertical-align: top; text-align: center; }
        .innertext { font-size: 12px; line-height: 14px; margin-top: 20px; }
        .text-right { text-align: right; }
        .text-center { text-align: center; }
        .text-left { text-align: left; }
    </style>
</head>
<body>
    <div class="print-format">
        <div class="logo-container">
            <img src="/files/United Logo.jpeg" alt="United Sweets & Bakers">
        </div>

        ${duplicateBanner}

        <p class="text-center" style="font-size: 10px; margin-top: 0;">
            NTN # ${invoice.company_tax_id || "N/A"}<br>
            ${branchHtml}
        </p>

        <div class="text-center">
            <h3 style="margin: 5px 0;"><b>Sales Invoice</b></h3>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <table class="header-table">
                    <tbody>
                        <tr>
                            <td width="55%"><b>Invoice #:</b> ${invoice.name || ""}</td>
                            <td width="45%"><b>User:</b> ${invoice.owner || ""}</td>
                        </tr>
                        <tr>
                            <td><b>Date:</b> ${invoice.posting_date || ""}</td>
                            <td><b>Time:</b> ${timeStr}</td>
                        </tr>
                        <tr>
                            <td><b>Customer:</b> ${invoice.customer || ""}</td>
                            <td><b>POS Profile:</b> ${invoice.pos_profile || ""}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <table class="items-table">
            <thead>
                <tr>
                    <th width="28%" class="text-left"><b>Product</b></th>
                    <th width="10%" class="text-center"><b>UoM</b></th>
                    <th width="8%" class="text-center"><b>Qty</b></th>
                    <th width="12%" class="text-right"><b>Mkt</b></th>
                    <th width="12%" class="text-right"><b>Rate</b></th>
                    <th width="10%" class="text-right"><b>Disc</b></th>
                    <th width="20%" class="text-right"><b>Amount</b></th>
                </tr>
            </thead>
            <tbody>
                ${itemsRows}
            </tbody>
        </table>

        <table style="width:100%; border-collapse: collapse; font-size: 11px; margin-top: 5px;">
            <tr style="border-top: 1px solid black;">
                <td class="text-left" colspan="2">Total Items</td>
                <td class="text-right" colspan="5"><b>${(invoice.items || []).length}</b></td>
            </tr>
            <tr>
                <td class="text-left" colspan="2">Total Qty</td>
                <td class="text-right" colspan="5"><b>${totalQty}</b></td>
            </tr>
            <tr>
                <td class="text-left" colspan="5">Customer Discount</td>
                <td class="text-right" colspan="2"><b>${fmtDiscount}</b></td>
            </tr>
            ${taxesRow}
        </table>

        <div style="border: 1.5px solid black; padding: 5px; margin-top: 5px;">
            <table style="width: 100%;">
                <tr>
                    <td class="text-left" style="font-size: 13px;"><b>Grand Total</b></td>
                    <td class="text-right" style="font-size: 13px;"><b>${fmtGrandTotal}</b></td>
                </tr>
            </table>
        </div>

        ${paymentsSection}

        <div class="innertext text-center">
            <p>Thank you for shopping at United Sweets & Bakers!</p>

            <table class="footer-columns">
                <tr>
                    <td width="50%">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${invoice.name || ""}" style="width: 80px;">
                        <div style="font-size: 8px; margin-top: 2px;">SCAN TO VERIFY</div>
                    </td>
                    <td width="50%">
                        <img src="/files/FBR POS.jpg" style="width: 80px;" alt="FBR Logo">
                        ${fbrHtml}
                    </td>
                </tr>
            </table>

            <p style="margin-bottom:10px;">
                <strong>For Complaints & Suggestions:</strong><br>
                Email: <a href="mailto:unitedbakerssweets@gmail.com">unitedbakerssweets@gmail.com</a>
            </p>
            <p><b>Powered By NEXO 4 ERP</b></p>
            <p style="margin-bottom: 30px;">Thank you, please visit again.</p>
        </div>
    </div>
</body>
</html>`;
}

export default async function renderOfflineInvoiceHTML(invoice: any) {
	if (!invoice) return "";

	await memoryInitPromise;

	const template = normaliseTemplate(getPrintTemplate());
	const terms = getTermsAndConditions();
	const doc = {
		...invoice,
		terms: invoice.terms || terms,
		terms_and_conditions: invoice.terms_and_conditions || terms,
	};

	doc.paid_amount = computePaidAmount(doc);
	attachFormatter(doc);
	(doc.items || []).forEach(attachFormatter);
	(doc.taxes || []).forEach(attachFormatter);

	if (!template) {
		console.warn(
			"No offline print template cached; using fallback template",
		);
		return defaultOfflineHTML(doc, doc.terms_and_conditions);
	}

	try {
		const env = nunjucks.configure({ autoescape: false });
		env.addFilter("format_currency", (value: unknown, currency: string) => {
			const number =
				typeof value === "number" ? value : parseFloat(String(value));
			if (Number.isNaN(number)) return value;
			try {
				return new Intl.NumberFormat(undefined, {
					style: currency ? "currency" : "decimal",
					currency: currency || undefined,
				}).format(number);
			} catch {
				return currency ? `${currency} ${number}` : String(number);
			}
		});
		env.addFilter("currency", (value: unknown, currency: string) =>
			(env as any).filters.format_currency(value, currency),
		);
		(env as any).getFilter = function (name: string) {
			return (this as any).filters[name] || ((v: unknown) => v);
		};

		const context = {
			doc,
			terms: doc.terms,
			terms_and_conditions: doc.terms_and_conditions,
			_: frappe?._ ? frappe._ : (t: string) => t,
			frappe: {
				db: { get_value: () => "", sql: () => [] },
				get_list: () => [],
			},
		};
		return env.renderString(template, context);
	} catch (e) {
		console.error("Failed to render offline invoice", e);
		return defaultOfflineHTML(doc, doc.terms_and_conditions);
	}
}
