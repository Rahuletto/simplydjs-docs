---
sidebar_position: 1
---

# ticketSystem
This is an example of ticketSystem

### With Customization
```js
const simplydjs = require('simply-djs')

// interactionCreate
simplydjs.clickBtn(interaction, {
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
    })

// messageCreate event
// setup-ticket command

simplydjs.ticketSystem(message, message.channel, {
     embedDesc: 'embed description',
    embedColor: 'hex code', // default: #075FFFF
    embedFoot: 'footer text',
    emoji: 'emoji id', // default:, 🎫
    color: 'color from buttons',
})
```

:::tip TIP
### You can make it without Customization

```js
// interactionCreate event
simplydjs.clickBtn(button)

// messageCreate event
// setup-ticket command

simplydjs.ticketSystem(message, message.channel)
```
:::

## Output
![image](https://user-images.githubusercontent.com/71836991/127871121-30c49c7f-7b18-48df-bb93-969213817e19.png)

![image](https://user-images.githubusercontent.com/71836991/127871158-f13ee7a9-8cbe-415c-8e54-49c197accb32.png)


## Options for clickBtn function
import Link from '@docusaurus/Link';

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

## Options for ticketSystem function

### Embed

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embedDesc` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘ | *🎫 Create a ticket by clicking the button 🎫* | Embed Description of the open ticket embed |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘ | *#075FFF* | Embed Color of the open ticket embed |
| `embedFoot` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘ | *credits* | Embed Footer of the open ticket embed (when credits: false) |
| `credit` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘ | *true* | Credit the package |

</div>

### Buttons

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `color` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘ | *SECONDARY* | The color of the Open Ticket Button |
| `emoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘ | *🎫* | The emoji of the Open Ticket Button |

</div>