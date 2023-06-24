---
title: betterBtnRole
description: A Button Role builder that lets admins create button roles. Requires manageBtnRole()
sidebar_position: 1
tags:
  - Systems
  - Button Role
---

# betterBtnRole

A **Button Role builder** that lets **admins create** button roles. | Requires: [`manageBtnRole()`](../handler/managebtnrole.md)


> This is an advanced version of [`btnRole()`](../general/btnrole.md)


## Implementation

```js title="button-add.js"
// When adding a button role to a message
simplydjs.betterBtnRole(interaction, {
	type: 'Add' // type (required) ['Add' (or) 'Remove']
  // other options (optional)
})
```

```js title="button-remove.js"
// When removing a button role from a message
simplydjs.betterBtnRole(interaction, {
	type: 'Remove' // type (required) ['Add' (or) 'Remove']
  // other options (optional)
})
```


## Output

![slash command](https://i.postimg.cc/y895SWY0/image.png)
![button role](https://i.postimg.cc/Wz2Hq6Gd/image.png)

## Types
```ts
simplydjs.betterBtnRole(
	interaction: ExtendedInteraction,
	options: betterbtnOptions
): Promise<void>
```

- interaction [`ExtendedInteraction`](../typedef/extendedinteraction.md)
- options: [`betterBtnOptions`](#betterbtnoptions)

:::info

This is just 50% of the code for `Button Role System` !. You also need [`manageBtnRole()`](../handler/managebtnrole.md) to handle all button clicks. This makes it 100% !

:::

## Options

### `betterBtnOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false     | Enables strict mode in betterBtnRole |
| `type` | `"Add"`/`"Remove"` | ✅ | -  | The type of the implementation of the function  |
| `channel` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel">TextChannel</Link> | ❌  | _none_  | The channel where the message exists |
| `buttons` | <Link to="#betterbtnrolebuttons">BetterBtnRoleButtons</Link> | ✅ | -  | The button as object to add in the message  |
| `messageId` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌       | _none_  | The ID of the message you're trying to add a button to.  |
| `contents` | <Link to="#message-contents">MessageContents</Link> | ❌ | _default_  | Custom text object to send instead of default |

```ts
export type betterbtnOptions = {
	strict?: boolean;
	type?: 'Add' | 'Remove';
	channel?: TextChannel;
	button?: BetterBtnRoleButtons;
	messageId?: string;
	contents?: MessageContents;
};
```

------------------

### `BetterBtnRoleButtons`

| Parameter | Type | Required | Default | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌ | _Role Name_  | The label of the button you're trying to add/remove |
| `role` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/Role">Role</Link> | ✅ | - | The role to be given when a button is clicked |
| `style` | <Link to="https://discord-api-types.dev/api/discord-api-types-v10/enum/ButtonStyle">ButtonStyle</Link> | ❌ | `ButtonStyle.Primary`  | The style of the button that is getting added.  |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_  | The emoji of the button you're trying to add |

```ts
export type BetterBtnRoleButtons = {
	role?: Role;
} & CustomizableButton;
```

------------------

### `MessageContents`
This is to simplify customization and replacing the `custom` option before.

> This option will not be applied when `strict` mode is on

:::caution NOT RECOMMENDED

## This is not recommended to beginners

This option makes things complicated. So we do not recommend this option for beginners. But if you really need that level of customization, You can proceed.

:::


| Parameter | Type | Required | Default | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `invalidMessage` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌ | 'Cannot find any messages with that message id in the channel you specified'  | The message content to send when there is no message with that Id |
| `otherUserMessage` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌ | 'Cannot make other user's message a button role ! Provide a message which I sent.'  | The message content to send when the message provided is not by the bot |
| `update` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌ | 'Found a button with same role. Updating the existing button role.'  | The message content to send when the button gets updated |
| `success` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌ | 'Done.. Added the button to the message'  | The message content to send when a button gets added/removed |
| `overload` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌ | 'Sorry.. I have no space to send buttons in that message..'  | The message content to send when there are maximum buttons possible |
| `noButton` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌ | 'There is no button role in that message.. Try using correct message ID that has button roles'  | The message content to send when there are no button to remove `(Only for "Remove" type)` |

```ts
export interface MessageContents {
	invalidMessage?: string;
	otherUserMessage?: string;
	update?: string;
	success?: string;
	overload?: string;
	noButton?: string;
}
```

-----------

## Example

> To make this system work, you should also implement [`manageBtnRole()`](../handler/managebtnrole.md) manageBtnRole function handles all the buttons for btnRole and betterBtnRole.


- ### Default settings


```js title="button-add.js"
const simplydjs = require('simply-djs')
// When adding a button role to a message
simplydjs.betterBtnRole(interaction, {
	type: 'Add' // type (required) ['Add' (or) 'Remove']
})
```

```js title="button-remove.js"
const simplydjs = require('simply-djs')
// When removing a button role from a message
simplydjs.betterBtnRole(interaction, {
	type: 'Remove' // type (required) ['Add' (or) 'Remove']
})
```

- ### Customized with options

```js title="button-add.js"
const simplydjs = require('simply-djs')
const { ButtonStyle } = require("discord.js")

// When adding a button role to a message
simplydjs.betterBtnRole(interaction, {
	type: 'Add' // type (required) ['Add' (or) 'Remove']
    strict: true,
    channel: interaction.channel,
    buttons: {  
        label: "Button Role",
        style: ButtonStyle.Secondary,
        emoji: "😊"
    },
    messageId: "01234567890123",
})
```

```js title="button-remove.js"
const simplydjs = require('simply-djs')
// When removing a button role from a message
simplydjs.betterBtnRole(interaction, {
	type: 'Remove' // type (required) ['Add' (or) 'Remove']
    strict: true,
    channel: interaction.channel,
    messageId: "01234567890123"
})
```
