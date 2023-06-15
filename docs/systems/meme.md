---
title: meme
sidebar_position: 4
tags:
  - Systems
  - Renamed
---

# meme

The memes are sent automatically, so others will able to laugh at the jokes without having to do anything !

> This should be implemented in the `ready` event !


## Implementation

```js
simplydjs.meme(client, { 
  channelId: ['01234567890123'] // channelId (required)

  // options (optional)
})
```


## Output

![auto meme sender](https://i.postimg.cc/pLj9t8Js/image.png)

## Types
```ts
simplydjs.meme(
  client: Client,
  options: memeOptions
): Promise<void>
```

- client: [`Client`](https://old.discordjs.dev/#/docs/discord.js/main/class/Client)
- options: [`memeOptions`](#memeoptions)

## Options

### `memeOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in meme |
| `embed` | <Link to="../typedef/customizableembed">CustomizableEmbed</Link>         | ❌        | _default embed_  | CustomizableEmbed Object to customize the embed  |
| `channelId`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel?scrollTo=id">string[]</Link>       | ✅ | _none_     | Array Channel ID to send memes    |
| `sub` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string[]</Link> | ❌        | _default array_  | Array of custom subreddits to send as memes  |
| `interval`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</Link>     | ❌        | `600000ms` (10m) | Interval between memes sent by the bot. |

```ts
export type memeOptions = {
	embed?: CustomizableEmbed;
	channelId?: string;
	interval?: number;
	sub?: string[] | string;

	strict?: boolean;
};
```

--------------------

## Example

- ### Default settings

```js title="meme.js"
const simplydjs = require('simply-djs')

simplydjs.meme(client, {
  channelId: ['01234567890123']
})
```

- ### Customized with options

```js title="meme.js"

simplydjs.meme(client, {
  channelId: ['01234567890123'], // required
  strict: true,
  sub: ['pewdiepie', 'meme', 'dankmemes'],
  interval: 600000,
  embed: {
    title: "Meme time",
    color: simplydjs.toRgb("#406dbc")
  }
})
```
