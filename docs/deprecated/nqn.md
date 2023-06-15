---
title: nqn
sidebar_position: 2
tags:
  - Deprecated
---

# nqn

NQN bot feature. But you have the power to do it.


:::danger DEPRECATED

## This function is deprecated !

`nqn()` function is deprecated and removed forever ! Please use other package or use our source code from github.

:::

## Implementation

```js
simplydjs.nqn(message, {
  // options (optional)
})
```

## Output

![nqn](https://i.postimg.cc/CLcCK9Xz/image.png)

## Types
```ts
simplydjs.nqn(
  message: Message,
  options: nqnOptions
): Promise<void>
```

- message: [`Message`](https://old.discordjs.dev/#/docs/discord.js/main/class/Message)
- options: [`nqnOptions`](#nqnoptions)

## Options

### `nqnOptions`


import Link from '@docusaurus/Link';


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in nqn |
