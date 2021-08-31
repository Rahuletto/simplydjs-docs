---
sidebar_position: 3
---

# chatbot
This is an example of chatbot

### With Customization
```js
const simplydjs = require('simply-djs')
// messageCreate Event

simplydjs.chatbot(client, message, {
chid: 'channel id',
name: 'chatbot', // default: Your bot name
})
```

:::tip TIP
### You can make it without Customization

```js
// messageCreate Event

simplydjs.chatbot(client, message, {
chid: 'channel id',
})
```
:::

## Output
![image](https://user-images.githubusercontent.com/71836991/128004987-058f76b2-37ff-4009-a14e-e69cd8cb3747.png)

## Options for chatbot function
import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `chid`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link>| ✓ | *none* | Channel ID for the chatbot to talk |
| `name`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *your bot name* | The chatbot name |
| `developer`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *Rahuletto#0243* | The Developer of the bot |

</div>