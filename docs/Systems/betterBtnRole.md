---
sidebar_position: 2
tags:
  - Systems
---

# betterBtnRole

A **Button Role builder** that lets **admins create** button roles. | *Requires: [**manageBtn()**](/docs/handler/manageBtn)*

## Program

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="js"
  values= {[
    { label: 'Javascript', value: 'js', },
    { label: 'Typescript', value: 'ts', },
  ]
}>
<TabItem value="js">

```js
const simplydjs = require("simply-djs");
```

</TabItem>

<TabItem value="ts">

```ts
import simplydjs from "simply-djs";
```

</TabItem>

</Tabs>

```js
simplydjs.betterBtnRole(client, interaction, {
	type: 'add' // type (required) [add (or) remove]
  // options (optional)
})
```


## Output

![image](https://user-images.githubusercontent.com/71836991/137742616-05fc1330-aeef-4f40-9031-1d81e93ff705.png)

## Arguments:
```ts
simplydjs.betterBtnRole(
  client: Discord.Client,
  interaction: Discord.CommandInteraction,
  options: betterBtnOptions
)
```

- client: [`Discord.Client`](https://discord.js.org/#/docs/discord.js/stable/class/Client)
- interaction [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`betterBtnOptions`](#options-betterbtnoptions)

## Options `betterBtnOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `custom` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌        | _false_     | Throws an error for custom error messages to the user |
| `type` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">add / remove</Link> | ✅        | _none_  | The type which adds new buttons or removes existing buttons.  |
| `channel` | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/TextChannel">TextChannel</Link> | ❌        | _none_  | The channel of the message |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The label of the button you're trying to create |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The emoji of the button you're trying to create |
| `messageId` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌       | _none_  | The message you're trying to add a button to.  |
| `role` | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Role">Role</Link> | ❌ | _none_  | The role to be given when a button is clicked |
| `style` | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageButtonStyle">MessageButtonStyle</Link> | ❌ | _PRIMARY_  | The style of the button that is getting created.  |

:::info NOTE
## `custom` option

When the `custom` option is true, The package will [reject](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject). You can do .catch() to send any custom error message

```js
simplydjs.betterBtnRole(client, interaction, {
  type: 'add'
}).catch(err => {
  // Error handling.
});
```

It will return a `string` as an error code.


<Tabs
  defaultValue="add"
  values= {[
    { label: 'Add Type', value: 'add', },
    { label: 'Remove Type', value: 'remove', },
  ]
}>
<TabItem value="add">

```
NO_MSG - No Message found in the message Id
OVERLOAD - Message reached the maximum amount of buttons
NOT_FOUND - Message not found
OTHER_MSG - The message is sent by another user. Cannot add button.
```

</TabItem>

<TabItem value="remove">

```
NO_MSG - No Message found in the message Id
NO_BTN - There is no button found in the search.
NOT_FOUND - Message not found
OTHER_MSG - The message is sent by another user. Cannot add button.
```

</TabItem>

</Tabs>

:::