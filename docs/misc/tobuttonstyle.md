---
title: toButtonStyle
description: Converts your old button style string to ButtonStyle
sidebar_position: 5
tags:
  - Misc
  - New
---

# toButtonStyle

Converts your old button style string to [`ButtonStyle`](https://discord-api-types.dev/api/discord-api-types-v10/enum/ButtonStyle)

> This can be useful if you are converting from DJS v13 to v14


## Implementation
```js
simplydjs.toButtonStyle("OLD_STYLE")
```

## Types
```ts
simplydjs.toButtonStyle(style: string): ButtonStyle
```

- style: [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

-----------------------

## Example


```js title="https.js"
const simplydjs = require('simply-djs')

simplydjs.toButtonStyle("PRIMARY")
// ButtonStyle.Primary
```