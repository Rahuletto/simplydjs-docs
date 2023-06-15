---
title: btnRole
description: A Button Role System that lets you create button roles with your own message. Required manageBtnRole()
sidebar_position: 1
tags:
  - General
---

# btnRole

A **Button Role System** that lets you create button roles with your own message. | Requires: [`manageBtnRole()`](../handler/managebtnrole.md)

## Implementation

```js
simplydjs.btnRole(interaction, {
	data: [
    {...}
  ], // array of data objects (required)
  // options (optional)
})
```

:::info NOTE
This is **totally** different from [`betterBtnRole`](../systems/betterbtnrole.md) !

`betterBtnRole` is a button role builder system. where,
`btnRole` is a function that sends your message (with embeds) with the buttons necessary for the button role.
:::

## Output

![button role panel](https://i.postimg.cc/Wz2Hq6Gd/image.png)

## Types
```ts
simplydjs.btnRole(
	msgOrInt: ExtendedMessage | ExtendedInteraction,
	options: btnRoleOptions
): Promise<boolean>
```

- msgOrInt: [`ExtendedMessage`](../typedef/extendedmessage.md) | [`ExtendedInteraction`](../typedef/extendedinteraction.md)
- options: [`btnRoleOptions`](#btnroleoptions)

- Resolves: [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (whether sent or not)

## Options

### `btnRoleOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in btnRole |
| `embed` | <Link to="../typedef/customizableembed">CustomizableEmbed</Link>       | ✅  | -     | The embed of your message that is sent with the necessary buttons |
| `content` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌        | _none_ | The content of your message that is sent with the necessary buttons |
| `data` | <Link to="#btnrolebuttons">BtnRoleButtons[]</Link>       | ✅        | _none_     | The data necessary to create the buttons. (Array of <Link to="#dataobj">dataObj</Link>) |

```ts
export type btnRoleOptions = {
	embed?: CustomizableEmbed;
	content?: string;
	data?: BtnRoleButtons[];
	strict?: boolean;
};
```

------------

### `BtnRoleButtons`

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌ | _Role Name_  | The label of the button you're trying to add/remove |
| `role` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/Role">Role</Link> | ✅ | - | The role to be given when a button is clicked |
| `style` | <Link to="https://discord-api-types.dev/api/discord-api-types-v10/enum/ButtonStyle">ButtonStyle</Link> | ❌ | `ButtonStyle.Primary`  | The style of the button that is getting added.  |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_  | The emoji of the button you're trying to add |
| `url` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_  | The URL that needs to be redirected when clicked (Only when the style is `ButtonStyle.Link`) |

```ts
export type BtnRoleButtons = {
	role?: string | Role;
	url?: `https://${string}`; // Only HTTPS allowed !
} & CustomizableButton;
```

-----------------

## Example

> To make this system work, you should also implement [`manageBtnRole()`](../handler/managebtnrole.md) manageBtnRole function handles all the buttons for btnRole and betterBtnRole.


- ### Default settings

```js title="btnrole.js"
const simplydjs = require('simply-djs')

simplydjs.btnRole(interaction, {
  strict: true,
  data: [
    {
      role: "01234567890123",
      style: ButtonStyle.Primary
    },
  ],
  content: "Take your roles with button"
})
```

- ### Customized with options

```js title="btnrole.js"
const { ButtonStyle } = require('discord.js')
const simplydjs = require('simply-djs')

simplydjs.btnRole(interaction, {
  strict: true,
  data: [
    {
      role: "01234567890123",
      style: ButtonStyle.Primary
    },
    {
      role: "98765432109876",
      style: ButtonStyle.Secondary
    }
  ],
  content: "Take your roles with button",
  embed: {
    title: "Take your roles",
    color: simplydjs.toRgb("#406dbc"),
    description: "Take your roles by interacting with button"
  },
})
```