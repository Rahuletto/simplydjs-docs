---
sidebar_position: 2
---

# suggestSystem
This is an example of suggestSystem

### With Customization
```js
const simplydjs = require('simply-djs')
let users = require('quickmongo')

// interactionCreate event
simplydjs.suggestBtn(interaction, users, {
   yesEmoji: 'emoji id', // default: ☑️
   yesColor: 'buttonColor', // default: green 
   noEmoji: 'emoji id', // default: X
   noColor: 'buttonColor', // default: red
   denyEmbColor: 'hex color', // default: RED
   agreeEmbColor: 'hex color', // default: GREEN
   })
   
// messageCreate event
simplydjs.suggestSystem(client, message, args, {
   chid: 'channel id',
   embedColor: 'hex color', // defaultL #075FFF
   yesEmoji: 'emoji id', // default: ☑️
   yesColor: 'buttonColor', // default: green 
   noEmoji: 'emoji id', // default: X
   noColor: 'buttonColor', // default: red
})
```

:::tip TIP
### You can make it without Customization

```js
// interactionCreate event
   simplydjs.suggestBtn(interaction, users)

// messageCreate event
simplydjs.suggestSystem(client, message, args, {
   chid: 'channel id'
})
```
:::

:::tip TIP
### You can make suggestSystem for slash commands

#### Note. You really need experience in making slash commands.
```js
// interactionCreate event
simplydjs.suggestBtn(interaction, users)

// suggest slash command
const suggestion = interaction.options.getString('suggestion');

simplydjs.suggestSystem(client, message, suggestion, {
   slash: true,
   // other options
})
```

#### Slash command format
```js
{
  name: 'suggest',
  description: 'suggestSystem using simply-djs',
  options: [{
    name: 'suggestion',
    type: 'STRING',
    description: 'Suggestion',
    required: true,
  }],

    },
```

:::

## Output
![image](https://user-images.githubusercontent.com/71836991/128165290-aa3f9c50-1fc3-4f5c-805d-e32e0e0b7be3.png)

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

## Options for suggestSystem function

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `slash`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *false* | Slash Support for the suggestSystem (need to be in a slash command) |
| `chid` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link> | ✓ | *none* | Channel to send the sweet suggestions |

</div>

### Embeds
<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the suggestion embed |
| `credits`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |

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