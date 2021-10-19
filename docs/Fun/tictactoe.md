---
sidebar_position: 1
---

# tictactoe

This is an example of tictactoe

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`messageCreate` Event (tictactoe command)_

```js
// messageCreate Event

simplydjs.tictactoe(message, {
  xEmoji: "emoji id", //default: ❌
  oEmoji: "emoji id", //default: ⭕
  idleEmoji: "emoji id", //default: ➖
  embedColor: "hex code", //default: #075FFF
  embedFoot: "text for footer" //default: 'Make sure to win ;)'
});
```

:::info INFO

### Without Customization

_`messageCreate` Event (tictactoe command)_

```js
// messageCreate event
<<<<<<< HEAD

simplydjs.tictactoe(message);
=======
// tictactoe command
simplydjs.tictactoe(client, message)
>>>>>>> 040843a37c58ecc677d5e57ba2a0847c5e51ae2b
```

:::

:::tip TIP

### Slash Support.

You can make tictactoe for slash commands

_`interactionCreate` Event (tictactoe command)_

```js
// interactionCreate event

await interaction.deferReply();

<<<<<<< HEAD
simplydjs.tictactoe(interaction, {
  slash: true,

  // Slash Options
  userSlash: "option name" // User Slash Option Name
});
=======
simplydjs.tictactoe(client, interaction, {
    slash: true,
    // other options
})
>>>>>>> 040843a37c58ecc677d5e57ba2a0847c5e51ae2b
```

#### Slash command format

```js
{
  name: 'tictactoe',
  description: 'Just a fun TicTacToe. Using simply-djs',
  options: [{
        name: 'user',
        type: 'USER',
        description: 'user to compete with in TicTacToe using simply-djs',
        required: true,
      }],
}
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/127869643-d78b69c4-ea01-4da2-abf7-2bc9584e1ae6.png)

## Options for tictactoe function

import Link from '@docusaurus/Link';

| Options     | Type                                                                                                               | Required | Default | Description                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- | --------------------------------------------------------------- |
| `slash`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _false_ | Slash Support for the Tictactoe (need to be in a slash command) |
| `userSlash` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _user_  | Slash Option Name (Customizability)                             |

### Embed

<div style={{textAlign: 'center'}}>

| Options      | Type                                                                                                               | Required | Default   | Description                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------- | --------- | ---------------------------------------- |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _#075FFF_ | Color of the Tictactoe guide embed       |
| `embedFoot`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _credits_ | Embed Footer when the credits turned off |
| `credit`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_    | Credit the package                       |

</div>

### Buttons

<div style={{textAlign: 'center'}}>

| Options     | Type                                                                             | Required | Default | Description                          |
| ----------- | -------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------ |
| `xEmoji`    | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘        | _❌_    | Emoji for X user [Player 1]          |
| `oEmoji`    | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘        | _⭕_    | Emoji for O user [Player 2]          |
| `idleEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘        | _➖_    | Emoji when the space is not occupied |

</div>
