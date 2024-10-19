---
sidebar_position: 11
---

### Export Function
```lua
exports["ab_Hud"]:SendXpNotify(title, subTitle, XP)
```
#### Parameters:
- **title**: A string representing the main title of the XP notification. This is displayed prominently to inform the player.
- **subTitle**: A string providing additional context or details about the XP earned. This is shown beneath the main title.
- **XP**: A numerical value indicating the amount of experience points (XP) earned by the player.

### Server-Side Event
To send an XP notification from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SendXpNotify", source, title, subTitle, XP)
```
#### Parameters:
- **source**: The player ID to whom the XP notification is being sent.
- **title**: The title of the notification.
- **subTitle**: The subtitle providing context about the XP earned.
- **XP**: The amount of XP being notified to the player.
