---
sidebar_position: 1
---

# tictactoe
This is an example of tictactoe

### With Customization
```js
const simplydjs = require('simply-djs')

// messageCreate event
// tictactoe command
simplydjs.tictactoe(message, {
    xEmoji: 'emoji id', //default: ❌
    oEmoji: 'emoji id', //default: ⭕
    idleEmoji: 'emoji id', //default: ➖
    embedColor: 'hex code', //default: #075FFF
    embedFoot: 'text for footer' //default: 'Make sure to win ;)' 
})
```

:::tip TIP
### You can make it without Customization

```js
// messageCreate event
// tictactoe command
simplydjs.tictactoe(message)
```
:::

:::tip TIP
### You can make tictactoe for slash commands

#### Note. You really need experience in making slash commands.
```js
// interactionCreate event
// tictactoe slash command
interaction.deferReply()

simplydjs.tictactoe(interaction, {
    slash: true,
    // other options
})
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

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `slash`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *false* | Slash Support for the Tictactoe (need to be in a slash command) |

### Embed

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the Tictactoe guide embed |
| `embedFoot`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *credits* | Embed Footer when the credits turned off |
| `credit`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |

</div>

### Buttons

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `xEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *❌* |  Emoji for X user [Player 1] |
| `oEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *⭕* | Emoji for O user [Player 2] |
| `idleEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *➖* | Emoji when the space is not occupied |

</div>
