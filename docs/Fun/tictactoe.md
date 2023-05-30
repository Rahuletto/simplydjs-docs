---
sidebar_position: 3
tags:
  - Fun
---

# tictactoe

One line implementation of a super enjoyable **tictactoe game**.

## Implementation

```js
simplydjs.tictactoe(interaction, { 
  // options (optional)
})
```

## Output

![image](https://user-images.githubusercontent.com/71836991/173194911-6a800bd8-b7f8-4d2f-8089-dba1843b0a75.png)

## Types
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
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> | ❌   | _Default Embed_     | Pass a CustomizableEmbed Object to customize the embed  |
| `result` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">'Button' / 'Embed'</Link> | ❌        | _'EMBED'_  | Choose the way you want to show the results of the match |
| `user`   | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/User">User</Link>     | ❌        | _none_ | The opponent you're playing with. |
| `buttons` | <Link to="#tttbuttons">tttButtons</Link> | ❌   | _Default Buttons_     | Pass an tttButtons Object to customize the buttons  |

<details style={{border: '0px solid'}}>
  <summary>tttButtons options</summary>

## `tttButtons`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `X`        | <Link to="#tttBtnTemplate">tttBtnTemplate</Link> | The Customization of the move of the 'X' user    |
| `O`       | <Link to="#tttBtnTemplate">tttBtnTemplate</Link> | The Customization of the move of the 'O' user    |
| `idle`    | <Link to="#tttBtnTemplate">tttBtnTemplate</Link> | The Customization of the button which is not occupied   |

</details>


<details style={{border: '0px solid'}}>
  <summary>tttBtnTemplate</summary>
  

## `tttBtnTemplate`


| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `style`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageButtonStyle">MessageButtonStyle</Link>       | The Style of the Button of your choice    |
| `emoji`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | Custom Emoji (or) any emoji for your button.    |

</details>