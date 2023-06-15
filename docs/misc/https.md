---
title: https
description: Inbuilt https function to replace your good ol' node-fetch and axios.
sidebar_position: 3
tags:
  - Misc
  - New
---

# https

Inbuilt https function to replace your good ol' node-fetch and axios.

## Implementation
```js
simplydjs.https('url', {
    method: "GET", // required
    // options (optional)
})
```

> This returns a Promise so you should await it and should be located inside an `async` function. Or your project should be configured to [`top-level await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await)

## Types
```ts
simplydjs.https(
	url: string | httpsOptions,
	options: httpsOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	}
): Promise<any>
```

- url: [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [`httpsOptions`](#httpsoptions)
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
| `url`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_ | The url to do https request |
| `host`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_ | The host url of the website to do https request (do not use if you are using `url` option) |
| `endpoint`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌  | _none_ | The endpoints of the website to do https request (do not use if you are using `url` option) |
| `debug` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link>       | ❌ | false  | console logs every data retreived. Easier to debug if any errors |

```ts
export type httpsOptions = {
  method:
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "HEAD"
    | "CONNECT"
    | "OPTIONS"
    | "TRACE";
  headers: OutgoingHttpHeaders;
  body?: Object;

  url?: string;
  host?: string;
  endpoint?: string;

  debug?: boolean;
};
```

-----------------------

## Example

- ### Default settings


```js title="https.js"
const simplydjs = require('simply-djs')

// should be inside a async function or have top-level await
await simplydjs.https('postman-echo.com/get')
```

- ### With options

```js title="https.js"
const simplydjs = require('simply-djs')

simplydjs.https('postman-echo.com/get', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
})
```