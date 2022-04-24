---
sidebar_position: 3
tags:
  - Systems
---

# bumpSystem

A Very cool bump reminder system that reminds when a bump is necessary
[Only Disboard]

:::note
This function requires you to [connect()](/docs/General/connect) to the mongo database !
:::

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
simplydjs.bumpSystem(client, message, {
  channelId: ["01234567890123"], // channelId (required if auto: false)
  // options (optional)
})
```


:::info INFO
This should be implemented in the `messageCreate` event and requires a `Message Intent` !

```js
client.on('messageCreate' => {
  simplydjs.bumpSystem() // bump function
})
:::


## Output

![image](https://user-images.githubusercontent.com/71836991/137742616-05fc1330-aeef-4f40-9031-1d81e93ff705.png)

## Arguments:
```ts
simplydjs.bumpSystem(
  client: Discord.Client,
  message: Discord.Message,
  options: bumpOptions
)
```

- client: [`Discord.Client`](https://discord.js.org/#/docs/discord.js/stable/class/Client)
- message: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message)
- options: [`bumpOptions`](#options-bumpoptions)

## Options `btnOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `embed` | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed">MessageEmbed</Link>       | ✅        | _none_     | The embed of your message that is sent with the necessary buttons |
| `content` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌        | _none_     | The content of your message that is sent with the necessary buttons |
| `data` | <Link to="#dataobj">dataObj[]</Link>       | ✅        | _none_     | The data necessary to create the buttons. (Array of <Link to="#dataobj">dataObj</Link>) |

-------------

### `dataObj`

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `role` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Role ID</Link>       | ✅        | _none_     | The role to be given when a button is clicked |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _{Role name}_  | The label of the button you're trying to create |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The emoji of the button you're trying to create |
| `style` | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageButtonStyle">MessageButtonStyle</Link> | ❌ | _PRIMARY_  | The style of the button that is getting created.  |
| `url` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The URL that needs to be redirected when clicked (Only when the style is `LINK`) |