---
sidebar_position: 4
tags:
  - Others
  - New
---

# version

Provides the package version you are currently using.

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
simplydjs.version
```


:::info INFO
This literally returns the version number. Nothing fancy.
:::

## Returns:
- `<string>`