---
sidebar_position: 4
---

### Export Function
```lua
exports["ab_Hud"]:SetWanted(Stars)
```
#### Parameters:
- **Stars**: The desired wanted level for the player. This should be a numerical value representing the number of wanted stars (typically between `0` and `6`).

### Server-Side Event
To update the wanted level from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SetWanted", source, Stars)
```
#### Parameters:
- **source**: The player ID to whom the wanted level is being set.
- **Stars**: The new wanted level to be set for the specified player.
