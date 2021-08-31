---
sidebar_position: 3
---

# stealEmoji
This is an example of stealEmoji

### With Customization
```js
const simplydjs = require('simply-djs')
// message event
// steal command
simplydjs.stealEmoji(message, args, {
    embedTitle: 'Title', 
    embedColor: 'hex code',
    embedFoot: 'Text for Footer',
    failedMsg: 'sorry emoji not found'
})
```

:::tip TIP
### You can make it without Customization

```js
const simplydjs = require('simply-djs')
// message event
// steal command
simplydjs.stealEmoji(message, args)
```

:::

## Output
![image](https://user-images.githubusercontent.com/71836991/127869837-880e67da-9a32-4df7-a070-6f2ae89e6a3f.png)

## Options for stealEmoji function
import Link from '@docusaurus/Link';

#### Embed

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embedTitle` |<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘ | *Emoji Added ;)* | Embed Title of the stealEmoji |
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the Embed |
| `embedFoot`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *Stop Stealing.. Its Illegal* | Footer of the Embed |
| `failedMsg`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *Couldn't find an emoji from it* | Message sent when emoji is invalid (or) emoji not found |
| `credit`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |

</div>
