---
sidebar_position: 9
tags:
  - General
---

# stealEmoji

How cool is **stealing an emoji** from another server ? Feel the power with this function


## Implementation

```js
simplydjs.stealEmoji(interaction, {
    // options (Optional)
})
```

## Output

![image](https://user-images.githubusercontent.com/71836991/173194858-eb5ddc17-4301-42b5-b6f7-4a1f3b8c3b80.png)

## Types

```ts
simplydjs.stealEmoji(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: stealOptions
)
```

- interaction: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`stealOptions`](#options-stealoptions)

## Options `stealOptions`


import Link from '@docusaurus/Link';


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌       | _none_     | The emoji that is getting stealed |
| `name` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌       | _none_     | The name of the new emoji that is being created from old one |