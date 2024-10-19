---
sidebar_position: 16
---

## Export

```lua
exports["ab_Hud"]:Transition(teleportPosition, WaitTime)
```
### Parameters
- teleportPosition: The target coordinates for the teleport.
- WaitTime: The duration of the transition. Must be greater than `2000` milliseconds.
### Important:
- If `WaitTime` is set to a value less than `2000`, it will default to `2000` milliseconds to ensure a smooth transition.
