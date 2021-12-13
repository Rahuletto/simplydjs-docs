---
sidebar_position: 3
---

# chatbot

This is an example of chatbot

:::info INFO

Translations and localizations are coming soon. (Meaning native language support.)

:::

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`messageCreate` Event_

```js
// messageCreate Event

simplydjs.chatbot(client, message, {
  chid: "channel id",
  name: "chatbot" // default: Your bot name
});
```

:::info INFO

### Without Customization

_`messageCreate` Event_

```js
// messageCreate Event

simplydjs.chatbot(client, message, {
  chid: "channel id"
});
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/128004987-058f76b2-37ff-4009-a14e-e69cd8cb3747.png)

## Options for chatbot function

import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options     | Type                                                                                                                 | Required | Default          | Description                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | -------- | ---------------- | ---------------------------------- |
| `chid`      | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link> | ✓        | _none_           | Channel ID for the chatbot to talk |
| `name`      | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>     | ✘        | _your bot name_  | The chatbot name                   |
| `developer` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>     | ✘        | _Rahuletto#0243_ | The Developer of the bot           |

</div>
