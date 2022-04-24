---
sidebar_position: 2
---

# calculator

This is an example of calculator

:::danger WARNING !
We have not updated the docs for this function ! Please wait till it gets updated.
:::

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`messageCreate` Event (calculator command)_

```js
// messageCreate Event
simplydjs.calculator(message, {
  embedColor: "hex code"
});
```

:::tip TIP

### Slash Support

The package supports `Auto Slash Recognition !` So no more slash options.

#### Slash command format

```js
{
  name: 'calculator',
  description: 'Just a casual calculator. Using simply-djs'
}
```

:::

## Output

![calc](https://user-images.githubusercontent.com/71836991/127868737-1284360e-2b74-4500-af24-99b88bbcb1a0.png)

## Options for calculator function

import Link from '@docusaurus/Link';

| Options | Type                                                                                                               | Required | Default | Description                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- | ---------------------------------------------------------------- |
| `slash` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _false_ | Slash Support for the Calculator (need to be in a slash command) |

### Embed

<div style={{textAlign: 'center'}}>

| Options      | Type                                                                                                               | Required | Default   | Description                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------- | --------- | ------------------------------------------------------ |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _#075FFF_ | Color of the Embed which has the Result for Calculator |
| `credit`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_    | Credit the package                                     |

</div>
