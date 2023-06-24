---
title: manageTicket
description: A Ticket Handler for simplydjs ticket system.
sidebar_position: 4
tags:
  - Handler
  - Ticket
  - Renamed
---

# manageTicket

A Ticket Handler for **simplydjs ticket system.**

:::caution

You should use [`ticketSetup()`](../systems/ticketSetup.md) before this function. Because handlers are like back-end (core), They just handle things. But ticketSetup is like front-end. without this, handlers are useless.

:::

## Implementation

```js
simplydjs.manageTicket(interaction, { 
  // options (optional)
})
```

## Output

![ticket channel](https://i.postimg.cc/qq44LCS6/image.png)


## Types
```ts
simplydjs.manageTicket(
	button: ButtonInteraction,
	options: manageTicketOptions
): Promise<DeleteResolve>
```

- button: [`ButtonInteraction`](https://old.discordjs.dev/#/docs/discord.js/main/class/ButtonInteraction)
- options: [`manageTicketOptions`](#manageticketoptions)



- Resolves: [`DeleteResolve`](#deleteresolve)


## Options 

### `manageTicketOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in manageTicket |
| `ticketname` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _{tag}_   | The name of the ticket and channel that gets created  |
| `buttons` | <Link to="#ticketbuttons">TicketButtons</Link> | ❌   | _default buttons_ | Pass a ticketButtons Object to customize embeds |
| `pingRoles`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/Role">Role[]</Link> | ❌  | _none_ | Ping an admin role to let them know there is a ticket |
| `category` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/CategoryChannel?scrollTo=id">string</Link> | ❌  | _none_   | The category to add tickets on. This organises your server |
| `embed` | <Link to="../typedef/customizableembed">CustomizableEmbed</Link> | ❌   | _default embed_ | Pass a CustomizableEmbed Object to customize embeds |
| `logChannelId`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel?scrollTo=id">string</Link>  | ❌  | - | Channel Id to send the ticket chat logs as `.txt` file |

```ts
export type manageTicketOptions = {
	ticketname?: string;
	buttons?: TicketButtons;
	pingRoles?: Role[];
	category?: string;
	embed?: CustomizableEmbed;

	logChannelId?: string;
	strict?: boolean;
};
```

----------------------

### `TicketButtons`


| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `close`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  A CustomizableButton Object to customize the close button   |
| `reopen`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  A CustomizableButton Object to customize the reopen button   |
| `delete`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  A CustomizableButton Object to customize the delete button   |
| `transcript`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  A CustomizableButton Object to customize the transcript button   |



```ts
export interface TicketButtons {
	close: CustomizableButton;
	reopen: CustomizableButton;
	delete: CustomizableButton;
	transcript: CustomizableButton;
}
```

---------------

## Resolve

### `DeleteResolve`

```ts
export type DeleteResolve = {
	type?: 'Delete';
	channelId?: string;
	user?: User;
	data?: AttachmentBuilder; // chat logs in .txt file
};
```

----------------


## Example

- ### Default settings

```js title="interactionCreate.js"
const simplydjs = require('simply-djs')

simplydjs.manageTicket(interaction)
```

- ### Customized with options

```js title="interactionCreate.js"
const simplydjs = require('simply-djs')

simplydjs.manageTicket(interaction, {
  strict: true,
  embed: {
    title: "New ticket",
    color: simplydjs.toRgb("#406dbc")
  },
  buttons: {

  },
  ticketname: "{username}",
  pingRoles: ["01234567890123"],
  category: "01234567890123",
  logChannelId: "01234567890123"
})
```