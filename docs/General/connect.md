---
sidebar_position: 3
tags:
  - General
---

# connect

Connect to a mongo database to access some functions ! *Requires* ***[mongodb uri](https://mongodb.com/)***

## Implementation

```js
simplydjs.connect('mongodb uri')
```

:::info INFO
This should be implemented in the **main/index** file and next to the declaration of the package !

```js title=index.js
const simplydjs = require("simply-djs");

simplydjs.connect() // connect function at the next line
:::

## Types
```ts
simplydjs.connect(
  db: string,
  notify?: boolean
)
```

- db: `string`
- notify: `boolean`

:::info
`notify` option is used so that it console logs when the database is connected !
[Default is true] !
:::