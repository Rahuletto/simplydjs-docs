---
sidebar_position: 1
tags:
  - Fun
  - New
---

# chatbot

A chatbot system that is both technically advanced and intelligent, and is your buddy.

> Now with Chat-GPT mode ! pass an `gptToken` option to enable Chat-GPT chatbot for your bot. Requires a ChatGPT token from [`openai`](https://platform.openai.com/account/api-keys)


## Implementation

```js
simplydjs.chatbot(message, { 
  channelId: ['01234567890123'] // channelId (required)

  // options (optional)
})
```

:::info INFO
This should be implemented in the `messageCreate` event and requires `Message Intent`!

```js
client.on('messageCreate', (message) => {
  simplydjs.chatbot(message) // chatbot function
})
```

:::

## Output

![chatbot](https://i.postimg.cc/7LRkLTLR/image.png)

## Types
```ts
simplydjs.chatbot(
	message: ExtendedMessage,
	options: chatbotOptions
): Promise<void>
```
- message [`ExtendedMessage`](/docs/typedef/ExtendedMessage)
- options: [`chatbotOptions`](#chatbotoptions)

## Options 

### `chatbotOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in chatbot |
| `channelId`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel?scrollTo=id">string[]</Link>  | ✅  | - | Channel Id to set your chatbot in your server    |
| `toggle` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link> | ❌        | true | Enable or Disable the chatbot for your preference.   |
| `name`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | Simply-DJS | Name of the chatbot you are talking to. (Would not apply to Chat-GPT) |
| `developer`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | Rahuletto#0243 | Name of the developer who maintains the chatbot. (Would not apply to Chat-GPT) |
| `gptToken`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _none_ | Enable Chat-GPT mode and use gpt model instead of traditional nlp small data sets. |

```ts
export type chatbotOptions = {
	strict?: boolean;
	channelId?: string | string[];
	toggle?: boolean;
	name?: string;
	developer?: string;
	gptToken?: string; // To access ChatGPT
};
```

-----------------


# Example


- ### Default settings

```js title="chatbot.js"
const simplydjs = require('simply-djs')

simplydjs.chatbot(message, {
  channelId: ["01234567890123"] // required
})
```

- ### Customized with options

```js title="chatbot.js"
const simplydjs = require('simply-djs')

simplydjs.chatbot(message, {
  channelId: ["01234567890123"], // required
  strict: true,
  toggle: true,
  name: "Simply-DJS",
  developer: "Rahuletto#0243"
})
```

- ### For Chat-GPT

```js title="chatbot-gpt.js"
const simplydjs = require('simply-djs')

simplydjs.chatbot(message, {
  channelId: ["01234567890123"], // required
  strict: true,
  toggle: true,
  gptToken: "XXXX-XXXX-XXXX-XXXX" // your openai api key
})
```
