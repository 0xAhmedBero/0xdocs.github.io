---
sidebar_position: 7
---

### Export Function
```lua
exports["ab_Hud"]:SendHelpText(text, beep)
```
#### Parameters:
- **text**: The help text message to be displayed. This should be a string representing the content of the help message.
- **beep**: A boolean value indicating whether to play a beep sound when the help text is shown. If `true`, a sound will be played; if `false`, no sound will be played.

### Server-Side Event
To send help text from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SendHelpText", source, text, beep)
```
#### Parameters:
- **source**: The player ID to whom the help text is being sent.
- **text**: The help text message to be displayed.
- **beep**: A boolean value indicating whether to play a beep sound with the help text.
