---
sidebar_position: 4
---

# stealSticker

This is an example of stealSticker

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`messageCreate` Event (stealSticker command)_

```js
// messageCreate event

simplydjs.stealSticker(message, args, {
  embedTitle: "Title",
  embedColor: "hex code",
  embedFoot: "Text for Footer"
});
```

:::info INFO

### Without Customization

_`messageCreate` Event (stealSticker command)_

```js
// messageCreate event

simplydjs.stealSticker(message, args);
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/131488704-e44d6470-f524-4e74-9e56-62e2342fb1b1.png)

## Options for stealSticker function

import Link from '@docusaurus/Link';

#### Embed

<div style={{textAlign: 'center'}}>

| Options      | Type                                                                                                               | Required | Default                       | Description                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------- | ----------------------------- | ------------------------------- |
| `embedTitle` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | Sticker Added ;)\*            | Embed Title of the stealSticker |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _#075FFF_                     | Color of the Embed              |
| `embedFoot`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _Stop Stealing.. Its Illegal_ | Footer of the Embed             |
| `credit`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_                        | Credit the package              |

</div>
