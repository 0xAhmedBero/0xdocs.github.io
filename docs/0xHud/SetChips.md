---
sidebar_position: 3
---

### Export Function
```lua
exports["ab_Hud"]:SetChips(BALANCE)
```
#### Parameters:
- **BALANCE**: The total chips balance to set for the player. This should be a numerical value representing the player's current chips balance. This function directly sets the chips balance.

### Server-Side Event
To update the chips balance from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SetChips", source, BALANCE)
```
#### Parameters:
- **source**: The player ID to whom the chips balance is being set.
- **BALANCE**: The new total chips balance to be set for the specified player.
