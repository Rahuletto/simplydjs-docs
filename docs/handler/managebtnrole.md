---
title: manageBtnRole
description: A Button Role Handler for simply-djs button role system.
sidebar_position: 1
tags:
  - Handler
  - Button Role
  - Renamed
---

# manageBtnRole

A Button Role Handler for **simply-djs button role system.**

:::caution

You should use [`betterBtnRole()`](../systems/betterbtnrole.md) or [`btnRole()`](../general/btnrole.md) before this function. Because handlers are like back-end (core), They just handle things. But betterBtnRole/btnRole is like front-end. without this, handlers are useless.

:::

## Implementation

```js
simplydjs.manageBtnRole(interaction, { 
  // options (optional)
})
```

## Output

![button role panel](https://i.postimg.cc/Wz2Hq6Gd/image.png)
![assigning role](https://i.postimg.cc/ZqWvPCPj/image.png)

## Types
```ts
simplydjs.manageBtnRole(
	button: ButtonInteraction,
	options: manageBtnRoleOptions
): Promise<boolean>
```

- button: [`ButtonInteraction`](https://old.discordjs.dev/#/docs/discord.js/main/class/ButtonInteraction)
- options: [`manageBtnRoleOptions`](#managebtnroleoptions)

- Resolves: [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (whether gave the role)

## Options 

### `manageBtnOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in manageBtnRole |
| `reply` | <Link to="#btnrolereplies">BtnRoleReplies</Link> | ❌   | _default replies_ | Pass a BtnRoleReplies Object to customize replies |

```ts
export type manageBtnRoleOptions = {
	reply?: BtnRoleReplies;
	strict?: boolean;
};
```

-------------------

### `BtnRoleReplies`

| Parameter | Type | Default    | Description |
| --------- | ----- | -------- | -------- |
| `add` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>  | ✅ Added the {role} role to you   | The message sent when the role is added.  |
| `remove` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>  | ❌ Removed the {role} role from you   | The message sent when the role is removed.  |

```ts
export interface BtnRoleReplies {
	add: string;
	remove: string;
}
```

---------------------

## Example

- ### Default settings

```js title="interactionCreate.js"
const simplydjs = require('simply-djs')

simplydjs.manageBtnRole(interaction)
```

- ### Customized with options

```js title="interactionCreate.js"
const simplydjs = require('simply-djs')

simplydjs.manageBtnRole(interaction, {
  strict: true,
  reply: {
    add: "✅ Added the {role} role to you",
    remove: "❌ Removed the {role} role from you"
  }
})
```