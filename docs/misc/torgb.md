---
title: toRgb
sidebar_position: 6
tags:
  - Misc
---

# toRgb

Transforms Hex code into RGB Array.

## Implementation

```js
simplydjs.toRgb('hex code')
```

## Types
```ts
simplydjs.toRgb(hex: string): ColorResolvable
```

- hex: [`#string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Returns
- [`ColorResolvable`](https://old.discordjs.dev/#/docs/discord.js/main/../typedef/ColorResolvable)

-----------------------

## Example

```js title="rgb.js"
const simplydjs = require('simply-djs')

simplydjs.toRgb('#406dbc')
// [64, 109, 188]

simplydjs.toRgb('#f0f0f0')
// [240, 240, 240]
```