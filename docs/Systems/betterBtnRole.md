---
sidebar_position: 8
---

# betterBtnRole

This is an example of betterBtnRole

:::info
This is a slash only function | You can't use this function with normal message
:::

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`interactionCreate` Event_ (btn-add command)

```js
// interactionCreate event

simplydjs.betterBtnRole(client, interaction, {
  type: "add",

  // Slash Option Customization
  chSlash: 'channel', // Custom Channel Option
  idSlash: 'message ID', // Custom ID Option
  roleSlash: 'role', // Custom Role Option
  labelSlash: 'name', // Custom Label Option
  styleSlash: 'color', // Custom Style Option
  emojiSlash: 'emoji' // Custom Emoji Option
});
```

_`interactionCreate` Event_ (btn-remove command)
```js
simplydjs.betterBtnRole(client, interaction, {
  type: "remove",

    // Slash Option Customization
  chSlash: 'channel', // Custom Channel Option
  idSlash: 'message ID', // Custom ID Option
  roleSlash: 'role', // Custom Role Option
});
```

### Slash Command Type

```js
// btnrole-add
    {
      name: 'btnrole-add',
      description: 'Button roles is slash ?!',
      options: [
         {
        name: 'channel',
        type: 'CHANNEL',
        description: 'channel of that message',
        required: true,
      },
        {
        name: 'message',
        type: 'STRING',
        description: 'the message',
        required: true,
      },
      {
        name: 'role',
        type: 'ROLE',
        description: 'what role',
        required: true,
      },
      {
        name: 'label',
        type: 'STRING',
        description: 'name of the button ?',
        required: false,
      },
      {
        name: 'style',
        type: 'STRING',
        description: 'color of the button',
        required: false,
        choices: [
          {
            name: 'PRIMARY',
            value: 'PRIMARY'
          },
          {
            name: 'SECONDARY',
            value: 'SECONDARY'
          },
          {
            name: 'SUCCESS',
            value: 'SUCCESS'
          },
          {
            name: 'DANGER',
            value: 'DANGER'
          },
        ]
      },
      {
        name: 'emoji',
        type: 'STRING',
        description: 'emoji maybe ?',
        required: false,
      },
      ],

    }
```

```js
// btnrole-remove
{
      name: 'btnrole-remove',
      description: 'Button roles removal is slash ?!',
      options: [
         {
        name: 'channel',
        type: 'CHANNEL',
        description: 'channel of that message',
        required: true,
      },
        {
        name: 'message',
        type: 'STRING',
        description: 'the message',
        required: true,
      },
      {
        name: 'role',
        type: 'ROLE',
        description: 'what role',
        required: true,
      },

      ],

    }
```

## Output

![image](https://media.discordapp.net/attachments/877596016138936430/890999104044404776/8wFg3SdnkDaQAAAABJRU5ErkJggg.png)

![image](https://media.discordapp.net/attachments/877596016138936430/890999286509232208/AYPhA9qN4HCXAAAAAElFTkSuQmCC.png)

## Options for betterBtnRole function

import Link from '@docusaurus/Link';

<div style={{textAlign: 'center'}}>

| Options | Type                                                                                                                          | Required | Default | Description                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | -------------------------------- |
| `type`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String (add/remove)</Link> | ✓        | _none_  | Type of the betterBtnRole to use |

</div>

### Slash Customization.

<div style={{textAlign: 'center'}}>

| Options | Type                                                                                                                          | Required | Default | Description                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | -------------------------------- |
| `chSlash`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘        | _channel_  | Custom Channel Option name (Customizability++)|
| `idSlash`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘        | _message_  | Custom Message ID Option name |
| `roleSlash`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘        | _role_  | Custom Role Option name |
| `labelSlash`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘        | _label_  | Custom Label Option name |
| `roleSlash`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘        | _style_  | Custom Style Option name |
| `emojiSlash`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link> | ✘        | _emoji_  | Custom Emoji Option name |

</div>