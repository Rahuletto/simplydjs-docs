---
sidebar_position: 3
tags:
  - Fun
---

# tictactoe

One line implementation of a super enjoyable **tictactoe game**.

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
simplydjs.tictactoe(interaction, { 
  // options (optional)
})
```

## Output

![image](https://user-images.githubusercontent.com/71836991/137742616-05fc1330-aeef-4f40-9031-1d81e93ff705.png)

## Arguments:
```ts
simplydjs.tictactoe(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: tttOptions
)
```

- interaction [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`tttOptions`](#options-tttoptions)

## Options `tttOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `embed` | <Link to="/docs/types/CustomizableEmbed">CustomizableEmbed</Link> | ✘   | _Default Embed_     | Pass a CustomizableEmbed Object to customize the embed  |
| `result` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">'Button' / 'Embed'</Link> | ✘        | _'EMBED'_  | Choose the way you want to show the results of the match |
| `user`   | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/User">User</Link>     | ✘        | _none_ | The opponent you're playing with. |
| `buttons` | <Link to="#tttbuttons">tttButtons</Link> | ✘   | _Default Buttons_     | Pass an tttButtons Object to customize the buttons  |

-------------------------

## `tttButtons`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `X`        | <Link to="#tttBtnTemplate">btnTemplate</Link> | The Customization of the move of the 'X' user    |
| `O`       | <Link to="#tttBtnTemplate">btnTemplate</Link> | The Customization of the move of the 'O' user    |
| `idle`    | <Link to="#tttBtnTemplate">btnTemplate</Link> | The Customization of the button which is not occupied   |


---------------------------

## `tttBtnTemplate`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `style`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageButtonStyle">MessageButtonStyle</Link>       | The Style of the Button of your choice    |
| `emoji`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | Custom Emoji (or) any emoji for your button.    |