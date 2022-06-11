---
sidebar_position: 1
tags:
  - Others
  - New
---

# emitError

Produce error messages just like Simply DJS

## Program

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
simplydjs.emitError({ name: "Test", tip: "This is just to test" })
```


:::danger WARNING
This may cause your entire project to stop as it emits an error not logging in the console.
:::

## Arguments:
```ts
simplydjs.emitError(
  {
    name: string,
    tip: string
  }
)
```

- name: `string`
- tip: `string`