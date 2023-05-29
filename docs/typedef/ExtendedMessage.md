---
title: ExtendedMessage
position: 5
tags:
  - typedef
  - Extended
---

# ExtendedMessage
extends [`Message`](https://old.discordjs.dev/#/docs/discord.js/main/class/Message)

A class extension of the Message object of the discord.js framework which aims to reduce errors and apply the best developer practices.

### Extended Properties

import Link from '@docusaurus/Link';

| Parameter | Type |
| --------- | ---- |
| `commandId`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> |
| `user`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/GuildMember">GuildMember</Link> |
| `customId`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> |

```ts
export interface ExtendedMessage extends Message {
	commandId: string;
	user: GuildMember;
	customId: string;
}
```