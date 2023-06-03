---
sidebar_position: 1
tags:
  - Handler
  - Button Role
---

# manageBtnRole

A Button Role Handler for **simply-djs button role system.**

> This function requires [`connect()`](/docs/general/connect) which connects to the mongo database !

## Implementation

```js
simplydjs.manageBtnRole(interaction, { 
  // options (optional)
})
```

## Output

![button role](https://user-images.githubusercontent.com/71836991/173194351-4f5c36bc-15ed-48ae-acec-4f045aa6fb35.png)

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

```js title="ready.js"
const simplydjs = require('simply-djs')

simplydjs.manageBtnRole(interaction)
```

- ### Customized with options

```js title="ready.js"
const simplydjs = require('simply-djs')

simplydjs.manageBtnRole(interaction, {
  strict: true,
  reply: {
    add: "✅ Added the {role} role to you",
    remove: "❌ Removed the {role} role from you"
  }
})
```