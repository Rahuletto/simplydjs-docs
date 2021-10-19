---
sidebar_position: 8
---

# menuPages

This is an example of menuPages/dropdownPages (Two names)

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`messageCreate` Event (any command)_

```js
// messageCreate Event

let embed = // embed
let emb2 = // embed

simplydjs.dropdownPages(message, {
  type: 1, // default: 1
  embed: embed,
  placeHolder: 'menuPages using simply-djs',
  rows: [] // custom row to send the message with more buttons
  data:[
    {
      label: 'Label',
      desc: 'description',
      emoji: 'emoji id',
      embed: emb2, // embed sent when clicked
    },
  // etc..
  ]
})

```

:::info INFO

### Without Customization

_`messageCreate` Event (any command)_

```js
// messageCreate Event

let embed = // embed
let emb2 = // embed

simplydjs.dropdownPages(message, {
  embed: embed
  data:[
    {
      label: 'Label',
      desc: 'description',
      emoji: 'emoji id',
      embed: emb2, // embed sent when clicked
    },
  // etc..
  ]
})
```

:::

:::tip TIP

### Slash Support.

You can make menuPages for slash commands

_`interactionCreate` Event (any command)_

```js
// interactionCreate Event

let embed = // embed
let emb2 = // embed

await interaction.deferReply()

simplydjs.menuPages(message, {
  slash: true,
  // Other options
})
```

#### Slash command format

```js
{
  name: 'menupages',
  description: 'menuPages using simply-djs',
}
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/129902270-328bb8c3-f3f0-4d97-a4bc-28e309f565b8.png)

## Options for menuPages function

import Link from '@docusaurus/Link';

| Options | Type                                                                                                               | Required | Default | Description                                                     |
| ------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- | --------------------------------------------------------------- |
| `embed` | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                               | ✓        | _none_  | Homepage                                                        |
| `data`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link>     | ✓        | _none_  | Data to make it pages                                           |
| `slash` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _false_ | Slash Support for the menuPages (need to be in a slash command) |

### Menu Options

| Options       | Type                                                                                                             | Required | Default           | Description                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | -------- | ----------------- | ------------------------------------------------ |
| `type`        | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Number</Link> | ✘        | _1_               | Type 1 - Ephemeral Reply / Type 2 - Message Edit |
| `rows`        | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link>   | ✘        | _none_            | Array of MessageActionRow                        |
| `placeHolder` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘        | _'Dropdown Page'_ | Place Holder of the menu                         |

### Options for data

| Options | Type                                                                                                               | Required | Default | Description                              |
| ------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- | ---------------------------------------- |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✓        | _none_  | Label for the option to send embed       |
| `desc`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✓        | _none_  | Description for the option to send embed |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Emoji ID</Link> | ✘        | _none_  | Emoji for the option to send embed       |
| `embed` | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                               | ✓        | _none_  | Embed sent when the option is selected   |

### Delete Option

<div style={{textAlign: 'center'}}>

| Options     | Type                                                                                                               | Required | Default                        | Description                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------ | ------------------------------------ |
| `delOption` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_                         | Disable/Enable the Delete Option     |
| `delLabel`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _Delete_                       | Label of the delete option in menu   |
| `delDesc`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _Delete the Select Menu Embed_ | Description of delete option in menu |
| `delEmoji`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Emoji ID</Link> | ✘        | _❌_                           | Emoji of Delete Message Button       |

</div>
