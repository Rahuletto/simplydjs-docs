---
sidebar_position: 6
---

# btnrole

This is an example of btnrole

:::tip TIP

It is now possible to make btnrole slash based too.

The package supports `Auto Slash Recognition !` So no more slash options.

:::

### Required

```js
const simplydjs = require("simply-djs");
```

_`interactionCreate` Event_

```js
// interactionCreate Event
simplydjs.clickBtn(interaction);
```

_`messageCreate` Event_ (btnrole command)

```js
// messageCreate Event

simplydjs.btnrole(client, message, {
  embed: embed,
  data: [
    {
      role: "role-id",
      label: "name", // default: *role name*
      color: "color", // default: SECONDARY
      emoji: "emoji id"
    } // etc..
  ]
});
```

:::info INFO

### Customization++

- You can create your own button with its CustomId in this format `role-` and role id after it.. the button role will work with that too...

```js
// messageCreate event
const btn = new MessageButton()
  .setLabel("btnrole")
  .setStyle("DANGER")
  .setCustomId("role-123456789012345678"); // role-(role id)
// send it

// in interactionCreate
simplydjs.clickBtn(interaction);
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/129353127-6a0c2704-cfcd-48e1-8d1e-5aeede745a9a.png)

## Options for btnrole function

import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options | Type                                                                                                           | Required | Default | Description                                       |
| ------- | -------------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------- |
| `embed` | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                           | ✓        | _none_  | Embed sent with buttons                           |
| `data`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link> | ✓        | _none_  | Data to make buttons and send it. So it will work |

</div>

### Options for data

<div style={{textAlign: 'center'}}>

| Options | Type                                                                                                | Required | Default     | Description                            |
| ------- | --------------------------------------------------------------------------------------------------- | -------- | ----------- | -------------------------------------- |
| `role`  | <Link to="https://discord.js.org/#/docs/main/stable/class/MessageEmbed">Embed</Link>                | ✓        | _none_      | Role ID for the button                 |
| `color` | <Link to="https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle">Button Style</Link> | ✘        | _SECONDARY_ | Color for the button which gives roles |
| `emoji` | <Link to="https://discord.js.org/#/docs/main/stable/class/Emoji">Emoji ID</Link>                    | ✘        | _none_      | Emoji of the button which gives roles  |

</div>
