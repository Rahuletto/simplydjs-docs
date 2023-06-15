---
title: buttonPages
description: An powerful yet customizable Embed Paginator
sidebar_position: 2
tags:
  - General
  - Renamed
---

# buttonPages

An powerful yet customizable **Embed Paginator**

## Implementation

```js
const embeds = [] // Contains array of EmbedBuilder(s)

simplydjs.buttonPages(interaction, {
  embeds: embeds // embeds (required)
  // options (Optional)
})
```


## Output

![embed pages with button](https://i.postimg.cc/mkS957FW/image.png)


## Types
```ts
simplydjs.buttonPages(
	msgOrInt: ExtendedMessage | ExtendedInteraction,
	options: pagesOptions = {}
): Promise<void>
```

- msgOrInt: [`ExtendedMessage`](../typedef/extendedmessage.md) | [`ExtendedInteraction`](../typedef/extendedinteraction.md)
- options: [`pagesOptions`](#pagesoptions)

## Options

### `pagesOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `buttons` | <Link to="#pagebuttons">Pagebuttons</Link> | ❌ | _default buttons_  | Pass a Pagebuttons Object to customize the button  |
| `skips`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | true             | Enable/Disable the first/last page buttons     |
| `delete`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | true_            | Enable/Disable the Delete message button     |
| `dynamic`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | false_            | Change buttons corresponding to the page you are in  |
| `count`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | false             | Show the current page number you are in |
| `rows` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/ActionRowBuilder">ActionRowBuilder[]</Link>       | ❌  | _none_     | Add custom rows to the message |
| `embeds` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/EmbedBuilder">EmbedBuilder[]</Link>       | ❌  | _none_     | List of embeds for pagination of the embeds |
| `timeout`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</Link>   | ❌        | 120000             | Show the current page number you are in |
| `disable`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">'Label'/'Emoji'/'None'</Link> | ❌  | 'Label' | Disable emoji or label of the button |

```ts
export type pagesOptions = {
	buttons?: Pagebuttons;

	skips?: boolean;
	delete?: boolean;
	dynamic?: boolean;
	count?: boolean;

	rows?: ActionRowBuilder<ButtonBuilder>[];
	embeds?: EmbedBuilder[];
	timeout?: number;

	disable?: 'Label' | 'Emoji' | 'None';
	strict?: boolean;
};
```

-----------------------

## `Pagebuttons`

| Parameter  | Type | Description  |
| ---------- | ---- | ------------ |
| `first`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  Pass an CustomizableButton Object to customize the button   |
| `next`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  Pass an CustomizableButton Object to customize the button   |
| `back`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  Pass an CustomizableButton Object to customize the button   |
| `last`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  Pass an CustomizableButton Object to customize the button   |
| `delete`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  Pass an CustomizableButton Object to customize the button  |

```ts
export interface Pagebuttons {
	first?: CustomizableButton;
	next?: CustomizableButton;
	back?: CustomizableButton;
	last?: CustomizableButton;
	delete?: CustomizableButton;
}
```

-----------------

## Example

- ### Default settings

```js title="buttonPages.js"
const { EmbedBuilder } = require("discord.js")
const simplydjs = require('simply-djs')

const firstEmbed = new EmbedBuilder().setTitle('first embed')
const lastEmbed = new EmbedBuilder().setTitle('last embed')

simplydjs.buttonPages(interaction, {
  embeds: [firstEmbed, lastEmbed]
})
```

- ### Customized with options

```js title="buttonPages.js"
const { EmbedBuilder, ButtonStyle } = require("discord.js")
const simplydjs = require('simply-djs')

const firstEmbed = new EmbedBuilder().setTitle('first embed')
const lastEmbed = new EmbedBuilder().setTitle('last embed')

simplydjs.buttonPages(interaction, {
  embeds: [firstEmbed, lastEmbed],
  strict: true,

  buttons: {
	first: { style: ButtonStyle.Primary },
	next: { style: ButtonStyle.Success },
	back: { style: ButtonStyle.Success },
	last: { style: ButtonStyle.Primary },
	delete: { style: ButtonStyle.Danger }
  },

  skips: true,
  delete: true,
  dynamic: false,
  count: false,

  timeout: 120000,
  disable: 'None'
})
```