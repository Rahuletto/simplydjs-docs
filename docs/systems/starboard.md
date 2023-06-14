---
sidebar_position: 5
tags:
  - Systems
---

# starboard

Easiest starboard system ever existed !

> This function should be used only in `messageReactionAdd`, `messageReactionDelete` and `messageDelete` events

## Implementation

```js
simplydjs.starboard(reaction, {
  channelId: '01234567890123' // channelId (required)
  // options (Optional)
})
```


:::tip
  When using the function for `messageDelete` event, replace `reaction` to `message`

  Example:

  ```js
  client.on('messageDelete', () => {
    simplydjs.starboard(message, {
      channelId: '01234567890123' // channelId (required)
      // options (Optional)
    })
  })
  ```
:::

## Output

![starboard](https://i.postimg.cc/mrGmsb6L/image.png)


## Types
```ts
simplydjs.starboard(
  reactionOrMessage: MessageReaction | ExtendedMessage,
  options: starboardOption
): Promise<void>
```

- reaction: [`MessageReaction`](https://old.discordjs.dev/#/docs/discord.js/main/class/MessageReaction) | [`ExtendedMessage`](/docs/typedef/ExtendedMessage/)
- options: [`starboardOption`](#starboardoption)

## Options

`starboardOption`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in starboard |
| `channelId`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel?scrollTo=id">string</Link>  | ✅  | - | Channel Id to send the star board    |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed/">CustomizableEmbed</Link>         | ❌  | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |
| `min`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</Link>     | ❌  | 2 | The number of reactions required to list in the starboard |
| `emoji`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | ⭐ | Emoji required as reaction to list the message on the starboard |

```ts
export type starboardOption = {
	embed?: CustomizableEmbed;
	channelId?: string;
	min?: number;
	emoji?: string;

	strict?: boolean;
};
```

--------------------

## Example



- ### Default settings

```js title="messageReactionAdd.js"
const simplydjs = require('simply-djs')

simplydjs.starboard(reaction, {
  channelId: '1234567890123', // required
})
```

--------------------

```js title="messageReactionRemove.js"
simplydjs.starboard(reaction, {
  channelId: '1234567890123', // required
})
```

--------------------

```js title="messageDelete.js"
simplydjs.starboard(message, {
  channelId: '1234567890123', // required
})
```

- ### Customized with options


```js title="messageReactionAdd.js"
const simplydjs = require('simply-djs')

simplydjs.starboard(reaction, {
  channelId: '1234567890123', // required
  strict: true,
  embed: {
    title: "Starboard"
    color: simplydjs.toRgb("#406dbc")
  }
  emoji: '⭐',
  min: 2,
})
```

--------------------

```js title="messageReactionRemove.js"
simplydjs.starboard(reaction, {
  channelId: '1234567890123', // required
  strict: true,
  emoji: '⭐',
  min: 2,
})
```

--------------------

```js title="messageDelete.js"
simplydjs.starboard(message, {
  channelId: '1234567890123', // required
  strict: true,
})
```