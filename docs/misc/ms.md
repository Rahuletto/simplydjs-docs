---
title: ms
sidebar_position: 4
tags:
  - Misc
  - New
---

# ms

Converts Human readable time to milliseconds

## Implementation

```js
simplydjs.ms('human readable time')
```

## Types
```ts
simplydjs.ms(
  str: string,
)
```

- str: [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Returns
- [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


-----------------------

## Example

- ### Normal

```js title="ms.js"
const simplydjs = require('simply-djs')

simplydjs.ms('20s')
// 20000
```

- ### Can convert mad-like strings 

```js title="ms.js"
const simplydjs = require('simply-djs')

simplydjs.ms('0.5d 2h 3m 5s')
// 50585000
```
