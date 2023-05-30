---
sidebar_position: 2
tags:
  - General
---

# calculator

An Unique **calculator** which can be *used inside Discord*

## Implementation

```js
simplydjs.calculator(interaction)
```

## Output

![image](https://user-images.githubusercontent.com/71836991/166237804-7c93a186-a957-49e6-8591-5e83a4892ff7.png)

## Types
```ts
simplydjs.calculator(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: calcOptions
)
```

- interaction: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`calcOptions`](#options-calcoptions)

## Options `calcOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `buttons` | <Link to="#calcbuttons">calcButtons</Link> | ❌        | _default buttons_  | Pass a calcButtons Object to customize the button  |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |


<details style={{border: '0px solid'}}>
  <summary>calcButtons options</summary>

## `calcButtons`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `numbers`        | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageButtonStyle">MessageButtonStyle</Link> |  Pass a Button Style of the buttons which contains numbers   |
| `symbols`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageButtonStyle">MessageButtonStyle</Link> |  Pass a Button Style of the buttons which contains special characters (or) expressions   |
| `delete`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageButtonStyle">MessageButtonStyle</Link> |  Pass a Button Style of the buttons which deletes the calculator  |

</details>