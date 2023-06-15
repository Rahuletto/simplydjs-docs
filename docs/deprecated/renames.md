---
title: Renamed functions
description: We deprecated few functions to make their names meaningfull. This is the list of what  functions are deprecated
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

- [`automeme()`](https://v3--simplyd.netlify.app/docs/Systems/automeme) is now [`meme()`](../systems/meme.md)

- [`bumpSystem()`](https://v3--simplyd.netlify.app/docs/Systems/bumpSystem) is now [`bumpReminder()`](../systems/bumpreminder.md)

- [`embedCreate()`](https://v3--simplyd.netlify.app/docs/General/embedCreate) is now [`embedCreator()`](../general/embedcreator.md)

- [`embedPages()`](https://v3--simplyd.netlify.app/docs/General/embedPages) is now [`buttonPages()`](../general/buttonpages.md)

- [`giveawaySystem()`](https://v3--simplyd.netlify.app/docs/Systems/giveawaySystem) is now [`giveaway()`](../systems/giveaway.md)

- [`suggestSystem()`](https://v3--simplyd.netlify.app/docs/Systems/suggestSystem) is now [`suggest()`](../systems/suggest.md)

- [`ticketSystem()`](https://v3--simplyd.netlify.app/docs/Systems/ticketSystem) is now [`ticketSetup()`](../systems/ticketsetup.md)

- [`manageBtn()`](https://v3--simplyd.netlify.app/docs/Handler/manageBtn) is now separated to three functions:

  * [`manageBtnRole()`](../handler/managebtnrole.md)
  * [`manageTicket()`](../handler/manageticket.md)
  * [`manageGiveaway()`](../handler/managegiveaway.md)

- [`manageSug()`](https://v3--simplyd.netlify.app/docs/Handler/manageSug) is now [`manageSuggest()`](../handler/managesuggest.md)