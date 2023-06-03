---
sidebar_position: 6
tags:
  - Systems
  - Suggest system
---

# suggest

An **Beautiful** suggestion system with buttons ;D | Requires: [`manageSuggest()`](/docs/handler/manageSuggest)

> This function requires [`connect()`](/docs/general/connect) which connects to the mongo database !


## Implementation

```js
simplydjs.suggest(interaction, { 
  channelId: '01234567890123' // channelId (required)

  // options (optional)
})
```

## Output

![suggestion](https://i.postimg.cc/wvqs60sK/image.png)


## Types
```ts
simplydjs.suggestSystem(
  msgOrint: ExtendedMessage | ExtendedCommandInteraction,
  options: suggestOption
): Promise<SuggestResolve>
```

- msgOrInt: [`ExtendedMessage`](/docs/typedef/ExtendedMessage) | [`ExtendedInteraction`](/docs/typedef/ExtendedInteraction)
- options: [`suggestOption`](#suggestoption)


- Resolves: [`SuggestResolve`](#suggestresolve)

## Options

### `suggestOption`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in suggest |
| `channelId`       | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/TextChannel?scrollTo=id">string</Link>  | ✅  | - | Channel Id to send the suggestion in your server    |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌  | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |
| `buttons` | <Link to="#suggestbuttons">SuggestButtons</Link> | ❌ | _default buttons_  | Pass a suggestButtons Object to customize the button  |
| `suggestion`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>     | ❌        | _none_ | The suggestion to post in the server |
| `progress` | <Link to="#progress">Progress</Link> | ❌ | _default_  | Pass a Progress Object to customize the suggestion vote percentage bar  |

```ts
export type suggestOption = {
	embed?: CustomizableEmbed;
	channelId?: string | TextChannel;
	suggestion?: string;
	buttons?: SuggestButtons;
	progress?: Progress;
	strict: boolean;
};
```

----------------

### `SuggestButtons`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `votedInfo`        | <Link to="/docs/typedef/CustomizableButton">CustomizableButton</Link> |  A CustomizableButton Object to customize the who voted button   |
|  `upvote`       | <Link to="/docs/typedef/CustomizableButton">CustomizableButton</Link> |  A CustomizableButton Object to customize the upvote button   |
|  `downvote`       | <Link to="/docs/typedef/CustomizableButton">CustomizableButton</Link> |  A CustomizableButton Object to customize the downvote button   |

```ts
export interface SuggestButtons {
	votedInfo?: CustomizableButton;
	upvote?: CustomizableButton;
	downvote?: CustomizableButton;
}
```

----------------

### `Progress`

| Parameter    | Type   | Default | Description  |
| ------------ | ------ | ------- | --------- |
| `up`        | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | '🟩' | The emoji to show instead of green box at progress   |
|  `down`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | '🟥' | The emoji to show instead of red box at progress  |
|  `blank`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | '⬛' | The emoji to show instead of black box at progress  |

```ts
export interface Progress {
	up: string;
	down: string;
	blank: string;
}
```

----------------

## Resolve

### `SuggestResolve`

```ts
{
  suggestion: string; // the suggestion provided
  channel: TextChannel; // the channel to send the suggestion
  user: GuildMember; // the user who suggested
}
```


--------------

## Example

- ### Default settings

```js title="suggest.js"
const simplydjs = require('simply-djs')

simplydjs.suggest(interaction, {
  channelId: "01234567890123", 
})
```

- ### Customized with options


```js title="suggest.js"
const { ButtonStyle } = require('discord.js')
const simplydjs = require('simply-djs')

simplydjs.suggest(interaction, {
  channelId: "01234567890123", // required
  strict: true,
  embed: {
    title: "A new suggestion",
    color: simplydjs.toRgb("#406dbc")
  },
  buttons: {
    upvote: { style: ButtonStyle.Primary },
    downvote: { style: ButtonStyle.Danger },
    whoVoted: { style: ButtonStyle.Success }
  },
  progress: {
    up: '🟩',
    down: '🟥',
    blank: '⬛'
  }
})
```