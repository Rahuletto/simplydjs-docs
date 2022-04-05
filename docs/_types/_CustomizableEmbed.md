## CustomizableEmbed

Allows you to customize everything in the embed in most of the functions !

### Types:
- `<Object>`

Option Types:
```ts
embed: {
  author: MessageEmbedAuthor
	title: string
	footer: MessageEmbedFooter
	color: ColorResolvable
	description: string
	credit: boolean
}
```

## Properties

import Link from '@docusaurus/Link';

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------  | --------------------------------------------- |
| `author`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageEmbedAuthor">MessageEmbedAuthor</Link>       | Author of an embed passed as a object    |
| `title`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | Title of the embed in a function    |
| `footer`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/MessageEmbedFooter">MessageEmbedFooter</Link>       | Footer of an embed passed as a object    |
| `color`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/ColorResolvable">ColorResolvable/Hex Code</Link>       | Color of an embed passed as Hex Code (or) RGB Value    |
| `description`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>        | Description of the embed you trying to edit.   |
| `credit`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</Link>        | Credit the package with this option. (Overrides footer option.)   |