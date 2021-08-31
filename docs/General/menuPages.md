---
sidebar_position: 8
---

# menuPages
This is an example of menuPages/dropdownPages (Two names)

### With Customization
```js
const simplydjs = require('simply-djs')

// messageCreate event
// any command

let embed = // embed
let emb2 = // embed

simplydjs.dropdownPages(message, {
  type: 1, // default: 1
  embed: embed,
  placeHolder: 'menuPages using simply-djs',
  rows: [], // custom row to send the message with more buttons
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

:::tip TIP
### You can make it without Customization

```js
const simplydjs = require('simply-djs')

// messageCreate event
let embed = // embed
let emb2 = // embed

simplydjs.dropdownPages(message, {
  embed: embed,
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
### You can make menuPages for slash commands

#### Note. You really need experience in making slash commands.
```js
// interactionCreate event
// any command

let embed = // embed
let emb2 = // embed

simplydjs.menuPages(message, {
  slash: true,
  // remaining options
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

## Options for menuPages/dropdownPages function

import Link from '@docusaurus/Link';

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `embed` | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link> | ✓ | *none* | Homepage |
| `data` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link> | ✓ | *none* | Data to make it pages |
| `slash`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *false* | Slash Support for the menuPages (need to be in a slash command) |

### Options for data in menuPages

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✓ | *none* | Label for the option to send embed |
| `desc` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✓ | *none* | Description for the option to send embed |
| `emoji`| <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Emoji ID</Link> | ✘ | *none* | Emoji for the option to send embed |
| `embed` | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link> | ✓ | *none* | Embed sent when the option is selected |