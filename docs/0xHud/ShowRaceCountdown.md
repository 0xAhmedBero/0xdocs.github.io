---
sidebar_position: 14
---

### Export Function
```lua
exports["ab_Hud"]:ShowRaceCountdown(r, g, b)
```
#### Parameters:
- **r**: An integer representing the red color component (0-255).
- **g**: An integer representing the green color component (0-255).
- **b**: An integer representing the blue color component (0-255).

If no color values are provided, default colors (240, 200, 80) will be used.

### Server-Side Event
To show the race countdown from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:ShowRaceCountdown", source, r, g, b)
```
#### Parameters:
- **source**: The player ID to whom the race countdown is being sent.
- **r**: The red color component (0-255).
- **g**: The green color component (0-255).
- **b**: The blue color component (0-255).
