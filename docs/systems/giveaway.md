---
title: giveaway
sidebar_position: 4
tags:
  - Systems
  - Giveaway
  - Renamed
---

# giveaway

A **Powerful** yet simple giveaway system | Requires: [`manageGiveaway()`](../handler/managegiveaway.md)

> This function requires [`connect()`](../general/connect.md) which connects to the mongo database !

## Implementation

```js
simplydjs.giveaway(interaction, { 
  // options (optional)
})
```

## Output

![giveaway panel](https://i.postimg.cc/hvzb2fmg/image.png)


## Types
```ts
simplydjs.giveaway(
	msgOrInt: ExtendedMessage | ExtendedInteraction,
	options: giveawayOptions = {}
): Promise<GiveawayResolve | EndResolve>
```

- msgOrInt: [`ExtendedMessage`](../typedef/extendedmessage.md) | [`ExtendedInteraction`](../typedef/extendedinteraction.md)
- options: [`giveawayOptions`](#giveawayoptions)



- Resolves: [`GiveawayResolve`](#giveawayresolve) | [`EndResolve`](#endresolve)

## Options 

### `giveawayOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in giveaway |
| `prize`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_ | The prize that is rewarded in the giveaway |
| `winners`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</Link>     | ❌        | 1 | The number of winners who will win in the giveaway |
| `channel`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel">TextChannel</Link>       | ❌        | _none_     | The channel to send the giveaway message  |
| `time`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _1h_ | The time to end the giveaway |
| `buttons` | <Link to="#giveawaybuttons">GiveawayButtons</Link> | ❌        | _default buttons_  | Objects of buttons that can be customized  |
| `manager`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/Role">Role</Link>     | ❌  | _none_ | The role of the giveaway manager who can manage |
| `requirements`   | <Link to="#Requirement">Requirement</Link> | ❌  | _none_ | The requirements required to enter the giveaway |
| `pingRole`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/Role">Role</Link> | ❌  | _none_ | Ping role to let others know there is a giveaway |
| `embed` | <Link to="#giveawayembeds">GiveawayEmbeds</Link>         | ❌        | _default embed_  | Objects of embeds that can be customized  |
| `type`   | `'Label'`/`'Emoji'`/`'Both'` | ❌  | _label_ | Show the button with an emoji or a label or with both. |

```ts
export type giveawayOptions = {
	prize?: string;
	winners?: number;
	channel?: GuildTextBasedChannel | TextChannel;
	time?: string;

	buttons?: GiveawayButtons;

	manager?: Role | string;

	requirements?: Requirement;
	pingRole?: Role | string;

	embed?: GiveawayEmbeds;

	type?: 'Label' | 'Emoji' | 'Both';
	strict?: boolean;
};
```

-----------

### `GiveawayButtons`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `enter`        | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  A CustomizableButton Object to customize the button   |
|  `end`       | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  A CustomizableButton Object to customize the button   |
|  `reroll`       | <Link to="../typedef/customizablebutton">CustomizableButton</Link> |  A CustomizableButton Object to customize the button   |

```ts
export interface GiveawayButtons {
	enter?: CustomizableButton;
	end?: CustomizableButton;
	reroll?: CustomizableButton;
}
```

-------------

### `Requirements`

| Parameter      | Type  | Description  |
| -------------- | ----- | ------------ |
| `type`        | `'Role'`/`'Guild'`/`'None'` |  The type of the requirements whether its role required or guild joined.   |
| `id`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | The Role ID (if type: 'Role') or Guild ID (if type: 'Guild')  |

```ts
export interface Requirements {
	type: 'Role' | 'Guild' | 'None';
	id: string;
}
```

---------------

### `GiveawayEmbeds`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `giveaway`        | <Link to="../typedef/customizableembed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the embed   |
|  `load`       | <Link to="../typedef/customizableembed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the embed   |
|  `result`       | <Link to="../typedef/customizableembed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the embed   |

```ts
export interface GiveawayEmbeds {
	giveaway?: CustomizableEmbed;
	load?: CustomizableEmbed;
	result?: CustomizableEmbed;
}
```

--------------------

## Resolve

### `GiveawayResolve`

```ts
{
  message: Message; // message of the giveaway
  winners: number; // number of winners
  prize: string; // prize of the giveaway
  endsAt: number; // end time
  requirements: { 
      type: 'None' | 'Role' | 'Guild';
      value: Guild | Role
  };  // Requirements
}
```

### `EndResolve`

```ts
{
	type: 'End'; // To let you know its ending
	user: GuildMember[]; // The winners
	url: string; // The message url where the giveaway held
}
```

---------------------

## Example

> To make this system work, you should also implement [`manageGiveaway()`](../handler/managegiveaway.md) manageGiveaway function handles all the buttons for giveaway.


- ### Default settings

```js title="giveaway.js"
const simplydjs = require('simply-djs')

simplydjs.giveaway(interaction)
```

- ### Customized with options

```js title="giveaway.js"
const { ButtonStyle } = require('discord.js')
const simplydjs = require('simply-djs')

simplydjs.giveaway(interaction, {
  strict: true,
  prize: "fake nitro",
  winners: 1,
  channel: interaction.channel,
  embed: {
    giveaway: {
      title: "Giveaway time",
      color: simplydjs.toRgb("#406dbc")
    },
    load: {
      title: "Finding winner",
      color: "Red"
    },
    result: {
      title: "Winner !",
      color: "DarkGreen"
    }
  },
  buttons: {
    enter: { style: ButtonStyle.Success },
    reroll: { style: ButtonStyle.Primary },
    end: { style: ButtonStyle.Danger }
  },
  
  time: "5m",
  type: "Both"
})
```


