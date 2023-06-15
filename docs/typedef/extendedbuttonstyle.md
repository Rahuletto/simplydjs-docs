---
title: ExtendedButtonStyle
position: 3
tags:
  - typedef
  - Customization
  - Extended
  - New
---

# ExtendedButtonStyle


### Types
* `PRIMARY` | `SECONDARY` | `SUCCESS` | `DANGER` | `LINK` | [`ButtonStyle`](https://discord-api-types.dev/api/discord-api-types-v10/enum/ButtonStyle)

```ts
import { ButtonStyle } from 'discord.js';

export type ExtendedButtonStyle =
	| ButtonStyle
	| 'PRIMARY'
	| 'SECONDARY'
	| 'SUCCESS'
	| 'DANGER'
	| 'LINK';
```