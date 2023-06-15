---
title: CustomizableEmbed
position: 2
tags:
  - typedef
  - Customization
---

# CustomizableEmbed

Override default embeds with your own **customized** embed

### Types
* `Object`

:::tip

## Converting [EmbedBuilder](https://old.discordjs.dev/#/docs/discord.js/main/class/EmbedBuilder) to `CustomizableEmbed`

This option seems weird and un-intuitive ? Don't worry !
You can change your existing EmbedBuilder to CustomizableEmbed in one line !

```js
const simplydjs = require('simply-djs')

const embed = new EmbedBuilder()
.setTitle("Converting to CustomizableEmbed")
.setColor(simplydjs.toRgb('#406DBC'))

simplydjs.someFunction(interaction, {
	embed: embed.toJSON()
})
```

The [`.toJSON()`](https://discord.js.org/docs/packages/builders/1.6.3/EmbedBuilder:Class#toJSON) method changes your [EmbedBuilder](https://old.discordjs.dev/#/docs/discord.js/main/class/EmbedBuilder) to [`APIEmbed`](https://discord-api-types.dev/api/discord-api-types-v10/interface/APIEmbed) which is identical to [`CustomizableEmbed`](#properties)

:::


### Properties

import Link from '@docusaurus/Link';

| Parameter | Type | Description  |
| --------- | ---- | ------------ |
| `author`  | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/../typedef/EmbedAuthorData">EmbedAuthorData</Link> | Sets the author of the embed. |
| `title`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | Sets the title of the embed. |
| `url`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | Sets the url of the embed. |
| `thumbnail`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | Sets the thumbnail of the embed. |
| `color`  | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/../typedef/ColorResolvable">ColorResolvable</Link> | Sets the color of the embed. |
| `description`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | Sets the description of the embed. |
| `fields`  | <Link to="https://discord-api-types.dev/api/discord-api-types-v10/interface/APIEmbedField">APIEmbedField[]</Link> | Sets the field of the embed. |
| `image`  | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | Sets the image of the embed. |
| `footer`  | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/../typedef/EmbedFooterData">EmbedFooterData</Link> | Sets the footer of the embed. |

```ts
export interface CustomizableEmbed {
	author?: EmbedAuthorData;
	title?: string;
	url?: string;

	thumbnail?: string;

	color?: ColorResolvable;
	description?: string;
	fields?: APIEmbedField[];

	image?: string;

	footer?: EmbedFooterData;
	timestamp?: Date | number | null;
	// Removed the credit option

	/** credit?: boolean; */
}
```