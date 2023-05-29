---
sidebar_position: 1
tags:
  - General
---

# btnRole

A **Button Role System** that lets you create button roles with your own message. | *Requires: [**manageBtn()**](/docs/handler/manageBtn)*

## Implementation

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
simplydjs.btnRole(interaction, {
	data: {...}, // data object (required)
  // options (optional)
})
```

:::info NOTE
This is **totally** different from [betterBtnRole](/docs/Systems/betterBtnRole) !

`betterBtnRole` is an system which is an button role builder. where,
`btnRole` is a function that sends your message (with embeds) with the buttons necessary for the button role.
:::

## Output

![image](https://user-images.githubusercontent.com/71836991/173194351-4f5c36bc-15ed-48ae-acec-4f045aa6fb35.png)

## Types
```ts
simplydjs.btnRole(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: btnOptions
)
```

- interaction: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`btnOptions`](#options-btnoptions)

## Options `btnOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `embed` | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed">MessageEmbed</Link>       | ✅        | _none_     | The embed of your message that is sent with the necessary buttons |
| `content` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌        | _none_     | The content of your message that is sent with the necessary buttons |
| `data` | <Link to="#dataobj">dataObj[]</Link>       | ✅        | _none_     | The data necessary to create the buttons. (Array of <Link to="#dataobj">dataObj</Link>) |

<details style={{border: '0px solid'}}>
  <summary>dataObj option</summary>

### `dataObj`

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `role` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Role ID</Link>       | ✅        | _none_     | The role to be given when a button is clicked |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _{Role name}_  | The label of the button you're trying to create |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The emoji of the button you're trying to create |
| `style` | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageButtonStyle">MessageButtonStyle</Link> | ❌ | _PRIMARY_  | The style of the button that is getting created.  |
| `url` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The URL that needs to be redirected when clicked (Only when the style is `LINK`) |

</details>