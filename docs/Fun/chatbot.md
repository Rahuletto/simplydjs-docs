---
sidebar_position: 1
tags:
  - Fun
---

# chatbot

A chatbot system that is both technically advanced and intelligent, and is your buddy.

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
simplydjs.chatbot(client, message, { 
  channelId: '01234567890123' // channelId (required)

  // options (optional)
})
```

:::info INFO
This should be implemented in the `messageCreate` event and requires a `Message Intent` !

```js
client.on('messageCreate' => {
  simplydjs.chatbot() // chatbot function
})
:::

## Output

![image](https://user-images.githubusercontent.com/71836991/137742616-05fc1330-aeef-4f40-9031-1d81e93ff705.png)

## Arguments:
```ts
simplydjs.chatbot(
  client: Discord.Client,
  message: Discord.Message,
  options: chatbotOptions
)
```

- client: [`Discord.Client`](https://discord.js.org/#/docs/discord.js/stable/class/Client)
- message [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message)
- options: [`chatbotOptions`](#options-chatbotoptions)

## Options `chatbotOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `channelId`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel?scrollTo=id">Channel ID</Link>       | ✓        | _none_     | Channel ID of a Discord `TextChannel`    |
| `toggle` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link> | ✘        | _true_  | Enable or Disable the chatbot for your preference.                            |
| `name`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ✘        | _Simply-DJS_ | Name of the chatbot you are talking to. |
| `developer`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ✘        | _Rahuletto#0243_ | Name of the developer who maintains the chatbot. |
