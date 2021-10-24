---
sidebar_position: 6
---

# automeme

This is an example of automeme <br></br><br></br>

### With Customization

```js
const simplydjs = require("simply-djs");
```

_`ready` Event_

```js
// ready Event

simplydjs.automeme(client, {
  chid: "channel", // channel ids
  subReddits: ["Custom SubReddits"], // custom subreddits
  interval: 120000, // in milliseconds
  embedColor: "hex code"
});
```

:::info INFO

### Without Customization

_`ready` Event_

```js
// ready Event
simplydjs.automeme(client);
```

:::

## Output

![image](https://user-images.githubusercontent.com/71836991/137742616-05fc1330-aeef-4f40-9031-1d81e93ff705.png)

## Options for automeme function

import Link from '@docusaurus/Link';

| Options      | Type                                                                                                                       | Required | Default    | Description                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- | --------------------------------------------- | --- |
| `chid`       | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link>       | ✓        | _none_     | Discord Channel id (no memes in general)    |
| `subReddits` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Custom SubReddits</Link> | ✘        | _a array_  | Meme SubReddits                               |
| `interval`   | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">milliseconds</Link>     | ✘        | _120000ms_ | Interval Between memes (only in milliseconds) |
| `embedColor` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Hex Code</Link>         | ✘        | _#075FFF_  | Embed Color of the meme embed.                |
