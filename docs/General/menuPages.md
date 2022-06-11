---
sidebar_position: 7
tags:
  - General
---

# menuPages

An Embed paginator using Select Menus


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
simplydjs.menuPages(interaction, {
    data: [
      {...}
    ], // array of data objects (required)
    // options (Optional)
})
```

## Output

![image](https://user-images.githubusercontent.com/71836991/173194790-3e73226f-72f0-40ae-8222-0ac41d889e24.png)

## Arguments:
```ts
simplydjs.menuPages(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: menuEmbOptions
)
```

- interaction: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`menuEmbOptions`](#options-menuemboptions)

## Options `menuEmbOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `type`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">1 (or) 2</Link>   | ❌        | _1_             | The type of menuPage. (1 for ephemeral reply & 2 for editing message) |
| `rows` | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/MessageActionRow">MessageActionRow[]</Link>       | ❌        | _none_     | Add custom rows to the message |
| `embed` | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed">MessageEmbed</Link>       | ✅        | _none_     | The embed of your message that is sent with the select menu |
| `delete` | <Link to="#deleteOpt">deleteOpt</Link>       | ❌         | _default object_     | The data object for the custom delete menu option |
| `data` | <Link to="#dataobj">dataObj[]</Link>       | ✅        | _none_     | The data necessary to create the pages. (Array of <Link to="#dataobj">dataObj</Link>) |
| `placeHolder` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _'Dropdown pages'_  | Placeholder of the select menu |


<details style={{border: '0px solid'}}>
  <summary>dataObj option</summary>


### `dataObj`


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ✅        | _none_  | The label of the option |
| `desc` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ✅        | _none_     | The description of the option |
| `embed` | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed">MessageEmbed</Link>       | ✅        | _none_     | The embed of your message when the option is selected |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ✅        | _none_  | The emoji of the option |

</details>

<details style={{border: '0px solid'}}>
  <summary>deleteOpt option</summary>


### `deleteOpt`


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `enable`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ✅        | _true_             | Enable/ Disable the delete option |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The label of the delete option |
| `desc` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌       | _none_     | The description of the delete option |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The emoji of the delete option |

</details>