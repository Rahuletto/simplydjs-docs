---
sidebar_position: 2
tags:
  - Handler
  - Giveaway
---

# manageGiveaway

A Giveaway Handler for **simplydjs giveaway system.**

## Implementation

```js
simplydjs.manageGiveaway(interaction, { 
  // options (optional)
})
```

## Output

![giveaway panel](https://i.postimg.cc/hvzb2fmg/image.png)

![giveaway winner](https://i.postimg.cc/V63DQqm5/image.png)

## Types
```ts
simplydjs.manageGiveaway(
	button: ButtonInteraction,
	options: manageGiveawayOptions
): Promise<RerollResolve | EndResolve>
```

- button: [`ButtonInteraction`](https://old.discordjs.dev/#/docs/discord.js/main/class/ButtonInteraction)
- options: [`manageGiveawayOptions`](#managegiveawayoptions)



- Resolves: [`RerollResolve`](#rerollresolve) | [`EndResolve`](#endresolve)


## Options 

### `manageGiveawayOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in manageGiveaway |

```ts
export type manageGiveawayOptions = {
	strict?: boolean;
};
```

:::info Info
## Customization for manageGiveaway

You can customize the buttons and embeds by passing the options in [`giveaway`](/docs/systems/giveaway.md) function. We export these options to manageGiveaway to match the embeds the same.
:::

---------------

## Resolve

### `RerollResolve`

```ts
export type RerollResolve = {
	type?: 'Reroll';
	user?: GuildMember[];
	url?: string;
};
```

----------------

### `EndResolve`

```ts
export type EndResolve = {
	type?: 'End';
	user?: GuildMember[];
	url?: string;
};
```


---------------


## Example

- ### Default settings

```js title="interactionCreate.js"
const simplydjs = require('simply-djs')

simplydjs.manageGiveaway(interaction)
```

- ### Customized with options

```js title="interactionCreate.js"
const simplydjs = require('simply-djs')

simplydjs.manageGiveaway(interaction, {
  strict: true
})
```