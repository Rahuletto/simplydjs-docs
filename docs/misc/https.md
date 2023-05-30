---
sidebar_position: 3
tags:
  - Misc
  - New
---

# https

Inbuilt https function to replace your good ol' node-fetch and axios.

## Implementation
```js
simplydjs.https('host', 'path', {
    method: "GET", // required
    // options (optional)
})
```

> This returns a Promise so you should await it and should be located inside an `async` function. Or your project should be configured to [`top-level await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await)

## Types
```ts
simplydjs.https(
	host: string,
	endpoint: string,
	options: httpsOptions = { // default arguments
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	}
): Promise<any>
```

- host: [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- endpoint: [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- options: [`httpsOptions`](#httpsoptions)


- Resolves: [`any`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)


## Options

### `httpsOptions`


import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `method`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">`'GET'`/`'POST'`/`'PUT'`/`'PATCH'`/`'DELETE'`/`'HEAD'`/`'CONNECT'`/`'OPTIONS'`/`'TRACE'`</Link> | ❌  | "GET" | Provide a method to access the api |
| `headers`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers">OutgoingHttpHeaders</Link> | ❌  | { 'Content-Type': 'application/json' } | The header of the request |
| `body`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</Link> | ❌  | _none_ | The body to send the request (cannot be used in 'GET' request) |

```ts
export type httpsOptions = {
	method:
		| 'GET'
		| 'POST'
		| 'PUT'
		| 'PATCH'
		| 'DELETE'
		| 'HEAD'
		| 'CONNECT'
		| 'OPTIONS'
		| 'TRACE';
	headers: OutgoingHttpHeaders;
	body?: Object;
};
```

-----------------------

## Example

- ### Default settings


```js title="https.js"
const simplydjs = require('simply-djs')

// should be inside a async function or have top-level await
await simplydjs.https('postman-echo.com', '/get')
```

- ### With options

```js title="https.js"
const simplydjs = require('simply-djs')

simplydjs.https('postman-echo.com', '/get', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
})
```