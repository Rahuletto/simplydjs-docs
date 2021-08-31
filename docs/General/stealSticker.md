---
sidebar_position: 4
---

# stealSticker
This is an example of stealSticker

### With Customization
```js
const simplydjs = require('simply-djs')
// messageCreate event
// stealSticker command
simplydjs.stealSticker(message, args, {
    embedTitle: 'Title', 
    embedColor: 'hex code',
    embedFoot: 'Text for Footer',
})
```

:::tip TIP
### You can make it without Customization

```js
// messageCreate event
// stealSticker command
simplydjs.stealSticker(message, args)
```

:::

## Output
![image](https://user-images.githubusercontent.com/71836991/131488704-e44d6470-f524-4e74-9e56-62e2342fb1b1.png)

## Options for stealSticker function
import Link from '@docusaurus/Link';

#### Embed

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embedTitle` |<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘ | Sticker Added ;)* | Embed Title of the stealSticker |
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the Embed |
| `embedFoot`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *Stop Stealing.. Its Illegal* | Footer of the Embed |
| `credit`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |

</div>
