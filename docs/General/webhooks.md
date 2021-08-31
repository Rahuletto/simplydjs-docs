---
sidebar_position: 5
---

# webhooks
This is an example of webhooks

### With Customization
```js
const simplydjs = require('simply-djs')

// any event
simplydjs.webhooks(client, {
    chid: 'channel id', // required
    msg: 'message (not embed)',
    embed: exampleEmbed, // an embed
    // u need atleast one (msg or embed) to send or it will give errors
    username: 'webhook username', // default: ur bot username
    avatar: 'webhook avatar', // default: ur bot avatar
})
```

:::tip TIP
### You can make it without Customization

```js
const simplydjs = require('simply-djs')

// any event
simplydjs.webhooks(client, {
    chid: 'channel id', // required
    msg: 'message (not embed)',
    embed: exampleEmbed, // an embed
    // u need atleast one (msg or embed) to send or it will give errors
})
```

:::

## Output
![image](https://user-images.githubusercontent.com/71836991/127870208-e790a498-99af-4fcc-a359-1f90607c59a5.png)

## Options for webhooks function

import Link from '@docusaurus/Link';

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `chid` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link> | ✓ | *none* | Channel to send a message using webhook |
| `msg`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✓ | *' '* | Message to send |
| `embed`|<Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>| ✓ | *none* | Embed sent using webhooks |
| `username`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *Your Bot Username* | Username of the webhook |
| `avatar`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Image URL</Link>| ✘ | *Your Bot Avatar* | Avatar of the webhook |
