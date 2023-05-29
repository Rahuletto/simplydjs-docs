---
sidebar_position: 2
tags:
  - Handler
  - Giveaway
---

# manageGiveaway

> Not done

A Giveaway Handler for **simplydjs giveaway system.**

## Implementation

```js
simplydjs.manageGiveaway(interaction, { 
  // options (optional)
})
```

## Output

[![suggestion.png](https://i.postimg.cc/wvqs60sK/image.png)](https://postimg.cc/HJNLz023)


## Types
```ts
manageGiveaway(
	interaction: ButtonInteraction,
	options: manageTicketOptions
): Promise<DeleteResolve>
```

- interaction: [`ButtonInteraction`](https://old.discordjs.dev/#/docs/discord.js/main/class/ButtonInteraction)
- options: [`manageTicketOptions`](#manageticketoptions)



- Resolves: [`DeleteResolve`](#deleteresolve)


## Options 

### `manageTicketOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in manageSuggest |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> | ❌   | _default embed_ | Pass a CustomizableEmbed Object to customize embeds |
| `ticketname` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _{user.tag}_   | The name of the ticket and channel that gets created  |
| `category` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_   | The category to add tickets on. This organises your server |
| `buttons` | <Link to="#ticketbuttons">ticketButtons</Link> | ❌   | _default buttons_ | Pass a ticketButtons Object to customize embeds |

```ts
export type manageTicketOptions = {
	ticketname?: string;
	buttons?: ticketButtons;
	pingRoles?: Role[] | string[];
	category?: string;
	embed?: CustomizableEmbed;

	logChannelId?: string;
	strict?: boolean;
};
```

---------------


## Example

- ### Default settings

```js title="ready.js"
const simplydjs = require('simply-djs')

simplydjs.manageSuggest(interaction)
```

- ### Customized with options

```js title="ready.js"
const simplydjs = require('simply-djs')

simplydjs.manageSuggest(interaction, {
  strict: true,
  embed: {
    accept: { 
      title: "Accepted the suggestion",
      color: "DarkGreen"
    },
    deny: {
      title: "Denied the suggestion",
      color: "Red"
    }
  }
})
```