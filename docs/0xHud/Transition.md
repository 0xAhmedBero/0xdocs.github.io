---
sidebar_position: 16
---

### Export Function
```lua
exports["ab_Hud"]:Transition(teleportPosition, WaitTime)
```
#### Parameters:
- **teleportPosition**: The target coordinates for the teleport.
- **WaitTime**: The duration of the transition. Must be greater than `2000` milliseconds.

### Important:
- If `WaitTime` is set to a value less than `2000`, it will default to `2000` milliseconds to ensure a smooth transition.

### Server-Side Event
To trigger the transition from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:Transition", source, teleportPosition, WaitTime)
```
#### Parameters:
- **source**: The player ID to whom the transition is being sent.
- **teleportPosition**: The target coordinates for the teleport.
- **WaitTime**: The duration of the transition.
