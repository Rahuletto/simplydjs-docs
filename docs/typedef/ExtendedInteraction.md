---
title: ExtendedInteraction
position: 4
tags:
  - typedef
  - Extended
---

# ExtendedInteraction
extends [`CommandInteraction`](https://old.discordjs.dev/#/docs/discord.js/main/class/CommandInteraction)

A class extension of the CommandInteraction object of the discord.js framework which aims to reduce errors and apply the best developer practices.

### Extended Properties

import Link from '@docusaurus/Link';

| Parameter | Type |
| --------- | ---- |
| `mentions`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/MessageMentions">MessageMentions</Link> |
| `member`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/GuildMember">GuildMember</Link> |
| `customId`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> |
| `author`   | <Link to="https://old.discordjs.dev/#/docs/discord.js/main/class/GuildMember">GuildMember</Link> |
| `content`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</Link> |

```ts
export interface ExtendedInteraction extends CommandInteraction {
	mentions: MessageMentions;
	member: GuildMember;
	customId: string;
	author: GuildMember;
	content: string;
}
```