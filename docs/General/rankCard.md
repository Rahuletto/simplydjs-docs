---
sidebar_position: 7
---

# rankCard

This is an example of rankCard (not rank system) | Thanks TheJoaqun#7239 for the help with canvas

### Required

```js
const simplydjs = require("simply-djs");
```

_`messageCreate` Event (rank command)_

```js
// messageCreate event

simplydjs.rankCard(client, message, {
  member: user, // let user = etc.. (Optional)
  level: "level", // get level from levelling system
  currentXP: "current xp", // get XP from levelling system
  neededXP: "required xp", // get required XP from levelling system
  rank: "rank", // get rank (not level) from levelling system
  color: "hex color", // Accent Color
  background: "background url" // optional
});
```

:::tip TIP

### Slash Support.

You can make rankCard for slash commands

_`interactionCreate` Event (rank command)_

```js
// interactionCreate event

let user = interaction.options.getUser("member");
interaction.deferReply();

simplydjs.rankCard(client, interaction, {
  member: user,
  slash: true
  // other options
});
```

#### Slash command format

```js
{
  name: 'rank',
  description: 'rankCard using simply-djs',
  options: [{
    name: 'member',
    type: 'USER',
    description: 'User to check the rank',
    required: true,
  }],

    },
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/130052090-cde97bff-7d6d-4ca0-a4dc-71b97ed052af.png)

## Options for rankCard function

import Link from '@docusaurus/Link';

| Options      | Type                                                                                                                | Required | Default            | Description                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ------------------ | -------------------------------------------------------------- |
| `slash`      | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>  | ✘        | _false_            | Slash Support for the rankCard (need to be in a slash command) |
| `level`      | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>    | ✓        | _none_             | Level of the user                                              |
| `currentXP`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>    | ✓        | _none_             | Current XP of the user                                         |
| `neededXP`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>    | ✓        | _none_             | Required XP for the next level of the user                     |
| `rank`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>    | ✓        | _none_             | Position of the user in level (#1, #2, etc..)                  |
| `background` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Image URL</Link> | ✘        | _a cool image_     | Background Image of the rank card                              |
| `member`     | <Link to="https://discord.js.org/#/docs/main/stable/class/GuildMember">Member</Link>                                | ✘        | _message.mentions_ | The Member                                                     |
| `color`      | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>  | ✘        | _#075FFF_          | Accent Color of the Rank Card                                  |
