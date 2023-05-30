---
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
)
```

- msgOrInt [`ExtendedMessage`](/docs/typedef/ExtendedMessage) | [`ExtendedInteraction`](/docs/typedef/ExtendedInteraction)
- options: [`rpsOptions`](#rpsoptions)


## Options

### `rpsOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in rps |
| `embed` | <Link to="#embeds">Embeds</Link> | ❌   | _Default Embed_     | Pass an Embeds Object to customize the embed  |
| `buttons` | <Link to="#rpsbuttons">rpsButtons</Link> | ❌   | _Default Buttons_     | Pass a rpsButtons Object to customize the buttons  |
| `opponent`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/User">User</Link>     | ❌        | _none_ | The opponent you're playing with. |


```ts
export type rpsOptions = {
	embed?: Embeds;
	buttons?: rpsButtons;
	opponent?: User;

	strict?: boolean;
};
```

----------------


### `Embeds`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `request`        | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the game request embed   |
| `win`        | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the result (winner) embed   |
| `draw`        | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the draw embed   |
| `game`        | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the in-game embed   |
| `timeout`        | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the game timeout embed   |
| `decline`        | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the declined embed   |


```ts
export interface Embeds {
	request?: CustomizableEmbed;
	win?: CustomizableEmbed;
	draw?: CustomizableEmbed;
	game?: CustomizableEmbed;
	timeout?: CustomizableEmbed;
	decline?: CustomizableEmbed;
}
```

---------------

### `rpsButtons`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `rock`        | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> |  A buttonTemplate Object to customize the rock button   |
|  `paper`       | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> |  A buttonTemplate Object to customize the paper button   |
|  `scissor`       | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> |  A buttonTemplate Object to customize scissor button   |


```ts
interface rpsButtons {
	rock?: buttonTemplate;
	paper?: buttonTemplate;
	scissor?: buttonTemplate;
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


