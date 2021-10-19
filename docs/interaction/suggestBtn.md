---
sidebar_position: 2
---

# suggestBtn
This is suggestBtn.. a function used for [suggestSystem](https://simplyd.js.org/docs/Systems/suggestSystem)
Brains for the suggestion system

**Note:** This is not a function that does things.. This is completely for backend purpose which is useful for suggestion system functions

### Options used
```js
const simplydjs = require('simply-djs')

let { Database } = require('quickmongo')
let db = new Database('mongo String')
```

_`interactionCreate` Event_
```js
// interactionCreate event
simplydjs.suggestBtn(interaction, db, {
   yesEmoji: 'emoji id', // default: ☑️
   yesColor: 'buttonColor', // default: green 
   noEmoji: 'emoji id', // default: X
   noColor: 'buttonColor', // default: red
   denyEmbColor: 'hex color', // default: RED
   agreeEmbColor: 'hex color', // default: GREEN
   })
```

:::info
### Without Customization

_`interactionCreate` Event_
```js
// interactionCreate event
   simplydjs.suggestBtn(interaction, db)
```
:::


## Options for suggestBtn function
import Link from '@docusaurus/Link';

### Embeds
<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `denyEmbColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *RED* | Color of the denied suggestion embed |
| `agreeEmbColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *GREEN* | Color of the accepted suggestion embed |

</div>

### Buttons
<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `yesEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *☑️* | Emoji of the button which accepts suggestion |
| `yesColor`| <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link>| ✘ | *SUCCESS* | Color for the Accept Suggestion button |
| `noEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *X* | Emoji of the button which denies suggestion |
| `noColor`| <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link>| ✘ | *DANGER* | Color for the Deny Suggestion button |

</div>