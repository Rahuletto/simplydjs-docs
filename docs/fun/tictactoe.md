---
title: tictactoe
sidebar_position: 3
tags:
  - Fun
  - New
---

# tictactoe

One line implementation of a super enjoyable **tictactoe game**. 

> Now with AI (one-player) mode ! Just don't mention a opponent and you will play with our ai system. Uses [`https`](../misc/https.md) to call [`simply-api`](https://simplyapi.js.org)

## Implementation

```js
simplydjs.tictactoe(interaction, { 
  // options (optional)
})
```

## Output

![tictactoe](https://i.postimg.cc/R0dkBbDh/image.png)

## Types
```ts
simplydjs.tictactoe(
	msgOrInt: ExtendedMessage | ExtendedInteraction,
	options: tictactoeOptions = {}
): Promise<User>
```

- msgOrInt: [`ExtendedMessage`](../typedef/extendedmessage.md) | [`ExtendedInteraction`](../typedef/extendedinteraction.md)
- options: [`tictactoeOptions`](#tictactoeoptions)


- Resolves: [`User`](https://old.discordjs.dev/#/docs/discord.js/main/class/User) (The winner of the game)

## Options

### `tictactoeOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in tictactoe |
| `embed` | <Link to="#tictactoeembeds">TictactoeEmbeds</Link> | ❌   | _Default Embeds_     | Pass an Embeds Object to customize all the embeds  |
| `type` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">'Button'/'Embed'</Link> | ❌  | 'Button'  | Choose the way you want to show the results of the match |
| `max` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</Link>       | ❌ | 5 | Limit the number of games running at a time per guild. For no limit set it to `999` |
| `user`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/User">User</Link>     | ❌        | _none_ | The opponent you're playing with. |
| `buttons` | <Link to="#tictactoebuttons">TictactoeButtons</Link> | ❌   | _Default Buttons_ | Pass an tictactoeButtons Object to customize the buttons  |

```ts
export type tictactoeOptions = {
	embed?: TictactoeEmbeds;
	user?: User;
	type?: 'Button' | 'Embed';
	max: number;

	buttons?: TictactoeButtons;

	strict?: boolean;
};
```

---------------

### `TictactoeEmbeds`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `request`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the game request embed   |
| `win`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the result (winner) embed   |
| `draw`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the draw embed   |
| `game`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the in-game embed   |
| `timeout`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the game timeout embed   |
| `decline`        | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the declined embed   |


```ts
export interface TictactoeEmbeds {
	request?: CustomizableEmbed;
	win?: CustomizableEmbed;
	draw?: CustomizableEmbed;
	game?: CustomizableEmbed;
	timeout?: CustomizableEmbed;
	decline?: CustomizableEmbed;
}
```

---------------

### `tictactoeButtons`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `X`        | <Link to="../typedef/customizablebutton.md">CustomizableButton</Link> |  A CustomizableButton Object to customize the "X" player button   |
|  `O`       | <Link to="../typedef/customizablebutton.md">CustomizableButton</Link> |  A CustomizableButton Object to customize the "O" player button   |
|  `blank`       | <Link to="../typedef/customizablebutton.md">CustomizableButton</Link> |  A CustomizableButton Object to customize un-moved place button   |


```ts
export interface TictactoeButtons {
	X?: CustomizableButton;
	O?: CustomizableButton;
	blank?: CustomizableButton;
}
```

----------------------

# Example


- ### Default settings

```js title="tictactoe.js"
const simplydjs = require('simply-djs')

simplydjs.tictactoe(interaction)
```

- ### Customized with options

```js title="tictactoe.js"
const { ButtonStyle } = require('discord.js')
const simplydjs = require('simply-djs')

simplydjs.tictactoe(interaction, {
  strict: true,
  type: 'Embed',
  buttons: {
    X: { style: ButtonStyle.Danger },
    O: { style: ButtonStyle.Success },
    blank: { style: ButtonStyle.Secondary }
  },
  embed: {
    game: {
      color: simplydjs.toRgb("#406dbc")
    }
  }
})
```


