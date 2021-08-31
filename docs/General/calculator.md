---
sidebar_position: 4
---

# calculator
This is an example of calculator

### With Customization
```js
const simplydjs = require('simply-djs')

// messageCreate event
// calculator command
simplydjs.calculator(message, {
    embedColor: 'hex code',
})
```

:::tip TIP
### You can make calculator for slash commands

#### Note. You really need experience in making slash commands.
```js
// interactionCreate event
// calculator slash command
simplydjs.calculator(interaction, {
    // your options
    slash: true,
})
```

#### Slash command format
```js
{
  name: 'calculator',
  description: 'Just a casual calculator. Using simply-djs'
}
```

:::

## Output
![calc](https://user-images.githubusercontent.com/71836991/127868737-1284360e-2b74-4500-af24-99b88bbcb1a0.png)

## Options for calculator function
import Link from '@docusaurus/Link';

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `slash`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *false* | Slash Support for the Calculator (need to be in a slash command) |

#### Embed

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the Embed which has the Result for Calculator |
| `credit`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |

</div>
