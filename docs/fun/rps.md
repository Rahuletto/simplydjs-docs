---
title: rps
sidebar_position: 2
tags:
  - Fun
---

# rps

A classic RPS game, except this time it's on Discord to play with your pals, how cool is that ?

## Implementation

```js
simplydjs.rps(interaction, { 
  // options (optional)
})
```

## Output

![rps](https://i.postimg.cc/vBCNzRK1/image.png)

![rps win](https://i.postimg.cc/ryjTSjCq/image.png)

## Types
```ts
simplydjs.rps(
	msgOrint: ExtendedMessage | ExtendedInteraction,
	options: rpsOptions
): Promise<User>
```

- msgOrInt: [`ExtendedMessage`](../typedef/extendedmessage.md) | [`ExtendedInteraction`](/docs/../typedef/extendedinteraction.md)
- options: [`rpsOptions`](#rpsoptions)

- Resolves: [`User`](https://old.discordjs.dev/#/docs/discord.js/main/class/User) (The winner of the game)

## Options

### `rpsOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in rps |
| `embed` | <Link to="#rpsembeds">RpsEmbeds</Link> | ❌   | _Default Embed_     | Pass an Embeds Object to customize the embed  |
| `buttons` | <Link to="#rpsbuttons">RpsButtons</Link> | ❌   | _Default Buttons_     | Pass a rpsButtons Object to customize the buttons  |
| `opponent`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/User">User</Link>     | ❌        | _none_ | The opponent you're playing with. |


```ts
export type rpsOptions = {
	embed?: RpsEmbeds;
	buttons?: RpsButtons;
	opponent?: User;

	strict?: boolean;
};
```

----------------


### `RpsEmbeds`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `request`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the game request embed   |
| `win`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the result (winner) embed   |
| `draw`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the draw embed   |
| `game`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the in-game embed   |
| `timeout`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the game timeout embed   |
| `decline`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the declined embed   |


```ts
export interface RpsEmbeds {
	request?: CustomizableEmbed;
	win?: CustomizableEmbed;
	draw?: CustomizableEmbed;
	game?: CustomizableEmbed;
	timeout?: CustomizableEmbed;
	decline?: CustomizableEmbed;
}
```

---------------

### `RpsButtons`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `rock`        | <Link to="../typedef/customizablebutton.md">CustomizableButton</Link> |  A CustomizableButton Object to customize the rock button   |
|  `paper`       | <Link to="../typedef/customizablebutton.md">CustomizableButton</Link> |  A CustomizableButton Object to customize the paper button   |
|  `scissor`       | <Link to="../typedef/customizablebutton.md">CustomizableButton</Link> |  A CustomizableButton Object to customize scissor button   |


```ts
export interface RpsButtons {
	rock?: CustomizableButton;
	paper?: CustomizableButton;
	scissor?: CustomizableButton;
}
```

----------------------

# Example


- ### Default settings

```js title="rps.js"
const simplydjs = require('simply-djs')

simplydjs.rps(interaction)
```

- ### Customized with options

```js title="rps.js"
const { ButtonStyle } = require('discord.js')
const simplydjs = require('simply-djs')

simplydjs.rps(interaction, {
  strict: true,
  buttons: {
    rock: { style: ButtonStyle.Primary },
    paper: { style: ButtonStyle.Success },
    scissor: { style: ButtonStyle.Danger }
  },
  embed: {
    game: {
      color: simplydjs.toRgb("#406dbc")
    }
  }
})
```


