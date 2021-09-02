---
sidebar_position: 1
---

# ghostPing
This is an example of ghostPing

### With Customization
```js
const simplydjs = require('simply-djs')
// messageDelete event
simplydjs.ghostPing(message, {
embedDesc: 'desc',
embedColor: 'hex color',
embedFoot: 'Footer'
})
```

:::tip TIP
### You can make it without Customization

```js
const simplydjs = require('simply-djs')
// messageDelete event
simplydjs.ghostPing(message)
```

:::

## Output
![image](https://user-images.githubusercontent.com/71836991/128010116-601c6d6e-8d90-42d7-b741-446943e106be.png)

## Options for ghostPing function

import Link from '@docusaurus/Link';

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embed` | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link> | ✘ | *embed* | Embed that sends when there is a ghost Ping |
| `embedDesc`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | (*a long message*) | Embed Description
| `embedColor`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>| ✘ | *#075FFF* | Color of the embed |
| `embedFoot`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *Ghost Ping oop* | Foot of the embed (Need to make credits: false) |
| `credit`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *true* | Credit the package |
