---
sidebar_position: 6
---

# ytNotify
This is an example of ytNotify <br></br><br></br>
*You will expect a delay between video posted and Discord message sent. (2-15 minutes)*

## Setup
#### You really need quick.db to check if the video is already posted.
```
npm install quick.db
```
#### Didn't work ? Giving errors when downloading quick.db ? Try this !
```
npm install python
```
#### Then try to install quick.db


### With Customization
```js
const simplydjs = require('simply-djs')
 
const db = require('quick-db') // REQUIRED
const startAt = Date.now() // REQUIRED

// ready event
simplydjs.ytNotify(client, db, {
 ytID: 'yt channel id', // channel id from URL (String or Array)
 // Use ytID or ytURL. Dont use both.
 ytURL: 'yt channel URL', // channel URL (String or Array)
 
 chid: 'discord channel id', // Discord channel id to post the message
 startAt: startAt, // REQUIRED

msg: 'Hello someone posted',
  // NOTE: You should use {author}, {title}, {url} to build the message
})
```

:::tip TIP
### You can make it without Customization

```js
const simplydjs = require('simply-djs')
 
const db = require('quick-db') // REQUIRED
const startAt = Date.now() // REQUIRED

// ready event
simplydjs.ytNotify(client, db, {
 ytID: 'yt channel id', // channel id from URL (String or Array)
 // Use ytID or ytURL. Dont use both.
 ytURL: 'yt channel URL', // channel URL (String or Array)
 chid: 'discord channel id', // Discord channel id to post the message
 startAt: startAt, // REQUIRED
})
```

:::

## Output
![image](https://user-images.githubusercontent.com/71836991/127870384-ff35f631-0440-40a4-a654-f1fe3e794c86.png)

## Options for ytNotify function

import Link from '@docusaurus/Link';

| Options     | Type    | Required | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `ytID` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">YT Channel ID (String/Array)</Link> | ✓ | *none* | Youtube channel to post whenever the user posts |
| `ytURL` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">YT Channel URL (String/Array)</Link> | ✓ | *none* | Youtube channel to post whenever the user posts |
| `chid` | <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">Channel ID</Link> | ✓ | *none* | Channel to send YT Posts |
| `startAt`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now">Date.now()</Link>| ✓ | *none* | To check if the video is posted after bot startup |
| `msg`|<Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</Link>| ✘ | *Hello ! {author} just uploaded a new video {title} {url}* | Message sent when the youtuber posts |
