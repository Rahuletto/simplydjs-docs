---
title: ticketSetup
description: A Flexible yet Powerful Ticket System | Requires manageTicket()
sidebar_position: 7
tags:
  - Systems
  - Ticket
  - Renamed
---

# ticketSetup

A Flexible yet Powerful Ticket System | Requires: [`manageTicket()`](../handler/manageticket.md)

## Implementation

```js
simplydjs.ticketSetup(interaction, { 
  channelId: '01234567890123' // channelId (optional)

  // options (optional)
})
```

## Output

![ticket panel](https://i.postimg.cc/gjFnPJ5G/image.png)

![ticket channel](https://i.postimg.cc/qq44LCS6/image.png)

## Types
```ts
simplydjs.ticketSetup(
	msgOrint: ExtendedMessage | ExtendedInteraction,
	options: ticketSetupOptions
): Promise<void>
```

- msgOrInt: [`ExtendedMessage`](../typedef/extendedmessage.md) | [`ExtendedInteraction`](../typedef/extendedinteraction.md)
- options: [`ticketSetupOptions`](#ticketsetupoptions)

:::info

This is just 50% of the code for `Ticket System` !. You also need [`manageTicket()`](../handler/manageticket.md) to handle all button clicks. This makes it 100% !

:::

## Options

### `ticketSetupOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in ticketSetup |
| `channelId`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel?scrollTo=id">string</Link>  | ❌  | - | Channel Id to send the ticket panel in your server    |
| `button` | <Link to="../typedef/customizablebutton">CustomizableButton</Link> | ❌        | _default button_  | Pass a CustomizableButton Object to customize the button  |
| `embed` | <Link to="../typedef/customizableembed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the ticket panel embed  |

```ts
export type ticketSetupOptions = {
	embed?: CustomizableEmbed;
	button?: CustomizableButton;
	channelId?: string;
	strict: boolean;
};
```

------------------------

## Example

- ### Default settings

```js title="ticketSetup.js"
const simplydjs = require('simply-djs')

simplydjs.ticketSetup(interaction, {
  channelId: "01234567890123" 
})
```

- ### Customized with options

```js title="ticketSetup.js"
const { ButtonStyle } = require('discord.js')
const simplydjs = require('simply-djs')

simpydjs.ticketSetup(interaction, {
  channelId: "01234567890123",
  strict: true,
  button: {
    label: "Open ticket",
    style: ButtonStyle.Primary
  },
  embed: {
    title: "Ticket",
    description: "Open a ticket by clicking the button",
    color: simplydjs.toRgb("#406dbc")
  }
})
```