---
sidebar_position: 7
tags:
  - Systems
---

# ticketSystem

A **Faster** yet Powerful ticketSystem | *Requires: [**manageBtn()**](/docs/handler/manageBtn)*

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
simplydjs.ticketSystem(interaction, { 
  channelId: '01234567890123' // channelId (required)

  // options (optional)
})
```

## Output

![image](https://user-images.githubusercontent.com/71836991/166234500-94f6db21-9609-430a-93a6-3beced4d7bc6.png)

![image](https://user-images.githubusercontent.com/71836991/166234550-bf3b7205-a421-434a-acf3-e184f5e17aa3.png)

## Arguments:
```ts
simplydjs.ticketSystem(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: tSysOptions
)
```

- interaction [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`tSysOptions`](#options-tsysoptions)

## Options `tSysOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `channelId`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel?scrollTo=id">Channel ID</Link>       | ✅        | _none_     | Channel ID of a Discord `TextChannel`    |
| `button` | <Link to="/docs/types/btnTemplate">btnTemplate</Link> | ❌        | _default button_  | Pass a btnTemplate Object to customize the button  |
| `embed` | <Link to="/docs/types/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |