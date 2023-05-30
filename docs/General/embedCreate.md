---
sidebar_position: 4
tags:
  - General
---

# embedCreate

Lets you create embeds with **an interactive builder**


## Implementation

```js
simplydjs.embedCreate(interaction, { 
  // options (optional)
})
```


## Output

![image](https://user-images.githubusercontent.com/71836991/173194554-6e1429b6-b92c-4afe-9d25-0f54a23169d8.png)

## Types
```ts
simplydjs.embedCreate(
  interaction: Discord.Message | Discord.CommandInteraction,
  options: embOptions
)
```

- interaction: [`Discord.Message`](https://discord.js.org/#/docs/discord.js/stable/class/Message) | [`Discord.CommandInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)
- options: [`embOptions`](#options-embOptions)

## Options `embOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the builder embed  |
