---
title: CustomizableButton
position: 1
tags:
  - typedef
  - Customization
---

# CustomizableButton

Just a blueprint of the **button customization** used in all of the functions that has buttons!

### Types
* `Object`


:::tip

## Converting [ButtonBuilder](https://old.discordjs.dev/#/docs/discord.js/main/class/ButtonBuilder) to `CustomizableButton`

This option seems weird and un-intuitive ? Don't worry !
You can change your existing ButtonBuilder to CustomizableButton in one line !

```js
const { ButtonStyle } = require('discord.js')
const simplydjs = require('simply-djs')

const button = new ButtonBuilder()
.setLabel("This is easy")
.setStyle(ButtonStyle.Primary)

simplydjs.someFunction(interaction, {
	button: button.toJSON()
})
```

The [`.toJSON()`](https://discord.js.org/docs/packages/builders/1.6.3/ButtonBuilder:Class#toJSON) method changes your [ButtonBuilder](https://old.discordjs.dev/#/docs/discord.js/main/class/ButtonBuilder) to [`APIButtonComponent`](https://discord-api-types.dev/api/discord-api-types-v10#APIButtonComponent) which is identical to [`CustomizableButton`](#properties)

:::


### Properties

import Link from '@docusaurus/Link';

| Parameter | Type | Description  |
| --------- | ---- | ------------ |
| `style`   | <Link to="../typedef/extendedbuttonstyle">ExtendedButtonStyle</Link> | Set the style of the button  |
| `label`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | The text that is shown in the button  |
| `emoji`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | Custom emoji (or) System emoji that is shown in the button |

```ts
export interface CustomizableButton {
	style?: ExtendedButtonStyle;
	label?: string;
	emoji?: string;
}
```