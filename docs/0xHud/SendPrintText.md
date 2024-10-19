---
sidebar_position: 8
---

### Export Function
```lua
exports["ab_Hud"]:SendPrintText(text, duration, drawImmediately)
```
#### Parameters:
- **text**: The text message to be printed on the screen. This should be a string representing the content of the message.
- **duration**: The duration for which the text will be displayed, in milliseconds. This should be a numerical value specifying how long the text remains visible.
- **drawImmediately**: A boolean value indicating whether to draw the text immediately. If `true`, the text will appear instantly; if `false`, it may wait for a specific condition before being displayed.

### Server-Side Event
To send print text from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SendPrintText", source, text, duration, drawImmediately)
```
#### Parameters:
- **source**: The player ID to whom the print text is being sent.
- **text**: The text message to be printed on the screen.
- **duration**: The duration for which the text will be displayed, in milliseconds.
- **drawImmediately**: A boolean value indicating whether to draw the text immediately.

