---
sidebar_position: 9
---

### Export Function
```lua
exports["ab_Hud"]:Spinner(action, text, type)
```
#### Parameters:
- **action**: A boolean value indicating whether to start or stop the spinner. Use `true` to start the spinner and `false` to stop it.
- **text**: A string message to be displayed alongside the spinner. This provides context for the action being performed.
- **type**: A numerical value representing the spinner type. Possible values range from `1` to `5`, each corresponding to a different visual style of the spinner.

### Server-Side Event
To control the spinner from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:Spinner", source, action, text, type)
```
#### Parameters:
- **source**: The player ID to whom the spinner action is being sent.
- **action**: A boolean value to start (`true`) or stop (`false`) the spinner.
- **text**: The text message to be displayed alongside the spinner.
- **type**: A numerical value for the spinner type (1-5).
