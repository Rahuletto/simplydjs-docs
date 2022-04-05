---
sidebar_position: 6
---

# automeme

Auto meme sender so others would laugh at jokes without someone's effort !


```js
simplydjs.automeme(client, { 
  channelId: '01234567890123' // channelId (required)

  // options (optional)
})
```


Arguements format:
```ts
simplydjs.automeme(client: Client, options: memeOptions)
```

:::info INFO
This should be implemented in `ready` event !

```js
client.on('ready' => {
  simplydjs.automeme() // automeme function
})
:::

## Output

![image](https://user-images.githubusercontent.com/71836991/137742616-05fc1330-aeef-4f40-9031-1d81e93ff705.png)

## Options `memeOptions`

import Link from '@docusaurus/Link';

| Parameter      | Type                                                                                                                       | Required | Default    | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- | --------------------------------------------- | --- |
| `channelId`       | <Link to="https://discord.js.org/#/docs/discord.js/stable/class/Channel?scrollTo=id">Channel ID</Link>       | ✓        | _none_     | Channel ID of an Discord `TextChannel`    |
| `sub` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</Link> | ✘        | _default array_  | An array of custom subreddits you needed                             |
| `interval`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">milliseconds</Link>     | ✘        | _120000ms_ | Interval between memes sent by the bot. |
| `embed` | <Link to="https://simplyd.js.org/docs/types/CustomizableEmbed">CustomizableEmbed</Link>         | ✘        | _none_  | Pass an CustomizableEmbed Object to customize the embed                |
