---
sidebar_position: 8
tags:
  - General
---

# nqn

NQN bot feature. But you have the power to do it.

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
simplydjs.nqn(message)
```

## Output

![image](https://user-images.githubusercontent.com/71836991/173194812-ee172699-ac64-4d7a-aad3-b3faafa1e8e0.png)

## Types
```ts
simplydjs.nqn(
  message: Discord.Message,
)
```

- message: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message)


## Options
- No options for nqn function