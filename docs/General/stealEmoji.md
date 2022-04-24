---
sidebar_position: 9
---

# stealEmoji
This is an example of stealEmoji

:::danger WARNING !
We have not updated the docs for this function ! Please wait till it gets updated.
:::

### With Customization
```js
const simplydjs = require('simply-djs')
```

*`messageCreate` Event (steal command)*
```js
// messageCreate Event

simplydjs.stealEmoji(message, args, {
    embedTitle: 'Title', 
    embedColor: 'hex code',
    embedFoot: 'Text for Footer',
    failedMsg: 'sorry emoji not found'
})
```

:::info INFO
### Without Customization

*`messageCreate` Event (steal command)*
```js
// message event

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
