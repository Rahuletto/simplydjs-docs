---
sidebar_position: 4
---

# modmail
This is an example of modmail

### Required
```
Intents.FLAGS.DIRECT_MESSAGES
```

### With Customization
```js
const simplydjs = require('simply-djs')

// messageCreate event
// modmail command
simplydjs.modmail(client, message, {
  content: 'Hi' // default: ***Support Team***
  role: 'role id', // support role
  dmToggle: true, // default: true
  blacklistUser: ['userid'], // blacklisted user id's
  blacklistGuild: ['guildid'], // server that disabled modmail
  categoryID: 'id', // category id
  embedColor: 'hex code', // default: #075FFF
  
  delColor: 'DANGER', // default: DANGER
  delEmoji: 'emoji id', // default: '❌'
})
```

:::tip TIP
### You can make it without Customization

```js
// messageCreate event
// modmail command
simplydjs.modmail(client, message)
```
:::

## Output
![image](https://user-images.githubusercontent.com/71836991/130611260-64590a47-6065-4af6-8d04-dd8995ee353f.png)


## Options for modmail function
import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `content` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘ | *none* | Message Content outside of embed |
| `role` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Role ID</Link> | ✘ | *none* | Support Role ID to ping them |
| `dmToggle` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘ | *true* | Toggle ON/OFF the dm modmail feature |
| `blacklistUser` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link> | ✘ | *none* | Blacklist users if they are spamming |
| `blacklistGuild` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link> | ✘ | *none* | Set Guilds in blacklist zone so you can't create modmails in that guild |
| `categoryID` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Category ID</Link> | ✘ | *none* | Category ID to make the server clean |
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the embed which is sent in modmail |
| `credit`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |

</div>

### Buttons

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `delColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘ | *DANGER* | The color of the Delete Modmail Button |
| `delEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘ | *❌* | The emoji of the Delete Modmail Button |


</div>