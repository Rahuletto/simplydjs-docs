---
sidebar_position: 2
---

# embedPages
This is an example of embedPages

### With Customization
```js
const simplydjs = require('simply-djs')

// messageCreate event
// any command
let embed1 = new Discord.MessageEmbed()
.setTitle('Page 1');

let embed2 = new Discord.MessageEmbed()
.setTitle('Page 2');

let pages = [embed1, embed2] // REQUIRED

// its still possible without embed
// let pages = ['page1', 'page2', 'page3']

simplydjs.embedPages(client, message, pages, {
  firstEmoji: 'emoji id',
  backEmoji: 'emoji id', 
  delEmoji: 'emoji id',
  forwardEmoji: 'emoji id',
  lastEmoji: 'emoji id', 
  
  btncolor: 'colors',
  delcolor: 'colors', 
  skipcolor: 'colors',
   
  skipBtn: true,
})
```

:::tip TIP
### You can make it without Customization

```js
const simplydjs = require('simply-djs')

// messageCreate event
// any command
let embed1 = // embed

let embed2 = // embed

let pages = [embed1, embed2] // REQUIRED

// its still possible without embed
// let pages = ['page1', 'page2', 'page3']

simplydjs.embedPages(client, message, pages)
```
:::

:::tip TIP
### You can make embedPages for slash commands

#### Note. You really need experience in making slash commands.
```js
simplydjs.embedPages(client, message, pages, {
  // your options.
  slash: true
})
```

#### Slash command format
```js
{
  name: 'embedpages',
  description: 'Just embedPages.. Using simply-djs'
}
```

:::

## Output
![image](https://user-images.githubusercontent.com/71836991/127869308-72817b88-a41a-4e46-af2b-5e556bafafa3.png)

## Options for embedPages function
import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `pages` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array of Embeds</Link> | ✓ | *none* | Array of Embeds to make it as Pages |
| `slash`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *false* | Slash Support for the embedPages (need to be in a slash command) |

</div>

### Button Emojis

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `firstEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘ | *⏪* | Emoji of First Page Button |
| `backEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *◀️* | Emoji of Previous Page Button |
| `delEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *🗑️* | Emoji of Delete Message Button |
| `forwardEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *▶️* | Emoji for Next Page Button  |
| `lastEmoji`|<Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>| ✘ | *⏩* | Emoji for Last Page Button (Not Required when skipBtn is false) |

</div>

### Button colors

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `btncolor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘ | *SUCCESS* | Color of the Next/Previous Page Buttons |
| `delcolor`|<Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link>| ✘ | *DANGER* | Color of Delete Page Button |
| `skipcolor`|<Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link>| ✘ | *PRIMARY* | Color of First/Last Page Buttons |

### Button Options

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `skipBtn` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘ | *true* | Enables/Disables First/Last Page Buttons |