---
sidebar_position: 2
---

### Export Function
```lua
exports["ab_Hud"]:SetBank(BALANCE)
```
#### Parameters:
- **BALANCE**: The total bank balance to set for the player. This should be a numerical value representing the player's current bank balance. This function directly sets the bank balance.

### Server-Side Event
To update the bank balance from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SetBank", source, BALANCE)
```
#### Parameters:
- **source**: The player ID to whom the bank balance is being set.
- **BALANCE**: The new total bank balance to be set for the specified player.
