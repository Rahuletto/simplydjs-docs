---
title: Renamed functions
sidebar_position: 1
tags:
  - Deprecated
---

# Renamed functions

We deprecated few functions to make their names meaningfull.

This is the list of what functions are deprecated

## Summary

```diff
- automeme()
+ meme()

- bumpSystem()
+ bumpReminder()

- embedCreate()
+ embedCreator()

- embedPages()
+ buttonPages()

- giveawaySystem()
+ giveaway()

- suggestSystem()
+ suggest()

- ticketSystem()
+ ticketSetup()

- manageBtn() 
+ manageBtnRole()
+ manageTicket()
+ manageGiveaway()

- manageSug()
+ manageSuggest()

- stealEmoji()

- nqn()
```

## Links

- [`automeme()`](https://v3--simplyd.netlify.app/docs/Systems/automeme) is now [`meme()`](/docs/systems/meme.md)

- [`bumpSystem()`](https://v3--simplyd.netlify.app/docs/Systems/bumpSystem) is now [`bumpReminder()`](/docs/systems/bumpReminder.md)

- [`embedCreate()`](https://v3--simplyd.netlify.app/docs/General/embedCreate) is now [`embedCreator()`](/docs/general/embedCreator.md)

- [`embedPages()`](https://v3--simplyd.netlify.app/docs/General/embedPages) is now [`buttonPages()`](/docs/general/buttonPages.md)

- [`giveawaySystem()`](https://v3--simplyd.netlify.app/docs/Systems/giveawaySystem) is now [`giveaway()`](/docs/systems/giveaway.md)

- [`suggestSystem()`](https://v3--simplyd.netlify.app/docs/Systems/suggestSystem) is now [`suggest()`](/docs/systems/suggest.md)

- [`ticketSystem()`](https://v3--simplyd.netlify.app/docs/Systems/ticketSystem) is now [`ticketSetup()`](/docs/systems/ticketSetup.md)

- [`manageBtn()`](https://v3--simplyd.netlify.app/docs/Handler/manageBtn) is now separated to three functions:

  * [`manageBtnRole()`](/docs/handler/manageBtnRole.md)
  * [`manageTicket()`](/docs/handler/manageTicket.md)
  * [`manageGiveaway()`](/docs/handler/manageGiveaway.md)

- [`manageSug()`](https://v3--simplyd.netlify.app/docs/Handler/manageSug) is now [`manageSuggest()`](/docs/handler/manageSuggest.md)