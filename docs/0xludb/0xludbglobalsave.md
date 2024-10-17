---
sidebar_position: 2
---
# Global Save

## Overview 
 - Global saving in FiveM allows data to be accessed and retrieved by all scripts across different resources. This makes it ideal for storing shared data that needs to be available server-wide.
  
## Module Import

- To utilize global saving, import the `0xludb-fivem` module. This module provides functions for saving, retrieving, and deleting data globally.



### Importing the Module
```lua title="lua"
local ludb = exports['0xludb-fivem']
```

## Usage Examples


#### Saving Data

You can use the `ludb:saveGlobal` function to store player-specific data, such as tokens and coordinates, in a global context. This data can be accessed by any script.

```lua title="lua"
-- Save global player tokens
ludb:saveGlobal("players/license:123/tokens", 1000)

-- Save global player coordinates
ludb:saveGlobal("players/license:123/coords", { x = 50, y = -30, z = 10 })
```
- Global Tokens: Saves the number of tokens for the player globally (`1000`).
- Global Coordinates: Stores the player's in-game location as an object with x, y, and z coordinates, accessible globally.

#### Retrieving Data

To retrieve saved global data, use the `ludb:retrieveGlobal` function. This allows you to retrieve specific pieces of data, or use a wildcard to retrieve all associated player information.

```lua title="lua"
-- Retrieve global player tokens
local globalTokens = ludb:retrieveGlobal("players/license:123/tokens")

-- Print retrieved global tokens
print("Global Player Tokens:", globalTokens)
```
- Retrieve All Data: Use the wildcard `*` to retrieve all data (tokens, coordinates, etc.) linked to the player, globally accessible.

```lua title="lua"
-- Retrieve all global player information using wildcard (*)
local globalPlayer = ludb:retrieveGlobal("players/license:123/*")

-- Prints all retrieved global data
print(json.encode(globalPlayer.tokens.value))  -- Prints tokens
print(json.encode(globalPlayer.coords.value))  -- Prints coordinates
```

#### Deleting Data
To delete specific global player data, such as tokens, use the `ludb:deleteGlobal` function. Once deleted, attempting to retrieve the data will return `nil`.

```lua title="lua"
-- Delete global player tokens
ludb:deleteGlobal("players/license:123/tokens")

-- Attempt to retrieve deleted global tokens
local globalTokens = ludb:retrieveGlobal("players/license:123/tokens")
print(globalTokens) -- Expected output: nil
```

## Conclusion
By using the `0xludb-fivem` module, you can manage global player data across different scripts and resources in FiveM. This makes it possible to store, retrieve, and delete shared data that is accessible server-wide, providing more flexibility for cross-resource interactions.
