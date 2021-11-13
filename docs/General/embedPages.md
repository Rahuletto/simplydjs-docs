---
sidebar_position: 2
---

# embedPages

This is an example of embedPages

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`messageCreate` Event (Any Command)_

```js
// messageCreate Event

let embed1 = new Discord.MessageEmbed().setTitle("Page 1");

let embed2 = new Discord.MessageEmbed().setTitle("Page 2");

let pages = [embed1, embed2]; // REQUIRED

// its still possible without embed
// let pages = ['page1', 'page2', 'page3']

simplydjs.embedPages(client, message, pages, {
  firstEmoji: "emoji id",
  backEmoji: "emoji id",
  delEmoji: "emoji id",
  forwardEmoji: "emoji id",
  lastEmoji: "emoji id",

  btncolor: "colors",
  delcolor: "colors",
  skipcolor: "colors",

  skipBtn: true,
  delBtn: true
});
```

:::info INFO

### Without Customization

_`messageCreate` Event (any command)_

```js
// messageCreate Event

let embed1 = // embed

let embed2 = // embed

let pages = [embed1, embed2] // REQUIRED

// its still possible without embed
// let pages = ['page1', 'page2', 'page3']

simplydjs.embedPages(client, message, pages)
```

:::

:::tip TIP

### Slash Support.

You can make embedPages for slash commands

_`interactionCreate` Event (any command)_

```js
// interactionCreate Event

await interaction.deferUpdate();
simplydjs.embedPages(client, interaction, pages, {
  slash: true
  // Other Options
});
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

| Options   | Type                                                                                                                     | Required | Default | Description                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | -------- | ------- | ---------------------------------------------------------------- |
| `pages`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array of Embeds</Link> | ✓        | _none_  | Array of Embeds to make it as Pages                              |
| `slash`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>       | ✘        | _false_ | Slash Support for the embedPages (need to be in a slash command) |
| `pgCount` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>       | ✘        | _false_ | Shows Page Count                                                 |
| `timeout` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Number</Link>       | ✘        | _120000 (2 min)_ | Disables the button after certain time (in milliseconds)                                                 |

</div>

### Button Emojis

<div style={{textAlign: 'center'}}>

| Options        | Type                                                                             | Required | Default | Description                                                     |
| -------------- | -------------------------------------------------------------------------------- | -------- | ------- | --------------------------------------------------------------- |
| `firstEmoji`   | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘        | _⏪_    | Emoji of First Page Button                                      |
| `backEmoji`    | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘        | _◀️_    | Emoji of Previous Page Button                                   |
| `delEmoji`     | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘        | _🗑️_    | Emoji of Delete Message Button                                  |
| `forwardEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘        | _▶️_    | Emoji for Next Page Button                                      |
| `lastEmoji`    | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link> | ✘        | _⏩_    | Emoji for Last Page Button (Not Required when skipBtn is false) |

</div>

### Button colors

| Options     | Type                                                                                                | Required | Default   | Description                             |
| ----------- | --------------------------------------------------------------------------------------------------- | -------- | --------- | --------------------------------------- |
| `btncolor`  | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _SUCCESS_ | Color of the Next/Previous Page Buttons |
| `delcolor`  | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _DANGER_  | Color of Delete Page Button             |
| `skipcolor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _PRIMARY_ | Color of First/Last Page Buttons        |

### Button Options

| Options   | Type                                                                                                               | Required | Default | Description                              |
| --------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- | ---------------------------------------- |
| `skipBtn` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_  | Enables/Disables First/Last Page Buttons |
| `delBtn`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_  | Enables/Disables Delete Button           |