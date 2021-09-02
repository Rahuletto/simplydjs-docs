---
sidebar_position: 5
---

# starboard
This is an example of starboard

### Required
```
Intents.FLAGS.GUILD_MESSAGE_REACTIONS
// and
partials: ['MESSAGE', 'CHANNEL', 'REACTION']
```

### With Customization
```js
const simplydjs = require('simply-djs')

// messageReactionAdd event
simplydjs.starboard(client, reaction, {
    event: 'messageReactionAdd',
    chid: 'channel id',
    embedColor: 'hex code', // default: #FFC83D
    emoji:"emoji id", // default: ⭐
    min: 2, // default: 2
  })

// messageReactionRemove event
simplydjs.starboard(client, reaction, {
    event: 'messageReactionRemove',
    chid: 'channel id',
    embedColor: 'hex code', // default: #FFC83D
    emoji:"emoji id", // default: ⭐
    min: 2, // default: 2
  })
  
// messageDelete event
simplydjs.starboard(client, message, {
    event: 'messageDelete',
    chid: 'channel id',
    embedColor: 'hex code', // default: #FFC83D
    emoji:"emoji id", // default: ⭐
    min: 2, // default: 2
  })
```

:::tip TIP
### You can make it without Customization

```js
// messageReactionAdd event
simplydjs.starboard(client, reaction, {
    event: 'messageReactionAdd',
    chid: 'channel id',
  })

// messageReactionRemove event
simplydjs.starboard(client, reaction, {
    event: 'messageReactionRemove',
    chid: 'channel id',
  })
  
// messageDelete event
simplydjs.starboard(client, message, {
    event: 'messageDelete',
    chid: 'channel id',
  })
```
:::

## Output
![image](https://user-images.githubusercontent.com/71836991/129900817-becb2c35-5ad5-44fd-972f-4a9dcafb0551.png)

## Options for starboard function
import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `chid` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link> | ✓ | *none* | Channel to send the sweet suggestions |
| `event` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✓ | *none* | Event you are using the function (messageReactionAdd / messageReactionRemove / messageDelete) |
| `emoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘ | *none* | Other Emoji can also be a star |
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#FFC83D* | Color of the starboard Embed |
| `min`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Integer</Link>| ✘ | *2* | Minimum stars needed to be on starboard |
| `credits`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |

</div>