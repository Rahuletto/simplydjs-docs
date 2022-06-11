---
sidebar_position: 4
tags:
  - Systems
---

# giveawaySystem

A **Powerful** yet simple giveawaySystem | *Requires: [**manageBtn()**](/docs/handler/manageBtn)*

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
simplydjs.giveawaySystem(client, interaction, { 
  // options (optional)
})
```

## Output

![image](https://user-images.githubusercontent.com/71836991/173193328-d524dc59-c24f-487e-aeab-8148435d76d6.png)


## Arguments:
```ts
simplydjs.giveawaySystem(
  client: Discord.Client
  interaction: Discord.Message | Discord.CommandInteraction,
  options: giveawayOptions
)
```

- client: [`Discord.Client`](https://discord.js.org/#/docs/discord.js/stable/class/Client)
- interaction [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`giveawayOptions`](#options-giveawayoptions)

## Options `giveawayOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `prize`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _none_ | The prize rewarded to the winner in the giveaway |
| `winners`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _1_ | The number of winners who will win at the end of the giveaway |
| `time`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _1h_ | The time of the end of that particular giveaway |
| `channel`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel">TextChannel</Link>       | ❌        | _none_     | Channel of a Discord `TextChannel`    |
| `buttons` | <Link to="#gsysbuttons">gSysButtons</Link> | ❌        | _default buttons_  | Pass a gSysButtons Object to customize the button  |
| `manager`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Role ID</Link> | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Role">Role</Link>     | ❌        | _none_ | The role of the giveaway manager |
| `req`   | <Link to="#requirement">Requirement Object</Link> | ❌        | _none_ | The requirements to enter the giveaway |
| `ping`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Role ID</Link> | ❌  | _none_ | Ping an role to let others know there is a giveaway |
| `embed` | <Link to="/docs/types/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |
| `fields` | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/EmbedFieldData">EmbedFieldData[]</Link>         | ❌        | _default fields_  | Pass an Array of Embed Fields to customize the embed fields |
| `disable`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">'Label' (or) 'Emoji'</Link> | ❌  | _label_ | Render the button with an emoji or a label. |

<details style={{border: '0px solid'}}>
  <summary>requirement options</summary>

## `requirement`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `type`        | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">'Role' (or) 'Guild' (or) 'None'</Link> |  The type of the requirements whether its role required or guild joined.   |
| `id`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | The Role ID (if type: 'Role') or Guild ID (if type: 'Guild')  |

</details>

<details style={{border: '0px solid'}}>
  <summary>gSystButtons options</summary>

## `gSysButtons`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `enter`        | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the button   |
|  `end`       | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the button   |
|  `reroll`       | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the button   |

</details>