---
sidebar_position: 2
---

# rps

This is an example of rps (Rock Paper Scissors)

:::tip TIP

This function has became Promised based and can return the winner `<User>`

:::

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`messageCreate` Event (rps command)_

```js
// messageCreate Event

simplydjs.rps(message, {
  embedColor: "hex code", // default: #075FFF
  timeoutEmbedColor: "hex code", // default: #c90000
  drawEmbedColor: "hex code", // default: #075FFF
  winEmbedColor: "hex code", // default: #06bd00
  embedFooter: "A Game of RPS",
  rockColor: "colors", // default: SECONDARY
  paperColor: "colors", // default: SECONDARY
  scissorsColor: "colors" // default: SECONDARY
});
```

:::info INFO

### Without Customization

_`messageCreate` Event (rps command)_

```js
// messageCreate Event

simplydjs.rps(message);
```

:::

## Returns `<User>`
- rps returns the user who won the match. so you can reward them with some money or xp.

:::tip TIP

### Slash Support.

The package supports `Auto Slash Recognition !` So no more slash options.

#### Slash command format

```js
{
  name: 'rps',
  description: 'Just a fun rps using simply-djs',
  options: [{
        name: 'user',
        type: 'USER',
        description: 'user to compete with in rps using simply-djs',
        required: true,
      }],
}
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/131489358-a463ac58-190d-4572-87ff-17a0e580350e.png)

## Options for rps function

import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options     | Type                                                                                                               | Required | Default | Description                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- | --------------------------------------------------------- |
| `slash`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _false_ | Slash Support for the rps (need to be in a slash command) |

</div>

### Slash Customization
<div style={{textAlign: 'center'}}>

| Options     | Type                                                                                                               | Required | Default | Description                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- | --------------------------------------------------------------- |
| `userSlash` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _user_  | Customize the Slash Option name (user slash option)                             |

</div>

### Embed

<div style={{textAlign: 'center'}}>

| Options             | Type                                                                                                               | Required | Default    | Description                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ---------- | ------------------------------ |
| `embedColor`        | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _#075FFF_  | Color of the rps embed         |
| `embedFoot`         | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _credit_   | Footer of the Embed..          |
| `timeoutEmbedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _#cc0000_  | Color of the rps timeout embed |
| `drawEmbedColor`    | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _#075FFF_  | Color of the rps tie embed     |
| `winEmbedColor`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _##06bd00_ | Color of the rps winner embed  |
| `credit`            | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_     | Credit the package             |

</div>

### Buttons

<div style={{textAlign: 'center'}}>

| Options         | Type                                                                                                | Required | Default     | Description                      |
| --------------- | --------------------------------------------------------------------------------------------------- | -------- | ----------- | -------------------------------- |
| `rockColor`     | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _SECONDARY_ | Color of the rps Rock Button     |
| `paperColor`    | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _SECONDARY_ | Color of the rps Paper Button    |
| `scissorsColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _SECONDARY_ | Color of the rps Scissors Button |

</div>
