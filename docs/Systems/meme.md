---
sidebar_position: 4
tags:
  - Systems
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

![image](https://user-images.githubusercontent.com/71836991/173195081-b27b0f7f-244a-48a1-871a-f279c52670d5.png)

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
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | CustomizableEmbed Object to customize the embed  |
| `channelId`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel?scrollTo=id">string[]</Link>       | ✅ | _none_     | Array Channel ID to send memes    |
| `sub` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string[]</Link> | ❌        | _default array_  | Array of custom subreddits to send as memes  |
| `interval`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</Link>     | ❌        | `600000ms` (10m) | Interval between memes sent by the bot. |

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