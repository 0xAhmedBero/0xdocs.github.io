---
sidebar_position: 6
---

### Export Function
```lua
exports["ab_Hud"]:SendAdvancedNotification(title, subTitle, pngHash, message, isImportant)
```
#### Parameters:
- **title**: The title of the notification. This should be a string representing the main heading of the notification.
- **subTitle**: The subtitle of the notification. This should be a string providing additional context or information.
- **pngHash**: The hash of the PNG image to be displayed alongside the notification. This should be a string representing the image's hash.
- **message**: The main content of the notification. This should be a string detailing the information or alert.
- **isImportant**: A boolean value indicating whether the notification is important. If `true`, it may trigger a different visual style or behavior for the notification.

### Server-Side Event
To send an advanced notification from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:SendAdvancedNotification", source, title, subTitle, pngHash, message, isImportant)
```
#### Parameters:
- **source**: The player ID to whom the notification is being sent.
- **title**: The title of the notification.
- **subTitle**: The subtitle of the notification.
- **pngHash**: The hash of the PNG image for the notification.
- **message**: The main content of the notification.
- **isImportant**: A boolean value indicating the importance of the notification.
