---
sidebar_position: 1
---

# ticketSystem

This is an example of ticketSystem

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`interactionCreate` Event_

```js
// interactionCreate Event
simplydjs.clickBtn(interaction, {
  embedDesc: "embed description",
  embedColor: "hex code", // default: #075FFF
  closeColor: "color from buttons",
  closeEmoji: "emoji id",
  delColor: "color from buttons",
  delEmoji: "emoji id", // default: ❌
  openColor: "color from buttons",
  openEmoji: "emoji id",
  timeout: true,
  cooldownMsg: "message",
  categoryID: "category id",
  role: "role id",
  ticketname: "ticket-{tag}" // Custom Ticket name. {tag} | {id} | {username}
});
```

_`messageCreate` Event_ (setup-ticket command)

```js
// messageCreate event

simplydjs.ticketSystem(message, message.channel, {
  embedDesc: "embed description",
  embedColor: "hex code", // default: #075FFFF
  embedFoot: "footer text",
  emoji: "emoji id", // default:, 🎫
  color: "color from buttons"
});
```

:::info INFO

### Without Customization

_`interactionCreate` Event_

```js
// interactionCreate event
simplydjs.clickBtn(button);
```

_`messageCreate` Event_ (setup-ticket command)

```js
// messageCreate event

simplydjs.ticketSystem(message, message.channel);
```

:::

:::tip TIP

### Slash Support.

You can make ticketSystem for slash commands

_`interactionCreate` Event_

```js
//interactionCreate event
simplydjs.clickBtn(button);
```

_`interactionCreate` Event_ (setup-ticket command)

```js
// interactionCreate event

simplydjs.ticketSystem(interaction, interaction.channel, {
  slash: true
  // Other Options
});
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/127871121-30c49c7f-7b18-48df-bb93-969213817e19.png)

![image](https://user-images.githubusercontent.com/71836991/127871158-f13ee7a9-8cbe-415c-8e54-49c197accb32.png)

## Options for clickBtn function

import Link from '@docusaurus/Link';

| Options       | Type                                                                                                               | Required | Default                            | Description                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| `timeout`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_                             | Timeout which deletes the ticket after 10 minutes to reduce clutter |
| `cooldownMsg` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _You have already opened a ticket_ | Message sent when a ticket is already opened by the user            |
| `role`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _none_           | Support Role ID. Users with the role have access to see the ticket |
| `pingRole`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _none_           | Its role. But it pings ;) |

### New Options
| Options       | Type                                                                                                               | Required | Default                            | Description                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| `ticketname`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _Ticket opened by {tag}_           | Custom Ticket name, Use {tag} {username} {id} for user tag/username/id |
| `logChannel`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link>   | ✘        | _none_           | Logs When Ticket is deleted (with transcript) |


### Embed

<div style={{textAlign: 'center'}}>

| Options      | Type                                                                                                               | Required | Default              | Description                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------- | -------------------- | ---------------------------------------------------------------------------- |

| `embedDesc`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _a long description_ | Embed Description of the embed which is sent when the ticket has been opened |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _#075FFF_            | Embed Color of the embed which is sent when the ticket has been opened       |
| `credit`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_               | Credit the package                                                           |

</div>

### New Options

| Options      | Type                                                                                                               | Required | Default              | Description                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------- | -------------------- | ---------------------------------------------------------------------------- |
| `embed`  | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>   | ✘        | _embed_ | Custom Embed when ticket opened and use {tag} {username} {id} for user tag/username/id in description |
| `logembed`  | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>   | ✘        | _embed_ | Custom Embed for logs and use {tag} {username} {id} for user tag/username/id in description |
| `confirmEmb  | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>   | ✘        | _embed_ | Custom Embed for confirmation at ticket deletion |

</div>

### Close Ticket Options

<div style={{textAlign: 'center'}}>

| Options      | Type                                                                                                | Required | Default   | Description                          |
| ------------ | --------------------------------------------------------------------------------------------------- | -------- | --------- | ------------------------------------ |
| `closeColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _PRIMARY_ | The color of the Close Ticket Button |
| `closeEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>                    | ✘        | _🔒_      | The emoji of the Close Ticket Button |

</div>

### Delete Ticket Options

<div style={{textAlign: 'center'}}>

| Options    | Type                                                                                                | Required | Default     | Description                           |
| ---------- | --------------------------------------------------------------------------------------------------- | -------- | ----------- | ------------------------------------- |
| `delColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _SECONDARY_ | The color of the Delete Ticket Button |
| `delEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>                    | ✘        | _❌_        | The emoji of the Delete Ticket Button |

</div>

### Reopen Ticket Options

<div style={{textAlign: 'center'}}>

| Options     | Type                                                                                                | Required | Default   | Description                           |
| ----------- | --------------------------------------------------------------------------------------------------- | -------- | --------- | ------------------------------------- |
| `openColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _SUCCESS_ | The color of the Reopen Ticket Button |
| `openEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>                    | ✘        | _🔓_      | The emoji of the Reopen Ticket Button |

</div>

### Transcript Ticket Options

<div style={{textAlign: 'center'}}>

| Options   | Type                                                                                                | Required | Default   | Description                               |
| --------- | --------------------------------------------------------------------------------------------------- | -------- | --------- | ----------------------------------------- |
| `trColor` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _PRIMARY_ | The color of the Transcript Ticket Button |
| `trEmoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>                    | ✘        | _📜_      | The emoji of the Transcript Ticket Button |

</div>

## Options for ticketSystem function

<div style={{textAlign: 'center'}}>

| Options      | Type                                                                                                               | Required | Default                                        | Description                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------- | ----------------------------------------------------------- |
| `slash`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _false_                            | Slash Support for the ticketSystem (need to be in a slash command)  |
| `embed`       | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link> | ✘        | _embed_                            | Custom Embed at Ticket opening panel  |

</div>

### Embed

<div style={{textAlign: 'center'}}>

| Options      | Type                                                                                                               | Required | Default                                        | Description                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------- | ----------------------------------------------------------- |
| `embedDesc`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _🎫 Create a ticket by clicking the button 🎫_ | Embed Description of the open ticket embed                  |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link> | ✘        | _#075FFF_                                      | Embed Color of the open ticket embed                        |
| `embedFoot`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>   | ✘        | _credits_                                      | Embed Footer of the open ticket embed (when credits: false) |
| `credit`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link> | ✘        | _true_                                         | Credit the package                                          |

</div>

### Buttons

<div style={{textAlign: 'center'}}>

| Options | Type                                                                                                | Required | Default     | Description                         |
| ------- | --------------------------------------------------------------------------------------------------- | -------- | ----------- | ----------------------------------- |
| `color` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _SECONDARY_ | The color of the Open Ticket Button |
| `emoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>                    | ✘        | _🎫_        | The emoji of the Open Ticket Button |

</div>
