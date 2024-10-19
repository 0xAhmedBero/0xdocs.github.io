---
sidebar_position: 5
---

### Export Function
```lua
exports["ab_Hud"]:SendSimpleNotification(message, isImportant)
```
#### Parameters:
- **message**: The notification message to be displayed. This should be a string representing the content of the notification.
- **isImportant**: A boolean value indicating whether the notification is important. If `true`, it may trigger a different visual style or behavior for the notification.

### Server-Side Event
To send a simple notification from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SendSimpleNotification", source, message, isImportant)
```
#### Parameters:
- **source**: The player ID to whom the notification is being sent.
- **message**: The notification message to be displayed.
- **isImportant**: A boolean value indicating the importance of the notification.
