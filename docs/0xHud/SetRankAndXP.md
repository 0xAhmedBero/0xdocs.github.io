---
sidebar_position: 12
---

### Export Function
```lua
exports["ab_Hud"]:SetRankAndXP(currentXPLimit, nextXPLimit, NewXP, rank, onScreenDuration, customColor)
```
#### Parameters:
- **currentXPLimit**: A numerical value representing the XP limit for the current rank.
- **nextXPLimit**: A numerical value indicating the XP required to reach the next rank.
- **NewXP**: A numerical value representing the player's current XP.
- **rank**: A numerical value representing the player's current rank.
- **onScreenDuration**: A numerical value for how long the rank update notification should be displayed on screen (in milliseconds).
- **customColor**: A numerical value for the color of the rank notification.

### Server-Side Event
To set the rank and XP from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SetRankAndXP", source, currentXPLimit, nextXPLimit, NewXP, rank, onScreenDuration, customColor)
```
#### Parameters:
- **source**: The player ID to whom the rank and XP notification is being sent.
- **currentXPLimit**: The current XP limit for the rank.
- **nextXPLimit**: The XP needed to reach the next rank.
- **NewXP**: The current XP of the player.
- **rank**: The current rank of the player.
- **onScreenDuration**: How long to display the notification.
- **customColor**: The color to use for the notification.
