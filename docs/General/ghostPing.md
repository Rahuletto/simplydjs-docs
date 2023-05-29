---
sidebar_position: 6
tags:
  - General
---

# ghostPing

A great system to see **who ghost pinged**


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
simplydjs.ghostPing(message, {
    // options (Optional)
})
```

:::info INFO
This should be implemented in the `messageDelete` event and requires a `Message Intent` !

```js
client.on('messageDelete', (message) => {
  simplydjs.ghostPing() // ghostPing function
})
:::

## Output

![image](https://user-images.githubusercontent.com/71836991/173194741-39361215-a763-4044-b652-61ce6013becb.png)

## Types
```ts
simplydjs.ghostPing(
  message: Discord.Message,
  options: ghostOptions
)
```

- message: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message)
- options: [`ghostOptions`](#options-ghostoptions)

## Options `ghostOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the builder embed  |
| `custom`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | _false_             | Resolve an Promise instead of sending a message (Useful for auto-moderation) |