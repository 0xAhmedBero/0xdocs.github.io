---
sidebar_position: 15
---

### Export Function
```lua
exports["ab_Hud"]:ShowUnlockMessage(Title, Desc, Desc2, displayTime)
```
#### Parameters:
- **Title**: A string representing the title of the unlock message.
- **Desc**: A string representing the description of the unlock message.
- **Desc2**: A string representing an additional description or message.
- **displayTime**: A number representing the duration (in seconds) to display the unlock message.

### Server-Side Event
To show the unlock message from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:ShowUnlockMessage", source, Title, Desc, Desc2, displayTime)
```
#### Parameters:
- **source**: The player ID to whom the unlock message is being sent.
- **Title**: The title of the unlock message.
- **Desc**: The description of the unlock message.
- **Desc2**: An additional description or message.
- **displayTime**: The duration to display the unlock message.
