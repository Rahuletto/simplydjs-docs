---
sidebar_position: 9
---

# giveawaySystem

This is an example of giveawaySystem

### Required
```
quickmongo
```

### With Customization

```js
const simplydjs = require("simply-djs");

let { Database } = require('quickmongo')
let db = new Database('mongo String')

//interactionCreate event
simplydjs.clickBtn(interaction, {
  db: db
})

// messageCreate event
// g-start command
simplydjs.giveawaySystem(client, db, interaction, {
  args: args, // only when using in messageCreate

  time: args[0],
  winners: args[1],
  prize: args[2],
})
```


:::tip TIP
### You can make it without Customization

```js
//interactionCreate event
simplydjs.clickBtn(interaction, {
  db: db
})

// messageCreate event
// g-start command
simplydjs.giveawaySystem(client, db, interaction, {
  args: args // only when using in messageCreate
})
```
:::

:::tip TIP
### You can make giveawaySystem for slash commands

#### Note. You really need experience in making slash commands.
```js
//interactionCreate event
simplydjs.clickBtn(interaction, {
  db: db
})

// interactionCreate event
// g-start command
simplydjs.giveawaySystem(client, db, interaction, {
  slash: true,
  // other options
})
```

#### Slash command format
```js
{
      name: 'giveaway',
      description: 'Create giveaway using simply-djs',
      options: [{
        name: 'time',
        type: 'STRING',
        description: 'Time when to finish the giveaway',
        required: true,
      },
      {
        name: 'winners',
        type: 'INTEGER',
        description: 'Number of Winners for the giveaway',
        required: true,
      },
      {
        name: 'prize',
        type: 'STRING',
        description: 'Prize given to the giveaway winner',
        required: true,
      },
      {
        name: 'channel',
        type: 'CHANNEL',
        description: 'Channel to start the giveaway',
        required: false,
      }
      ],

    }
```

:::

## Output

![image](https://media.discordapp.net/attachments/867344514943156254/891303440913948732/tWAa0gAAAABJRU5ErkJggg.png)

## Options for giveawaySystem function

import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `slash`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>| ✘ | *false* | Slash Support for the giveawaySystem (need to be in a slash command) |

</div>

### Options for Giveaway

<div style={{textAlign: 'center'}}>

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `time`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Time (1m/1h/1d)</Link>| ✘ | *args[0]* | Time to when to finish the giveaway |
| `winner`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Integer</Link>| ✘ | *args[1]* | Number of Winners for the giveaway |
| `prize`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *sus* | Prize given to the giveaway winner |
</div>