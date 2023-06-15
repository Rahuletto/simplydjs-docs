---
title: ExtendedMessage
position: 5
tags:
  - typedef
  - Extended
  - Backend
---

# ExtendedMessage
extends [`Message`](https://old.discordjs.dev/#/docs/discord.js/main/class/Message)

This class extends the `Message` object from the Discord.js framework.
These properties are used to reduce errors and apply best practices when working with Discord.js

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