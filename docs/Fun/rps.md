---
sidebar_position: 2
tags:
  - Fun
---

# rps

A classic RPS game, except this time it's on Discord to play with your pals, how cool is that ?

## Program

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="js"
  values= {[
    { label: 'Javascript', value: 'js', },
    { label: 'Typescript', value: 'ts', },
  ]
}>
<TabItem value="js">

```js
const simplydjs = require("simply-djs");
```

</TabItem>

<TabItem value="ts">

```ts
import simplydjs from "simply-djs";
```

</TabItem>

</Tabs>

```js
simplydjs.rps(interaction, { 
  // options (optional)
})
```

## Output

![image](https://user-images.githubusercontent.com/71836991/166234316-74ac4ea1-58f9-46ed-92ac-d5b0139d02f9.png)

## Arguments:
```ts
simplydjs.rps(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: rpsOptions
)
```

- interaction [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`rpsOptions`](#options-rpsoptions)

## Options `rpsOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `embed` | <Link to="/docs/types/CustomizableEmbed">CustomizableEmbed</Link> | ❌   | _Default Embed_     | Pass a CustomizableEmbed Object to customize the embed  |
| `drawColor` | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/ColorResolvable">ColorResolvable</Link> | ❌        | _#075FFF_  | Color of the embed when the match is a draw. |
| `winColor` | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/ColorResolvable">ColorResolvable</Link> | ❌        | _GREEN_  | Color of the embed when someone wins in the match. |
| `opponent`   | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/User">User</Link>     | ❌        | _none_ | The opponent you're playing with. |
| `buttons` | <Link to="#rpsbuttons">rpsButtons</Link> | ❌   | _Default Buttons_     | Pass an rpsButtons Object to customize the buttons  |

----------------

<details style={{border: '0px solid'}}>
  <summary>rpsButtons option</summary>

## `rpsButtons`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `rock`        | <Link to="/docs/types/btnTemplate">btnTemplate</Link> | Pass an btnTemplate Object to customize the button    |
| `paper`       | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the button   |
| `scissors`    | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the button   |

</details>