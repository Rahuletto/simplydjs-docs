---
sidebar_position: 7
tags:
  - Systems
---

# starboard

Efficient yet Simplest starboard system ever existed !

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
simplydjs.starboard(client, reaction, {
  // options (Optional)
})
```

:::info INFO
  ## Usage:
  This function should be used only in `messageReactionAdd`, `messageReactionDelete` and `messageDelete` events
:::

:::tip
  When using the function for `messageDelete` event, replace `reaction` to `message`

  - Example:
  ```js
  client.on('messageDelete', () => {
    simplydjs.starboard(client, message, {
      // options (Optional)
    })
  })
  
  ```
:::

## Output

![image](https://user-images.githubusercontent.com/71836991/173193331-11bbc2ba-0ec5-4953-a410-431d8cea267c.png)


## Arguments:
```ts
simplydjs.starboard(
  client: Discord.Client,
  reaction: Discord.Message | Discord.MessageReaction,
  options: starboardOption
)
```

- client: [`Discord.Client`](https://discord.js.org/#/docs/discord.js/stable/class/Client)
- reaction: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.MessageReaction`](https://discord.js.org/#/docs/discord.js/stable/class/MessageReaction)
- options: [`starboardOption`](#starboardembed)

## Options `starboardOption`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `channelId`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel?scrollTo=id">Channel ID</Link>       | ✅        | _none_     | Channel ID of a Discord `TextChannel`    |
| `embed` | <Link to="#starboardembed">StarboardEmbed</Link>         | ❌        | _default embed_  | Pass a StarboardEmbed Object to customize the embed  |
| `emoji`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _⭐_ | Emoji required as reaction to list the message on the starboard |
| `min`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string/number</Link>     | ❌        | _2_ | The number of reactions required to list in the starboard |

<details style={{border: '0px solid'}}>
  <summary>StarboardEmbed options</summary>

## `StarboardEmbed`
| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `author`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageEmbedAuthor">MessageEmbedAuthor</Link>       | Author of the embed passed as an object    |
| `title`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | Title of the embed in a function    |
| `color`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/ColorResolvable">ColorResolvable</Link>       | Color of the embed passed as a Hex Code (or) RGB Value    |
| `description`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>        | Description of the embed that you're trying to edit.   |

</details>