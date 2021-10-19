---
sidebar_position: 1
---

# ghostPing

This is an example of ghostPing

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`messageDelete` Event_

```js
// messageDelete Event
simplydjs.ghostPing(message, {
    logChannel: 'channel id',

    embedDesc: 'desc',
    embedColor: 'hex color',
    embedFoot: 'Footer'
    // (Or)
    embed: embed
})
```

:::info INFO

### Without Customization

_`messageDelete` Event_

```js
// messageDelete Event
simplydjs.ghostPing(message);
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/128010116-601c6d6e-8d90-42d7-b741-446943e106be.png)

## Options for ghostPing function

import Link from '@docusaurus/Link';

| Options      | Type                                                                                                                 | Required | Default            | Description                                     |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | -------- | ------------------ | ----------------------------------------------- |
| `embed`      | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                                 | ✘        | _embed_            | Embed that sends when there is a ghost Ping     |
| `embedDesc`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>     | ✘        | (_a long message_) | Embed Description                               |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>   | ✘        | _#075FFF_          | Color of the embed                              |
| `embedFoot`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>     | ✘        | _Ghost Ping oop_   | Foot of the embed (Need to make credits: false) |
| `logChannel` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link> | ✘        | _none_             | Channel ID to log ghost ping                    |
| `credit`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>   | ✘        | _true_             | Credit the package                              |
