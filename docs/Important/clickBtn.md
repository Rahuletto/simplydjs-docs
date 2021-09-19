---
sidebar_position: 1
---

# clickBtn
This is clickBtn.. a function used for [ticketSystem](https://simplyd.js.org/docs/Systems/ticketSystem), [btnrole](https://simplyd.js.org/docs/Systems/btnrole), *[(coming soon)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)*

**Note:** This is not a function that does things.. This is completely for backend purpose which is useful for other button related functions

### Options used
```js
const simplydjs = require('simply-djs')

let { Database } = require('quickmongo')
let db = new Database('mongo String')

// interactionCreate Event

simplydjs.clickBtn(interaction, {
    // for ticket System
    embedDesc: 'embed description',
    embedColor: 'hex code', // default: #075FFF
    closeColor: 'color from buttons', 
    closeEmoji: 'emoji id', 
    delColor: 'color from buttons', 
    delEmoji: 'emoji id', // default: ❌
    openColor: 'color from buttons' , 
    openEmoji: 'emoji id',
    timeout: true, 
    cooldownMsg: 'message',
    categoryID: 'category id',
    role: 'role id'
    // for coming soon function
    db: db
    })
```

:::tip TIP
### You can make it without Customization

```js
// interactionCreate Event

simplydjs.clickBtn(interaction)
```
:::

## Options for clickBtn function
import Link from '@docusaurus/Link';

## For ticketSystem

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `timeout` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘ | *true* | Timeout which deletes the ticket after 10 minutes to reduce clutter |
| `cooldownMsg` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘ | *You have already opened a ticket* |  Message sent when a ticket is already opened by the user |

### Embed

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embedDesc` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘ | *a long description* | Embed Description of the embed which is sent when the ticket has been opened |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘ | *#075FFF* | Embed Color of the embed which is sent when the ticket has been opened |
| `credit` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘ | *true* | Credit the package |

</div>

### Close Ticket Options

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `closeColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘ | *PRIMARY* | The color of the Close Ticket Button |
| `closeEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘ | *🔒* | The emoji of the Close Ticket Button |

</div>

### Delete Ticket Options

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `delColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘ | *SECONDARY* | The color of the Delete Ticket Button |
| `delEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘ | *❌* | The emoji of the Delete Ticket Button |

</div>

### Reopen Ticket Options

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `openColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘ | *SUCCESS* | The color of the Reopen Ticket Button |
| `openEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘ | *🔓* | The emoji of the Reopen Ticket Button |

</div>

## For coming soon function

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `db` | <Link to="https://quickmongo.js.org/#/docs/main/main/general/welcome">Database</Link> | ✓ | *none* | Database for that sus function |

</div>