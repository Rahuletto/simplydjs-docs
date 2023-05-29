---
sidebar_position: 3
tags:
  - Handler
  - Suggest system
---

# manageSuggest

A **Suggestion** handler which handles all sugestions from the package

> This function requires [`connect()`](/docs/general/connect) which connects to the mongo database !

## Implementation

```js
simplydjs.manageSuggest(interaction, { 
  // options (optional)
})
```

## Output

[![suggestion.png](https://i.postimg.cc/wvqs60sK/image.png)](https://postimg.cc/HJNLz023)


## Types
```ts
simplydjs.manageSuggest(
	button: ButtonInteraction,
	options: manageSuggestOptions
)
```

- interaction: [`ButtonInteraction`](https://old.discordjs.dev/#/docs/discord.js/main/class/ButtonInteraction)
- options: [`manageSuggestOptions`](#managesuggestoptions)

## Options 

### `manageSuggestOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in manageSuggest |
| `embed` | <Link to="#embeds">Embeds</Link> | ❌   | _default embeds_ | Pass a Embeds Object to customize embeds |

```ts
export type manageSuggestOptions = {
	embed?: Embeds;
	strict?: boolean;
};
```

--------------------

### `Embeds`


| Parameter | Type | Description |
| --------- | ----- | ---------- |
|  `accept`       | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the accepted suggestion embed   |
|  `deny`       | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link> |  A CustomizableEmbed Object to customize the denied suggestion embed   |

```ts
interface Embeds {
	accept?: CustomizableEmbed;
	deny?: CustomizableEmbed;
}
```

---------------


## Example

- ### Default settings

```js title="ready.js"
const simplydjs = require('simply-djs')

simplydjs.manageSuggest(interaction)
```

- ### Customized with options

```js title="ready.js"
const simplydjs = require('simply-djs')

simplydjs.manageSuggest(interaction, {
  strict: true,
  embed: {
    accept: { 
      title: "Accepted the suggestion",
      color: "DarkGreen"
    },
    deny: {
      title: "Denied the suggestion",
      color: "Red"
    }
  }
})
```