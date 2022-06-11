---
sidebar_position: 1
tags:
  - Systems
---

# automeme

The memes are sent automatically, so others will able to laugh at the jokes without having to do anything !

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
simplydjs.automeme(client, { 
  channelId: '01234567890123' // channelId (required)

  // options (optional)
})
```


:::info INFO
This should be implemented in the `ready` event !

```js
client.on('ready' => {
  simplydjs.automeme() // automeme function
})
```
:::

## Output

![image](https://user-images.githubusercontent.com/71836991/173195081-b27b0f7f-244a-48a1-871a-f279c52670d5.png)

## Arguments:
```ts
simplydjs.automeme(
  client: Discord.Client,
  options: memeOptions
)
```

- client: [`Discord.Client`](https://discord.js.org/#/docs/discord.js/stable/class/Client)
- options: [`memeOptions`](#options-memeoptions)

## Options `memeOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `channelId`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel?scrollTo=id">Channel ID</Link>       | ✅        | _none_     | Channel ID of a Discord `TextChannel`    |
| `sub` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link> | ❌        | _default array_  | An array of custom subreddits                            |
| `interval`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">milliseconds</Link>     | ❌        | _120000ms_ | Interval between memes sent by the bot. |
| `embed` | <Link to="/docs/types/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |
