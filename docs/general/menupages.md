---
title: menuPages
description: An Embed paginator using Select Menus
sidebar_position: 7
tags:
  - General
---

# menuPages

An Embed paginator using Select Menus


## Implementation

```js
simplydjs.menuPages(interaction, { 
    data: [
      {...}
    ], // array of data objects (required)
    // options (Optional)
})
```

## Output

![menu pagination](https://i.postimg.cc/gk13zHmK/image.png)

## Types
```ts
simplydjs.menuPages(
	msgOrInt: ExtendedMessage | ExtendedInteraction,
	options: menuPagesOptions = { strict: false }
): Promise<void>
```

- msgOrInt: [`ExtendedMessage`](../typedef/extendedmessage.md) | [`ExtendedInteraction`](../typedef/extendedinteraction.md)
- options: [`menuPagesOptions`](#menupagesoptions)

## Options

### `menuPagesOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in menuPages |
| `type`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">'Send'/'Edit'</Link>   | ❌ | "Send"             | The type of menuPages. ("Send" for ephemeral reply & "Edit" for editing the page panel) |
| `rows` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/ActionRowBuilder">ActionRowBuilder[]</Link>       | ❌  | _none_     | Add custom rows to the message |
| `embed` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/EmbedBuilder">EmbedBuilder</Link>       | ✅        | _none_     | The embed of your message that is sent with the select menu |
| `delete` | <Link to="#deleteoption">DeleteOption</Link>       | ❌         | _default object_     | The DeleteOption object for the custom delete menu option |
| `data` | <Link to="#pagemenus">Pagemenus[]</Link>       | ✅        | _none_     | Array of data necessary to create the pages |
| `placeHolder` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | 'Dropdown pages'  | Placeholder of the select menu |

```ts
export type menuPagesOptions = {
	type?: 'Send' | 'Edit';
	rows?: ActionRowBuilder<StringSelectMenuBuilder>[];
	embed?: EmbedBuilder;

	delete?: DeleteOption;

	data?: Pagemenus[];

	placeHolder?: string;
	strict?: boolean;
};
```

--------------

### `Pagemenus`


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ✅        | _none_  | The label of the option |
| `description` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ✅        | _none_     | The description of the option |
| `embed` | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/EmbedBuilder">EmbedBuilder</Link>      | ✅        | _none_     | The embed of your message when the option is selected |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The emoji of the option |

```ts
export interface Pagemenus {
	label?: string;
	description?: string;
	embed?: EmbedBuilder;
	emoji?: string;
}
```

------------------

### `DeleteOption`


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `enable`     | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>   | ❌        | _true_             | Enable/ Disable the delete option |
| `label` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The label of the delete option |
| `description` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌       | _none_     | The description of the delete option |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌        | _none_  | The emoji of the delete option |

```ts
export interface DeleteOption {
	enable?: boolean;
	label?: string;
	description?: string;
	emoji?: string;
}
```


-----------------

## Example

- ### Default settings

```js title="buttonPages.js"
const { EmbedBuilder } = require("discord.js")
const simplydjs = require('simply-djs')

const pageEmbed = new EmbedBuilder().setTitle('Use menus to move pages')
const firstEmbed = new EmbedBuilder().setTitle('first embed')
const lastEmbed = new EmbedBuilder().setTitle('last embed')

simplydjs.menuPages(interaction, { 
  embed: pageEmbed,
  data: [
    {
      label: "First page",
      description: "This is the first page of the pagination",
      embed: firstEmbed
    },
    {
      label: "Last page",
      description: "This is the last page of the pagination",
      embed: lastEmbed
    }
  ],
})
```

- ### Customized with options

```js title="buttonPages.js"
const { EmbedBuilder } = require("discord.js")
const simplydjs = require('simply-djs')

const pageEmbed = new EmbedBuilder().setTitle('Use menus to move pages')
const firstEmbed = new EmbedBuilder().setTitle('first embed')
const lastEmbed = new EmbedBuilder().setTitle('last embed')

simplydjs.menuPages(interaction, {
  strict: true,
  type: 'Send',
  placeHolder: 'Dropdown Pages',
  embed: pageEmbed,
  data: [
    {
      label: "First page",
      description: "This is the first page of the pagination",
      embed: firstEmbed
    },
    {
      label: "Last page",
      description: "This is the last page of the pagination",
      embed: lastEmbed
    }
  ],

  delete: {
    enable: true,
    label: "Delete message",
    description: "Delete the menu pagination"
  }
})
```