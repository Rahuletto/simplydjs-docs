---
title: connect
description: Connect to a mongo database to access some of the simply-djs functions !
sidebar_position: 4
tags:
  - General
---

# connect

Connect to a mongo database to access some of the simply-djs functions ! *Requires* [`MongoDB`](https://mongodb.com.md)

## Implementation

```js
simplydjs.connect('mongodb uri')
```

:::info INFO
This should be implemented in the **main/index** file and next to the declaration of the package !

```js title=index.js
const simplydjs = require("simply-djs");

simplydjs.connect() // connect function at the next line
```

:::


## Types

```ts
simplydjs.connect(
	db: string,
	options: connectOptions
): Promise<boolean>
```

- db: [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- options: [`connectOptions`](#connectoptions)

- Resolves: [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (whether connected or not)

## Options

### `connectOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `strict` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false | Enables strict mode in connect |
| `notify` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>         | ❌        | true  | Notifies when the mongodb is connected |

```js
export type connectOptions = {
	strict?: boolean;
	notify?: boolean;
};
```


-----------------

## Example

- ### Default settings

```js title="connect.js"
const simplydjs = require('simply-djs')

simplydjs.connect("mongo uri")
```

- ### Customized with options

```js title="connect.js"
const simplydjs = require('simply-djs')

simplydjs.connect("mongo uri", {
  strict: true,
  notify: true
})
```
