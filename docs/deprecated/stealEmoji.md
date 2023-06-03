---
sidebar_position: 3
tags:
  - Deprecated
---

# stealEmoji

How cool is **stealing an emoji** from another server ? Feel the power with this function

:::danger DEPRECATED

## This function is deprecated !

`stealEmoji()` function is deprecated and removed forever ! Please use other package or use our source code from github.

:::


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
	msgOrInt: ExtendedMessage | ExtendedInteraction,
	options: stealOptions
): Promise<void>
```

- msgOrInt: [`ExtendedMessage`](/docs/typedef/ExtendedMessage) | [`ExtendedInteraction`](/docs/typedef/ExtendedInteraction)
- options: [`stealOptions`](#stealoptions)

## Options

### `stealOptions`


import Link from '@docusaurus/Link';


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in stealEmoji |
| `embed` | <Link to="/docs/typedef/CustomizableEmbed">CustomizableEmbed</Link>         | ❌        | _default embed_  | Pass a CustomizableEmbed Object to customize the embed  |
| `emoji` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌       | _none_     | The emoji that is getting stealed |
| `name` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link>       | ❌       | _none_     | The name of the new emoji that is being created from old one |

```ts
export type stealOptions = {
	embed?: CustomizableEmbed;
	emoji?: string;
	name?: string;
	strict?: boolean;
};
```