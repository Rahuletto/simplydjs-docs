---
sidebar_position: 2
tags:
  - Handler
---

# manageSug

A **Suggestion** handler which handles all sugestions from the package

:::danger WARNING
  `suggestBtn()` is deprecated !

  Use `manageSug()` instead of `suggestBtn()`
:::

:::note
This function requires you to [connect()](/docs/General/connect) to the mongo database !
:::

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
simplydjs.manageSug(interaction, { 
  // options (optional)
})
```

:::note
This function requires you to [connect()](/docs/General/connect) to the mongo database !
:::

## Arguments:
```ts
simplydjs.manageSug(
  interaction: Discord.ButtonInteraction,
  options: manageSugOptions
);
```

- interaction: [`Discord.ButtonInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/ButtonInteraction)
- options: [`manageSugOptions`](#options-managesugoptions)

## Options `manageSugOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `deny` | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/ColorResolvable">ColorResolvable</Link> | ❌   | _RED_     | An ColorResolvable or Hex code of the embed when the suggestion is denied  |
| `accept` | <Link to="https://discord.js.org/#/docs/discord.js/stable/typedef/ColorResolvable">ColorResolvable</Link> | ❌   | _GREEN_     | An ColorResolvable or Hex code of the embed when the suggestion is accepted |
