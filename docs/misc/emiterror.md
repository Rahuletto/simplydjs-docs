---
title: emitError
description: Produce error messages just like Simply DJS does !
sidebar_position: 2
tags:
  - Misc
---

# emitError

Produce error messages just like Simply DJS does !

extends [`Error`](https://nodejs.org/api/errors.html#class-error)

:::danger WARNING
This may cause your entire project to stop as it emits an error and not logging in the console.
:::


## Implementation
```js
simplydjs.emitError({
  title: "Test", // required
  // options (optional)
})
```

## Types
```ts
simplydjs.emitError(options: errOptions)
```
- options: [`errOptions`](#erroptions)


## Options 

### `errOptions`


import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `function`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_ | Provide which function emits this error (this is to make debugging easier) |
| `title`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ✅  | _none_ | Title of the error |
| `tip`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | 'Get ya help here -> [https://discord.gg/3JzDV9T5Fn]' | Provide a tip. So you can have clear view of why the error occurs |

```ts
export type errOptions = {
	function?: string;
	title?: string;
	tip?: string;
};
```

-----------------------

## Example

```js title="error.js"
const simplydjs = require('simply-djs')

simplydjs.emitError({
  function: "test.js",
  title: "Testing error",
  tip: "Make errors with simply-djs"
})
```
