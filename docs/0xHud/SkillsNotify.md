---
sidebar_position: 10
---

### Export Function
```lua
exports["ab_Hud"]:SkillsNotify(title, lastProgress, newProgress, isImportant)
```
#### Parameters:
- **title**: A string representing the title of the notification. This is displayed prominently to inform the player.
- **lastProgress**: A numerical value indicating the player's previous progress in the skill. This is used to show the change in skill level.
- **newProgress**: A numerical value indicating the player's current progress in the skill. This is the updated value that the player is achieving.
- **isImportant**: A boolean value that determines whether the notification is marked as important. If `true`, it signifies a significant update.

### Server-Side Event
To send a skill notification from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SkillsNotify", source, title, lastProgress, newProgress, isImportant)
```
#### Parameters:
- **source**: The player ID to whom the notification is being sent.
- **title**: The title of the notification.
- **lastProgress**: The previous progress value.
- **newProgress**: The updated progress value.
- **isImportant**: A boolean value indicating the importance of the notification.
