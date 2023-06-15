---
title: disableButtons
description: Disable all buttons in a message
sidebar_position: 1
tags:
  - Misc
  - New
---

# disableButtons

Disable all buttons in a message

## Implementation
```js
simplydjs.disableButtons(components)
```

## Types
```ts
simplydjs.disableButtons(components: ActionRowBuilder<ButtonBuilder>[])
```
- components: [`ActionRowBuilder<ButtonBuilder>[]`](https://old.discordjs.dev/#/docs/discord.js/main/class/ActionRowBuilder)

-----------------------

## Example

```js title="disable.js"
const simplydjs = require('simply-djs')

simplydjs.disableButtons(message.components)
```
