---
sidebar_position: 3
tags:
  - Systems
---

# bumpSystem

A Very cool bump reminder system that reminds when a bump is necessary
[Only Disboard]

:::note
This function requires you to [connect()](/docs/General/connect) to the mongo database !
:::

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
simplydjs.bumpSystem(client, message, {
  channelId: ["01234567890123"], // channelId (required if auto: false)
  // options (optional)
})
```


:::info INFO
This should be implemented in the `messageCreate` event and requires a `Message Intent` !

```js
client.on('messageCreate' => {
  simplydjs.bumpSystem() // bump function
})
```
:::


## Output

![image](https://user-images.githubusercontent.com/71836991/137742616-05fc1330-aeef-4f40-9031-1d81e93ff705.png)

## Arguments:
```ts
simplydjs.bumpSystem(
  client: Discord.Client,
  message: Discord.Message,
  options: bumpOptions
)
```

- client: [`Discord.Client`](https://discord.js.org/#/docs/discord.js/stable/class/Client)
- message: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message)
- options: [`bumpOptions`](#options-bumpoptions)

## Options `bumpOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `content` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌        | _none_     | The content of your message that is sent to remind (maybe a ping) |
| `embed` | <Link to="#typeembed">TypeEmbed</Link>       | ❌        | _default embeds_     | The embed to remind or thank the user who bumped |
| `toggle` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌        | _true_     | Toggle the bumpSystem for your preference. |
| `auto` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌        | _true_     | Sets the channelId automatically to remind. |
| `channelId`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel?scrollTo=id">Channel ID[]</Link>       | ❌        | _none_     | Array of Channel ID of a Discord `TextChannel` (Only when auto: false)   |

<details style={{border: '0px solid'}}>
  <summary>TypeEmbed options</summary>

## `TypeEmbed`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `thankEmb`        | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed">MessageEmbed</Link> |  The embed sent to thank the user who bumped the server   |
| `bumpEmb`        | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed">MessageEmbed</Link> |  The embed sent to remind others to bump the server   |

</details>
