---
title: embedCreator
sidebar_position: 5
tags:
  - General
  - Renamed
---

# embedCreator

Lets you create embeds with **an interactive builder**


## Implementation

```js
simplydjs.embedCreator(interaction, { 
  // options (optional)
})
```


## Output

![embedCreator](https://i.postimg.cc/HWbXgwZV/image.png)

## Types
```ts
simplydjs.embedCreator(
	msgOrInt: ExtendedMessage | ExtendedInteraction,
	options: embedCreatorOptions
): Promise<APIEmbed>
```

- msgOrInt: [`ExtendedMessage`](../typedef/extendedmessage.md) | [`ExtendedInteraction`](../typedef/extendedinteraction.md)
- options: [`embedCreatorOptions`](#embedcreatoroptions)

- Resolves: [`APIEmbed`](https://discord-api-types.dev/api/discord-api-types-v10/interface/APIEmbed) (the embed that the user just built)

## Options

### `embedCreatorOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in embedCreator |
| `embed` | <Link to="../typedef/customizableembed.md">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the builder embed  |

```ts
export type embedCreatorOptions = {
	strict?: boolean;
	embed?: CustomizableEmbed;
};
```

-----------------

## Example

- ### Default settings

```js title="embedCreator.js"
const simplydjs = require('simply-djs')

simplydjs.embedCreator(interaction)
```

- ### Customized with options

```js title="embedCreator.js"
const simplydjs = require('simply-djs')

simplydjs.embedCreator(interaction, { 
  strict: true,
  embed: {
	title: "Embed generator",
	description: "Select any option from the Menu to create a custom embed.",
	color: simplydjs.toRgb("#406dbc")
  }
})
```
