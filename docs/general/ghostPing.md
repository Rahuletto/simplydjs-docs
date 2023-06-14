---
sidebar_position: 6
tags:
  - General
---

# ghostPing

A great system to see **who ghost pinged**


## Implementation

```js
simplydjs.ghostPing(message, {
    // options (Optional)
})
```

:::info INFO
This should be implemented in the `messageDelete` event and requires `Message Intent`!

```js
client.on('messageDelete', (message) => {
  simplydjs.ghostPing(message) // ghostPing function
})
```

:::

## Output

![ghost ping](https://i.postimg.cc/k59XWSNh/image.png)


## Types
```ts
simplydjs.ghostPing(
	message: Message,
	options: ghostOptions
): Promise<User>
```

- message: [`Message`](https://old.discordjs.dev/#/docs/discord.js/main/class/Message)
- options: [`ghostOptions`](#ghostoptions)

- Resolves: [`User`](https://old.discordjs.dev/#/docs/discord.js/main/class/User) (The one who got ghost pinged)

## Options

### `ghostOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in ghostPing |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed/">CustomizableEmbed</Link>         | ❌  | _default embed_  | Pass a CustomizableEmbed Object to customize the ghost ping embed  |

```ts
export type ghostOptions = {
	strict: boolean;
	embed?: CustomizableEmbed;
};
```


-----------------

## Example

- ### Default settings

```js title="messageDelete.js"
const simplydjs = require('simply-djs')

simplydjs.ghostPing(message)
```

- ### Customized with options

```js title="messageDelete.js"
const simplydjs = require('simply-djs')

simplydjs.ghostPing(message, { 
  strict: true,
  embed: {
	  title: "Ghost Ping alert !",
	  color: simplydjs.toRgb("#406dbc")
  }
})
```
