---
sidebar_position: 2
---

# rps
This is an example of rps (Rock Paper Scissors)

### With Customization
```js
const simplydjs = require('simply-djs')
// messageCreate Event
// rps command
simplydjs.rps(message, {
            embedColor: "hex code", // default: #075FFF
            timeoutEmbedColor: "hex code", // default: #c90000
            drawEmbedColor: "hex code", // default: #075FFF
            winEmbedColor: "hex code", // default: #06bd00
            embedFooter: "A Game of RPS",
            rockColor: "colors", // default: SECONDARY
            paperColor: "colors", // default: SECONDARY
            scissorsColor: "colors", // default: SECONDARY
        })
```

:::tip TIP
### You can make it without Customization

```js
// messageCreate Event
// rps command
simplydjs.rps(message)
```
:::

:::tip TIP
### You can make tictactoe for slash commands

#### Note. You really need experience in making slash commands.
```js
// interactionCreate event
// rps slash command
simplydjs.rps(message, {
    slash: true,
    // other options
})
```

#### Slash command format
```js
{
  name: 'rps',
  description: 'Just a fun rps using simply-djs',
  options: [{
        name: 'user',
        type: 'USER',
        description: 'user to compete with in rps using simply-djs',
        required: true,
      }],
}
```
:::

## Output
![image](https://user-images.githubusercontent.com/71836991/131489358-a463ac58-190d-4572-87ff-17a0e580350e.png)

## Options for rps function
import Link from '@docusaurus/Link';

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `slash`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *false* | Slash Support for the rps (need to be in a slash command) |

### Embed

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the rps embed |
| `timeoutEmbedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#cc0000* | Color of the rps timeout embed |
| `drawEmbedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the rps tie embed |
| `winEmbedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *##06bd00* | Color of the rps winner embed |
| `credit`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |

</div>

### Buttons

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `rockColor`|<Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link>| ✘ | *SECONDARY* |  Color of the rps Rock Button |
| `paperColor`|<Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link>| ✘ | *SECONDARY* |  Color of the rps Paper Button |
| `scissorsColor`|<Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link>| ✘ | *SECONDARY* |  Color of the rps Scissors Button |

</div>
