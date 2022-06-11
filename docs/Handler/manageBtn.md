---
sidebar_position: 1
tags:
  - Handler
---

# manageBtn

A Button Handler for **simplydjs package functions.**

:::danger WARNING
  `clickBtn()` is deprecated !

  Use `manageBtn()` instead of `clickBtn()`
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
simplydjs.manageBtn(interaction, { 
  // options (optional)
})
```

:::note
This function requires you to [connect()](/docs/General/connect) to the mongo database !
:::

## Arguments:
```ts
simplydjs.manageBtn(
  interaction: Discord.ButtonInteraction,
  options: manageBtnOptions
);
```

- interaction: [`Discord.ButtonInteraction`](https://discord.js.org/#/docs/discord.js/stable/class/ButtonInteraction)
- options: [`manageBtnOptions`](#options-managebtnoptions)

## Options `manageBtnOptions`

import Link from '@docusaurus/Link';

| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `ticketSys` | <Link to="#ticketsys">ticketSys</Link> | ❌   | _none_     | Pass a ticketSys Object to customize things  |
| `btnRole` | <Link to="#btnrole">btnRole</Link> | ❌   | _none_     | Pass a btnRole Object to customize things |

-------------------


<details style={{border: '0px solid'}}>
  <summary>ticketSys options</summary>
  

## `ticketSys`


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `ticketname` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌   | _ticket-{userid}_     | The name of the ticket when opened.  |
| `buttons` | <Link to="#ticketbtn">ticketBtn</Link> | ❌   | _Default_     | Pass a ticketBtn Object to customize the buttons  |
| `pingRole` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string/string[]</Link> | ❌   | _none_     | The Array (or) String of Role(s) to ping when someone opens a ticket  |
| `category` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌   | _none_     | The parent category id of the category you want the tickets to be created  |
| `timed` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</Link> | ❌   | _none_     | An Boolean option to delete tickets when the time is up.  |
| `embed` | <Link to="/docs/types/CustomizableEmbed">CustomizableEmbed</Link> | ❌   | _Default Embed_     | Pass a CustomizableEmbed Object to customize the embed  |

-------------

### `ticketBtn`

| Parameter      | Type                                                                                                                       | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `close`        | <Link to="/docs/types/btnTemplate">btnTemplate</Link> | Pass an btnTemplate Object to customize the close button  |
| `reopen`       | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the reopen button  |
| `delete`    | <Link to="/docs/types/btnTemplate">btnTemplate</Link> | Pass an btnTemplate Object to customize the delete button  |
| `transcript`    | <Link to="/docs/types/btnTemplate">btnTemplate</Link> |  Pass an btnTemplate Object to customize the  transcript button   |

</details>


<details style={{border: '0px solid'}}>
  <summary>btnRole options</summary>
  
  

## `btnRole`


| Parameter | Type | Required | Default    | Description |
| --------- | ----- | -------- | -------- | ---------- |
| `addedMsg` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌   | _✅ Added the {role} role to you._     | The message sent when the role is added.  |
| `removedMsg` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> | ❌   | _❌ Removed the {role} role from you._     | The message sent when the role is removed.  |

</details>
