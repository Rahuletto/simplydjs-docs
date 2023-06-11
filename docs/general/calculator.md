---
sidebar_position: 3
tags:
  - General
---

# calculator

An Unique **calculator** which can be *used inside Discord*

## Implementation

```js
simplydjs.calculator(interaction, {
  // options (optional)
})
```

## Output

![calculator](https://i.postimg.cc/J0WFnn4W/image.png)


## Types
```ts
simplydjs.calculator(
	msgOrInt: ExtendedMessage | ExtendedInteraction,
	options: calculatorOptions
): Promise<void>
```

- msgOrInt: [`ExtendedMessage`](/docs/typedef/ExtendedMessage) | [`ExtendedInteraction`](/docs/typedef/ExtendedInteraction)
- options: [`calculatorOptions`](#calculatoroptions)


## Options

### `calculatorOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in calculator |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |
| `buttons` | <Link to="#calculatorbuttons">CalculatorButtons</Link> | ❌        | _default buttons_  | Pass a CalculatorButtons Object to customize the button  |

```ts
export type calculatorOptions = {
	embed?: CustomizableEmbed;
	buttons?: CalculatorButtons;
	strict?: boolean;
};
```

--------------------

### `CalculatorButtons`

| Parameter    | Type   | Description  |
| ------------ | ------ | ------------ |
| `numbers`        | <Link to="/docs/typedef/ExtendedButtonStyle">ExtendedButtonStyle</Link> |  The style of the button which has numbers in it   |
|  `symbols`       | <Link to="/docs/typedef/ExtendedButtonStyle">ExtendedButtonStyle</Link> |  The style of the button which has symbols in it   |
|  `delete`       | <Link to="/docs/typedef/ExtendedButtonStyle">ExtendedButtonStyle</Link> |  The style of the button which deletes the calculator   |

```ts
export interface CalculatorButtons {
	numbers?: ExtendedButtonStyle;
	symbols?: ExtendedButtonStyle;
	delete?: ExtendedButtonStyle;
}
```

-----------------

## Example

- ### Default settings

```js title="calculator.js"
const simplydjs = require('simply-djs')

simplydjs.calculator(interaction)
```

- ### Customized with options

```js title="calculator.js"
const simplydjs = require('simply-djs')

simplydjs.calculator(interaction, {
  strict: true,
  embed: {
    title: "Calculator",
    color: simplydjs.toRgb("#406dbc")
  },
  buttons: {
		numbers: ButtonStyle.Secondary,
		symbols: ButtonStyle.Primary,
		delete: ButtonStyle.Danger
	}
})
```
