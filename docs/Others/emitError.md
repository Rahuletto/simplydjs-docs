---
sidebar_position: 1
tags:
  - Others
  - New
---

# emitError

Produce error messages just like Simply DJS

## Program

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="js"
  values= {[
    { label: 'Javascript', value: 'js', },
    { label: 'Typescript', value: 'ts', },
  ]
}>
<TabItem value="js">

```js
const simplydjs = require("simply-djs");
```

</TabItem>

<TabItem value="ts">

```ts
import simplydjs from "simply-djs";
```

</TabItem>

</Tabs>

```js
simplydjs.emitError({ name: "Test", tip: "This is just to test" })
```


:::danger WARNING
This may cause your entire project to stop as it emits an error not logging in the console.
:::

## Arguments:
```ts
simplydjs.emitError(
  {
    name: string,
    tip: string
  }
)
```

## Prevent Project Stop (Just Throw Error):
Javascript:
```js
const colors = require("colors")
process.on('unhandledRejection', (reason, p) => {
  console.log(' [antiCrash] :: Unhandled Rejection/Catch'.red);
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(' [antiCrash] :: Uncaught Exception/Catch'.red);
  console.log(err.message !== null ? err.message : err, origin);
}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)'.red);
  console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log(' [antiCrash] :: Multiple Resolves'.red);
  console.log(type, promise, reason);
});
```

- name: `string`
- tip: `string`
