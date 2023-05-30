---
sidebar_position: 1
tags:
  - Fun
---

# chatbot

A chatbot system that is both technically advanced and intelligent, and is your buddy.

## Implementation

```js
simplydjs.chatbot(client, message, { 
  channelId: '01234567890123' // channelId (required)

  // options (optional)
})
```

:::info INFO
This should be implemented in the `messageCreate` event and requires a `Message Intent` !

```js
client.on('messageCreate', (message) => {
  simplydjs.chatbot() // chatbot function
})
:::

## Output

![image](https://user-images.githubusercontent.com/71836991/173194200-b4ced434-880a-4cc8-a8ef-c94c1d6b008f.png)

## Types
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
| `toggle` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link> | ❌        | _true_  | Enable or Disable the chatbot for your preference.                            |
| `name`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _Simply-DJS_ | Name of the chatbot you are talking to. |
| `developer`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _Rahuletto#0243_ | Name of the developer who maintains the chatbot. |
