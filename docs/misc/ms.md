---
sidebar_position: 2
tags:
  - Others
  - New
---

# ms

Converts Human readable time to milliseconds

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
simplydjs.ms('human readable time')
```


:::info INFO
This can be implemented anywhere. Even outside of discord.js ;)
:::

## Types
```ts
simplydjs.ms(
  str: string,
)
```

- str: `string`

## Returns:
- `<string>`

```js
// Human readable time: 0.5d 2h 3m 5s
50585000
```