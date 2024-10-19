---
sidebar_position: 1
---

### Export Function
```lua
exports["ab_Hud"]:SetCash(BALANCE)
```
#### Parameters:
- BALANCE: The total cash balance to set for the player. This should be a numerical value representing the player's current cash balance. This function directly sets the cash balance, so if the current balance is `1000` and you want to set it to `1500`, simply provide `1500` as the `BALANCE`.

### Server-Side Event
To update the cash balance from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SetCash", source, BALANCE)
```
#### Parameters:
- source: The player ID to whom the cash balance is being set.
- BALANCE: The new cash balance to be updated for the specified player.