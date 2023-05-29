---
sidebar_position: 5
tags:
  - General
---

# embedPages

An *powerful yet customizable* **Embed Paginator**

## Implementation

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
let pages = [] // Contains array of MessageEmbed.

simplydjs.embedPages(interaction, pages, {
  // options (Optional)
})
```


## Output

![image](https://user-images.githubusercontent.com/71836991/173194656-d6a39729-50f3-4238-8522-714743a9232a.png)

## Types
```ts
simplydjs.embedCreate(
  interaction: Discord.Message | Discord.CommandInteraction,
  pages: Discord.MessageEmbed[]
  options: pagesOption
)
```

- interaction: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- pages: [`Discord.MessageEmbed[]`](https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed)
- options: [`pagesOption`](#options-pagesoption)

## Options `pagesOption`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `buttons` | <Link to="#pagebuttons">Pagebuttons</Link> | ❌        | _default buttons_  | Pass a Pagebuttons Object to customize the button  |
| `skips`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | _true_             | Enable/Disable the first/last page buttons     |
| `delete`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | _true_             | Enable/Disable the Delete message button     |
| `dynamic`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | _false_             | Change buttons corresponding to the page you are in  |
| `count`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | _false_             | Show the current page number you are in |
| `rows` | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/MessageActionRow">MessageActionRow[]</Link>       | ❌        | _none_     | Add custom rows to the message |
| `timeout`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</Link>   | ❌        | _120000_             | Show the current page number you are in |
| `disable`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">'Label' (or) 'Emoji' (or) 'None'</Link> | ❌  | _label_ | Render the button with an emoji or a label. |


<details style={{border: '0px solid'}}>
  <summary>Pagebuttons option</summary>

## `Pagebuttons`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `firstBtn`        | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> |  Pass an buttonTemplate Object to customize the button   |
| `nextBtn`        | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> |  Pass an buttonTemplate Object to customize the button   |
| `backBtn`        | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> |  Pass an buttonTemplate Object to customize the button   |
| `lastBtn`        | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> |  Pass an buttonTemplate Object to customize the button   |
| `deleteBtn`        | <Link to="/docs/typedef/buttonTemplate">buttonTemplate</Link> |  Pass an buttonTemplate Object to customize the button   |

</details>