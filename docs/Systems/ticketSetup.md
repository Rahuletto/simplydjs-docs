---
sidebar_position: 7
tags:
  - Systems
  - Ticket
---

# ticketSetup

A Flexible yet Powerful Ticket System | Requires: [`manageTicket()`](/docs/handler/manageTicket)

## Implementation

```js
simplydjs.ticketSetup(interaction, { 
  channelId: '01234567890123' // channelId (optional)

  // options (optional)
})
```

## Output

![ticket panel](https://user-images.githubusercontent.com/71836991/166234500-94f6db21-9609-430a-93a6-3beced4d7bc6.png)

![ticket channel](https://user-images.githubusercontent.com/71836991/166234550-bf3b7205-a421-434a-acf3-e184f5e17aa3.png)

## Types
```ts
simplydjs.ticketSetup(
	msgOrint: ExtendedMessage | ExtendedInteraction,
	options: ticketSetupOptions
): Promise<void>
```

- msgOrint [`ExtendedMessage`](/docs/typedef/ExtendedMessage) | [`ExtendedInteraction`](/docs/typedef/ExtendedInteraction)
- options: [`ticketSetupOptions`](#ticketsetupoptions)


## Options

### `ticketSetupOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in ticketSetup |
| `channelId`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel?scrollTo=id">string</Link>  | ❌  | - | Channel Id to send the ticket panel in your server    |
| `button` | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> | ❌        | _default button_  | Pass a buttonTemplate Object to customize the button  |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the ticket panel embed  |

```ts
export type ticketSetupOptions = {
	embed?: CustomizableEmbed;
	button?: buttonTemplate;
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