---
sidebar_position: 7
---

# embedCreate
This is an example of embedCreate

### With Customization
```js
const simplydjs = require('simply-djs')
```

_`messageCreate` Event_ (embedcreate command)
```js
// messageCreate event

simplydjs.embedCreate(message)
```

:::tip TIP
### Slash Support.
You can make embedCreate for slash commands

_`interactionCreate` Event_ (embedcreate command)
```js
// interactionCreate Event
await interaction.deferReply()

simplydjs.embedCreate(interaction, {
   slash: true,
   // other options
})
```

#### Slash command format
```js
{
  name: 'embedCreate',
  description: 'create embeds using simply-djs',
    },
```

:::

## Output
![image](https://user-images.githubusercontent.com/71836991/130612479-52cb2d40-91e6-45c2-9f11-69e193e92dfe.png)

## Options for embedCreate function
import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `slash`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *false* | Slash Support for the embedCreate (need to be in a slash command) |

</div>