---
sidebar_position: 7
tags:
  - Systems
---

# suggestSystem

How cool is **stealing an emoji** from another server ? Feel the power with this function

:::note
This function requires you to [connect()](/docs/General/connect) to the mongo database !
:::

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
simplydjs.suggestSystem(interaction, { 
  channelId: '01234567890123' // channelId (required)

  // options (optional)
})
```

## Output

![image](https://user-images.githubusercontent.com/71836991/166235500-8f036a66-2c53-43c6-9a39-0f7f96c8f15b.png)


## Arguments:
```ts
simplydjs.suggestSystem(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: suggestOptions
)
```

- interaction [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`suggestOptions`](#options-suggestoptions)

## Options `suggestOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `channelId`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel?scrollTo=id">Channel ID</Link>       | ✅        | _none_     | Channel ID of a Discord `TextChannel`    |
| `buttons` | <Link to="#suggestbuttons">suggestButtons</Link> | ❌        | _default buttons_  | Pass a suggestButtons Object to customize the button  |
| `embed` | <Link to="/docs/types/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |
| `suggestion`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _none_ | The suggestion to post in the channel |


<details style={{border: '0px solid'}}>
  <summary>suggestButtons options</summary>

## `suggestButtons`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `upvote`        | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the button   |
| `downvote`       | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the button   |

</details>