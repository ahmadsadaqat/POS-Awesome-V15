[**posawesome-frontend**](../../README.md)

***

[posawesome-frontend](../../README.md) / posapp/types/models

# posapp/types/models

## Interfaces

### CartItem

Defined in: [posapp/types/models.ts:32](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L32)

An [Item](#item) that has been added to the active invoice.
Carries per-line pricing and discount state alongside the item's catalogue data.
`posa_row_id` is the stable row key used by `useInvoiceStore` — it is NOT the
ERPNext `name` field and is generated client-side.

#### Extends

- [`Item`](#item)

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### amount

> **amount**: `number`

Defined in: [posapp/types/models.ts:34](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L34)

##### batch\_no?

> `optional` **batch\_no?**: `string` \| `null`

Defined in: [posapp/types/models.ts:17](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L17)

###### Inherited from

[`Item`](#item).[`batch_no`](#batch_no-1)

##### brand?

> `optional` **brand?**: `string`

Defined in: [posapp/types/models.ts:15](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L15)

###### Inherited from

[`Item`](#item).[`brand`](#brand-1)

##### conversion\_factor?

> `optional` **conversion\_factor?**: `number`

Defined in: [posapp/types/models.ts:21](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L21)

###### Inherited from

[`Item`](#item).[`conversion_factor`](#conversion_factor-1)

##### currency?

> `optional` **currency?**: `string`

Defined in: [posapp/types/models.ts:42](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L42)

##### description?

> `optional` **description?**: `string`

Defined in: [posapp/types/models.ts:9](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L9)

###### Inherited from

[`Item`](#item).[`description`](#description-1)

##### discount\_amount?

> `optional` **discount\_amount?**: `number`

Defined in: [posapp/types/models.ts:37](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L37)

##### discount\_percentage?

> `optional` **discount\_percentage?**: `number`

Defined in: [posapp/types/models.ts:36](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L36)

##### has\_batch\_no?

> `optional` **has\_batch\_no?**: `number`

Defined in: [posapp/types/models.ts:19](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L19)

###### Inherited from

[`Item`](#item).[`has_batch_no`](#has_batch_no-1)

##### has\_serial\_no?

> `optional` **has\_serial\_no?**: `number`

Defined in: [posapp/types/models.ts:18](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L18)

###### Inherited from

[`Item`](#item).[`has_serial_no`](#has_serial_no-1)

##### image?

> `optional` **image?**: `string`

Defined in: [posapp/types/models.ts:13](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L13)

###### Inherited from

[`Item`](#item).[`image`](#image-2)

##### is\_stock\_item?

> `optional` **is\_stock\_item?**: `number`

Defined in: [posapp/types/models.ts:20](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L20)

###### Inherited from

[`Item`](#item).[`is_stock_item`](#is_stock_item-1)

##### item\_code

> **item\_code**: `string`

Defined in: [posapp/types/models.ts:7](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L7)

###### Inherited from

[`Item`](#item).[`item_code`](#item_code-1)

##### item\_group?

> `optional` **item\_group?**: `string`

Defined in: [posapp/types/models.ts:14](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L14)

###### Inherited from

[`Item`](#item).[`item_group`](#item_group-1)

##### item\_name

> **item\_name**: `string`

Defined in: [posapp/types/models.ts:8](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L8)

###### Inherited from

[`Item`](#item).[`item_name`](#item_name-1)

##### market\_rate?

> `optional` **market\_rate?**: `number`

Defined in: [posapp/types/models.ts:41](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L41)

###### Overrides

[`Item`](#item).[`market_rate`](#market_rate-1)

##### posa\_is\_offer?

> `optional` **posa\_is\_offer?**: `boolean`

Defined in: [posapp/types/models.ts:39](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L39)

##### posa\_row\_id

> **posa\_row\_id**: `string`

Defined in: [posapp/types/models.ts:38](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L38)

##### price\_list\_rate?

> `optional` **price\_list\_rate?**: `number`

Defined in: [posapp/types/models.ts:40](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L40)

##### qty

> **qty**: `number`

Defined in: [posapp/types/models.ts:33](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L33)

##### rate

> **rate**: `number`

Defined in: [posapp/types/models.ts:35](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L35)

##### serial\_no?

> `optional` **serial\_no?**: `string` \| `null`

Defined in: [posapp/types/models.ts:16](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L16)

###### Inherited from

[`Item`](#item).[`serial_no`](#serial_no-1)

##### standard\_rate

> **standard\_rate**: `number`

Defined in: [posapp/types/models.ts:11](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L11)

###### Inherited from

[`Item`](#item).[`standard_rate`](#standard_rate-1)

##### stock\_qty

> **stock\_qty**: `number`

Defined in: [posapp/types/models.ts:10](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L10)

###### Inherited from

[`Item`](#item).[`stock_qty`](#stock_qty-1)

##### uom

> **uom**: `string`

Defined in: [posapp/types/models.ts:12](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L12)

###### Inherited from

[`Item`](#item).[`uom`](#uom-1)

***

### Customer

Defined in: [posapp/types/models.ts:123](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L123)

A customer record from the offline customer cache.

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### customer\_group

> **customer\_group**: `string`

Defined in: [posapp/types/models.ts:126](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L126)

##### customer\_name

> **customer\_name**: `string`

Defined in: [posapp/types/models.ts:125](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L125)

##### email\_id?

> `optional` **email\_id?**: `string`

Defined in: [posapp/types/models.ts:128](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L128)

##### image?

> `optional` **image?**: `string`

Defined in: [posapp/types/models.ts:131](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L131)

##### mobile\_no?

> `optional` **mobile\_no?**: `string`

Defined in: [posapp/types/models.ts:129](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L129)

##### name

> **name**: `string`

Defined in: [posapp/types/models.ts:124](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L124)

##### primary\_address?

> `optional` **primary\_address?**: `string`

Defined in: [posapp/types/models.ts:132](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L132)

##### tax\_id?

> `optional` **tax\_id?**: `string`

Defined in: [posapp/types/models.ts:130](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L130)

##### territory

> **territory**: `string`

Defined in: [posapp/types/models.ts:127](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L127)

***

### CustomerSummary

Defined in: [posapp/types/models.ts:136](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L136)

#### Extended by

- [`StoredCustomer`](#storedcustomer)

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### customer\_name

> **customer\_name**: `string`

Defined in: [posapp/types/models.ts:138](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L138)

##### email\_id?

> `optional` **email\_id?**: `string`

Defined in: [posapp/types/models.ts:139](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L139)

##### mobile\_no?

> `optional` **mobile\_no?**: `string`

Defined in: [posapp/types/models.ts:140](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L140)

##### name

> **name**: `string`

Defined in: [posapp/types/models.ts:137](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L137)

##### primary\_address?

> `optional` **primary\_address?**: `string`

Defined in: [posapp/types/models.ts:141](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L141)

***

### DeliveryCharge

Defined in: [posapp/types/models.ts:166](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L166)

A delivery-charge option that can be selected on the invoice.
Populated from the `posa_delivery_charges` child table on the POS Profile.

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### rate

> **rate**: `number`

Defined in: [posapp/types/models.ts:168](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L168)

##### title

> **title**: `string`

Defined in: [posapp/types/models.ts:167](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L167)

***

### InvoiceDoc

Defined in: [posapp/types/models.ts:51](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L51)

The active POS Invoice document, mirroring the ERPNext POS Invoice doctype.
This is the root object managed by `useInvoiceStore`.
Return invoices use negative `qty` and negative totals throughout.

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### additional\_discount\_percentage?

> `optional` **additional\_discount\_percentage?**: `number`

Defined in: [posapp/types/models.ts:65](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L65)

##### company

> **company**: `string`

Defined in: [posapp/types/models.ts:56](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L56)

##### customer

> **customer**: `string`

Defined in: [posapp/types/models.ts:57](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L57)

##### customer\_name?

> `optional` **customer\_name?**: `string`

Defined in: [posapp/types/models.ts:58](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L58)

##### delivery\_charges?

> `optional` **delivery\_charges?**: `number`

Defined in: [posapp/types/models.ts:66](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L66)

##### discount\_amount?

> `optional` **discount\_amount?**: `number`

Defined in: [posapp/types/models.ts:64](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L64)

##### doctype?

> `optional` **doctype?**: `string`

Defined in: [posapp/types/models.ts:53](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L53)

##### grand\_total

> **grand\_total**: `number`

Defined in: [posapp/types/models.ts:61](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L61)

##### is\_return?

> `optional` **is\_return?**: `number`

Defined in: [posapp/types/models.ts:68](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L68)

##### items

> **items**: [`CartItem`](#cartitem)[]

Defined in: [posapp/types/models.ts:59](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L59)

##### name?

> `optional` **name?**: `string`

Defined in: [posapp/types/models.ts:52](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L52)

##### net\_total

> **net\_total**: `number`

Defined in: [posapp/types/models.ts:62](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L62)

##### payments

> **payments**: [`Payment`](#payment)[]

Defined in: [posapp/types/models.ts:60](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L60)

##### pos\_profile?

> `optional` **pos\_profile?**: `string`

Defined in: [posapp/types/models.ts:70](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L70)

##### posting\_date

> **posting\_date**: `string`

Defined in: [posapp/types/models.ts:54](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L54)

##### posting\_time?

> `optional` **posting\_time?**: `string`

Defined in: [posapp/types/models.ts:55](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L55)

##### return\_against?

> `optional` **return\_against?**: `string`

Defined in: [posapp/types/models.ts:69](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L69)

##### taxes?

> `optional` **taxes?**: [`Tax`](#tax)[]

Defined in: [posapp/types/models.ts:67](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L67)

##### total\_qty

> **total\_qty**: `number`

Defined in: [posapp/types/models.ts:63](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L63)

***

### InvoiceDocRef

Defined in: [posapp/types/models.ts:74](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L74)

#### Properties

##### doctype?

> `optional` **doctype?**: `string`

Defined in: [posapp/types/models.ts:76](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L76)

##### name?

> `optional` **name?**: `string`

Defined in: [posapp/types/models.ts:75](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L75)

***

### InvoiceMetadata

Defined in: [posapp/types/models.ts:156](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L156)

Internal versioning metadata attached to the invoice store.
`changeVersion` is incremented on every mutation and can be used to detect
stale renders or trigger watchers.

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### changeVersion

> **changeVersion**: `number`

Defined in: [posapp/types/models.ts:158](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L158)

##### lastUpdated

> **lastUpdated**: `number`

Defined in: [posapp/types/models.ts:157](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L157)

***

### Item

Defined in: [posapp/types/models.ts:6](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L6)

A catalogue item as stored in the offline IndexedDB cache.
Fields mirror the ERPNext Item doctype; `[key: string]: any` accommodates
custom fields added by the Frappe installation.

#### Extended by

- [`CartItem`](#cartitem)

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### batch\_no?

> `optional` **batch\_no?**: `string` \| `null`

Defined in: [posapp/types/models.ts:17](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L17)

##### brand?

> `optional` **brand?**: `string`

Defined in: [posapp/types/models.ts:15](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L15)

##### conversion\_factor?

> `optional` **conversion\_factor?**: `number`

Defined in: [posapp/types/models.ts:21](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L21)

##### description?

> `optional` **description?**: `string`

Defined in: [posapp/types/models.ts:9](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L9)

##### has\_batch\_no?

> `optional` **has\_batch\_no?**: `number`

Defined in: [posapp/types/models.ts:19](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L19)

##### has\_serial\_no?

> `optional` **has\_serial\_no?**: `number`

Defined in: [posapp/types/models.ts:18](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L18)

##### image?

> `optional` **image?**: `string`

Defined in: [posapp/types/models.ts:13](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L13)

##### is\_stock\_item?

> `optional` **is\_stock\_item?**: `number`

Defined in: [posapp/types/models.ts:20](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L20)

##### item\_code

> **item\_code**: `string`

Defined in: [posapp/types/models.ts:7](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L7)

##### item\_group?

> `optional` **item\_group?**: `string`

Defined in: [posapp/types/models.ts:14](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L14)

##### item\_name

> **item\_name**: `string`

Defined in: [posapp/types/models.ts:8](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L8)

##### market\_rate?

> `optional` **market\_rate?**: `number`

Defined in: [posapp/types/models.ts:22](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L22)

##### serial\_no?

> `optional` **serial\_no?**: `string` \| `null`

Defined in: [posapp/types/models.ts:16](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L16)

##### standard\_rate

> **standard\_rate**: `number`

Defined in: [posapp/types/models.ts:11](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L11)

##### stock\_qty

> **stock\_qty**: `number`

Defined in: [posapp/types/models.ts:10](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L10)

##### uom

> **uom**: `string`

Defined in: [posapp/types/models.ts:12](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L12)

***

### Payment

Defined in: [posapp/types/models.ts:84](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L84)

A single payment line on an invoice (e.g. Cash, Card, Loyalty Points).

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### account?

> `optional` **account?**: `string`

Defined in: [posapp/types/models.ts:87](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L87)

##### amount

> **amount**: `number`

Defined in: [posapp/types/models.ts:86](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L86)

##### mode\_of\_payment

> **mode\_of\_payment**: `string`

Defined in: [posapp/types/models.ts:85](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L85)

##### type?

> `optional` **type?**: `string`

Defined in: [posapp/types/models.ts:88](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L88)

***

### POSProfile

Defined in: [posapp/types/models.ts:109](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L109)

Key fields from the active POS Profile document.
The full profile carries many additional `posa_*` feature-flag fields; they are
accessible via `[key: string]: any`.

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### company

> **company**: `string`

Defined in: [posapp/types/models.ts:111](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L111)

##### currency

> **currency**: `string`

Defined in: [posapp/types/models.ts:112](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L112)

##### expense\_account

> **expense\_account**: `string`

Defined in: [posapp/types/models.ts:116](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L116)

##### income\_account

> **income\_account**: `string`

Defined in: [posapp/types/models.ts:115](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L115)

##### name

> **name**: `string`

Defined in: [posapp/types/models.ts:110](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L110)

##### selling\_price\_list

> **selling\_price\_list**: `string`

Defined in: [posapp/types/models.ts:114](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L114)

##### warehouse

> **warehouse**: `string`

Defined in: [posapp/types/models.ts:113](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L113)

***

### StoredCustomer

Defined in: [posapp/types/models.ts:145](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L145)

#### Extends

- [`CustomerSummary`](#customersummary)

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### customer\_name

> **customer\_name**: `string`

Defined in: [posapp/types/models.ts:138](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L138)

###### Inherited from

[`CustomerSummary`](#customersummary).[`customer_name`](#customer_name-1)

##### email\_id?

> `optional` **email\_id?**: `string`

Defined in: [posapp/types/models.ts:139](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L139)

###### Inherited from

[`CustomerSummary`](#customersummary).[`email_id`](#email_id-1)

##### mobile\_no?

> `optional` **mobile\_no?**: `string`

Defined in: [posapp/types/models.ts:140](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L140)

###### Inherited from

[`CustomerSummary`](#customersummary).[`mobile_no`](#mobile_no-1)

##### name

> **name**: `string`

Defined in: [posapp/types/models.ts:137](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L137)

###### Inherited from

[`CustomerSummary`](#customersummary).[`name`](#name-1)

##### primary\_address?

> `optional` **primary\_address?**: `string`

Defined in: [posapp/types/models.ts:141](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L141)

###### Inherited from

[`CustomerSummary`](#customersummary).[`primary_address`](#primary_address-1)

##### tax\_id?

> `optional` **tax\_id?**: `string`

Defined in: [posapp/types/models.ts:146](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L146)

***

### Tax

Defined in: [posapp/types/models.ts:95](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L95)

A tax/charge row applied to the invoice, matching the ERPNext Sales Taxes and Charges table.

#### Indexable

> \[`key`: `string`\]: `any`

#### Properties

##### account\_head?

> `optional` **account\_head?**: `string`

Defined in: [posapp/types/models.ts:97](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L97)

##### charge\_type?

> `optional` **charge\_type?**: `string`

Defined in: [posapp/types/models.ts:96](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L96)

##### description?

> `optional` **description?**: `string`

Defined in: [posapp/types/models.ts:100](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L100)

##### rate?

> `optional` **rate?**: `number`

Defined in: [posapp/types/models.ts:98](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L98)

##### tax\_amount?

> `optional` **tax\_amount?**: `number`

Defined in: [posapp/types/models.ts:99](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L99)

## Type Aliases

### CustomerInfo

> **CustomerInfo** = `Record`\<`string`, `unknown`\>

Defined in: [posapp/types/models.ts:149](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L149)

***

### PartialInvoiceDoc

> **PartialInvoiceDoc** = `Partial`\<[`InvoiceDoc`](#invoicedoc)\> & [`InvoiceDocRef`](#invoicedocref)

Defined in: [posapp/types/models.ts:79](https://github.com/ahmadsadaqat/POS-Awesome-V15/blob/0843bbefa56dabf3e10e967d068dea4c50336cc9/frontend/src/posapp/types/models.ts#L79)
