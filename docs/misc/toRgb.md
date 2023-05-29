---
sidebar_position: 3
tags:
  - Others
  - New
---

# toRgb

Transforms Hex code into RGB Array (or) RGB String. This makes it easy to convert from discord.js v13 to v14.

## Implementation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="js"
  values= {[
    { label: 'Javascript', value: 'js', },
    { label: 'Typescript', value: 'ts', },
  ]
}>
<TabItem value="js">

```js
const simplydjs = require("simply-djs");
```

</TabItem>

<TabItem value="ts">

```ts
import simplydjs from "simply-djs";
```

</TabItem>

</Tabs>

```js
simplydjs.toRgb('hex code')
```


:::info INFO
This can be implemented anywhere. Even outside of discord.js ;)
:::

## Types
```ts
simplydjs.toRgb(
  hex: string,
  type: 'Array' | 'String'
)
```

- hex: `#string` | `string`
- type: `Array` | `String`

## Returns:
- `<Array>` (or) `<string>`

```js
// Hex code: #DEDEDE
[255, 255, 255]
// or
'rgb(255, 255, 255)'
```