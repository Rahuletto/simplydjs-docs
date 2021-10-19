---
sidebar_position: 3
---

# bumpSystem

This is an example of bumpSystem

### With Customization

```js
const simplydjs = require("simply-djs");
const { Database } = require("quickmongo");

const db = new Database(mongoURL); // your MongoDB String
```

_`ready` Event_

```js
// ready event
simplydjs.bumpSystem(client, db, {
  event: "ready",
  chid: ["channel id"],
  bumpEmbed: embed1,
  thanksEmbed: emb2
});
```
_`messageCreate` Event_
```js
// messageCreate event
simplydjs.bumpSystem(client, db, {
  event: "messageCreate",
  message: message,
  chid: ["channel id"],
  bumpEmbed: embed1,
  thanksEmbed: emb2
});
```

:::info INFO

### Without Customization

_`ready` Event_
```js
// ready event
simplydjs.bumpSystem(client, db, {
  event: "ready",
  chid: ["channel id"]
});
```

_`messageCreate` Event_
```js
// messageCreate event
simplydjs.bumpSystem(client, db, {
  event: "messageCreate",
  message: message,
  chid: ["channel id"]
});
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/131494338-0b558ee4-063b-4b29-8c4d-54300b484811.png)

## Options for bumpSystem function

import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options | Type                                                                                                             | Required | Default | Description                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------ |
| `event` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✓        | _none_  | Event you are using the function (ready/messageCreate) |

</div>

### ready Event Options

<div style={{textAlign: 'center'}}>

| Options       | Type                                                                                                           | Required | Default | Description                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------- | ------- | ----------------------------------------------- |
| `chid`        | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link> | ✓        | _none_  | Bump Channel IDs to see if you bumped it right  |
| `bumpEmbed`   | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                           | ✘        | _embed_ | Embed sent when the bot needs to remind to bump |
| `thanksEmbed` | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                           | ✘        | _embed_ | Embed sent when someone bumps                   |

</div>

### messageCreate event Options

<div style={{textAlign: 'center'}}>

| Options       | Type                                                                                                           | Required | Default | Description                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------- | ------- | ----------------------------------------------- |
| `chid`        | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link> | ✓        | _none_  | Bump Channel IDs to see if you bumped it right  |
| `message`     | <Link to="https://discord.js.org/#/docs/main/stable/class/Message">Message</Link>                              | ✓        | _none_  | To check if the bump is successful              |
| `bumpEmbed`   | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                           | ✘        | _embed_ | Embed sent when the bot needs to remind to bump |
| `thanksEmbed` | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                           | ✘        | _embed_ | Embed sent when someone bumps                   |

</div>
