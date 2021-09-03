---
sidebar_position: 5
---

# embedCreate
This is an example of embedCreate

### With Customization
```js
const simplydjs = require('simply-djs')

// messageCreate event
// embed-create command
simplydjs.embedCreate(message)
```

:::tip TIP
### You can make embedCreate for slash commands

#### Note. You really need experience in making slash commands.
```js
simplydjs.embedCreate(message, {
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