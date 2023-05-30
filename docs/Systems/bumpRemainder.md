---
sidebar_position: 2
tags:
  - Systems
  - Disboard
---

# bumpRemainder

 A Very cool bump reminder system that reminds when a bump is necessary
 [Only Disboard].


> This function requires [`connect()`](/docs/general/connect) which connects to the mongo database !

## Implementation

Requires you to have this in `messageCreate` and `ready` event

```js title="ready.js"
simplydjs.bumpRemainder(client, {
  channelId: ["01234567890123"], // channelId (required)
  // other options (optional)
})
```


:::info INFO
When implementing in `messageCreate` event, It requires `Message Intent` !

```js title="messageCreate.js"
client.on('messageCreate', async (message) => {
  
  simplydjs.bumpRemainder(client, message, {
    channelId: ["01234567890123"], // channelId (required)
    // other options (optional)
  })

  //...
})
```
:::


## Output

![image](https://user-images.githubusercontent.com/71836991/137742616-05fc1330-aeef-4f40-9031-1d81e93ff705.png)

## Types
```ts
simplydjs.bumpReminder(
	client: Client,
	message: Message | bumpOptions,
	options: bumpOptions
): Promise<boolean>
```

- client: [`Client`](https://old.discordjs.dev/#/docs/discord.js/main/class/Client)
- message: [`Message`](https://old.discordjs.dev/#/docs/discord.js/main/class/Message) | [`bumpOptions`](#bumpoptions)
- options: [`bumpOptions`](#bumpoptions)

## Options

### `bumpOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in bumpReminder |
| `content` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌        | '\u200b'  | The content of message that is sent to remind (useful for a ping) |
| `embed` | <Link to="#embeds">Embeds</Link> | ❌  | _default embeds_     | The embeds to remind or thank the user who bumped |
| `toggle` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌        | _true_     | Toggle the bumpReminder on or off. |
| `channelId`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel?scrollTo=id">string[]</Link> | ❌ | _none_     | Array of Channel Id to check any bump messages  |


```ts
export type bumpOptions = {
	strict: boolean;
	content?: string;
	embed?: Embeds;
	toggle?: boolean;
	channelId?: string[];
};
```

-------------

### `Embeds`

| Parameter | Type | Required | Default | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `thank` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/EmbedBuilder">EmbedBuilder</Link>       | ❌  | EmbedBuilder  | Override the default thank embed with custom one |
| `remind` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/EmbedBuilder">EmbedBuilder</Link>  | ❌  | EmbedBuilder  | Override the default reminder embed with custom one |

```ts
interface Embeds {
	thank?: EmbedBuilder;
	remind?: EmbedBuilder;
}
```

---------------------

## Example

- ### Default settings

```js title="ready.js"
const simplydjs = require('simply-djs')

simplydjs.bumpRemainder(client, {
  channelId: ["01234567890123"]
})
```

```js title="messageCreate.js"
const simplydjs = require('simply-djs')

simplydjs.bumpRemainder(client, {
  channelId: ["01234567890123"]
})
```

- ### Customized with options

```js title="ready.js"
const { EmbedBuilder } = require('discord.js')

const remindEmbed = new EmbedBuilder()
  .setTitle("Bump this server")
  .setColor(simplydjs.toRgb("#406dbc"))

simplydjs.bumpRemainder(client, {
  channelId: ["01234567890123"], // channelId (required)
  strict: true,
  content: "Bump this server",
  embed: {
    remind: remindEmbed
  },
  toggle: true
})
```

```js title="messageCreate.js"
const { EmbedBuilder } = require('discord.js')

const thankEmbed = new EmbedBuilder()
  .setTitle("Thank you")
  .setColor(simplydjs.toRgb("#406dbc"))

simplydjs.bumpRemainder(client, message, {
  channelId: ["01234567890123"], // channelId (required)
  strict: true,
  content: "Bump this server",
  embed: {
    thank: thankEmbed
  },
  toggle: true
})
```