---
sidebar_position: 13
---

### Export Function
```lua
exports["ab_Hud"]:ShowWinMessage(Title, Subtitle, TitleColor, backgroundColor, Duration)
```
#### Parameters:
- **Title**: A string representing the title of the win message.
- **Subtitle**: A string representing the subtitle of the win message.
- **TitleColor**: A numerical value representing the color of the title.
- **backgroundColor**: A numerical value representing the color of the message background.
- **Duration**: A numerical value indicating how long the message should be displayed (in seconds).

### Server-Side Event
To show the win message from the server-side, use the following code:
```lua
TriggerClientEvent("0xHud:ShowWinMessage", source, Title, Subtitle, TitleColor, backgroundColor, Duration)
```
#### Parameters:
- **source**: The player ID to whom the win message is being sent.
- **Title**: The title of the win message.
- **Subtitle**: The subtitle of the win message.
- **TitleColor**: The color of the title.
- **backgroundColor**: The color of the message background.
- **Duration**: The duration for which the message should be displayed.
