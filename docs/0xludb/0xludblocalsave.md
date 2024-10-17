---
sidebar_position: 1
---
# Local Save

## Overview 
 - Local saving in FiveM is restricted to the script that created it, meaning that the saved data cannot be accessed by other scripts. This ensures that data remains isolated within the context of the original script.
  
## Module Import

- To utilize local saving, you need to import the `0xludb-fivem` module. This module provides functions for saving, retrieving, and deleting data.

### Importing the Module
```lua title="lua"
local ludb = exports['0xludb-fivem']
```

## Usage Examples


#### Saving Data

You can use the `ludb:save` function to store player-specific data, such as tokens and coordinates, by referencing their unique license.

```lua title="lua"
-- Save player tokens
ludb:save("players/license:123/tokens", 1000)

-- Save player coordinates
ludb:save("players/license:123/coords", { x = 50, y = -30, z = 10 })
```
- Tokens: Saves the number of tokens for the player (`1000`).
- Coordinates: Stores the player's current location as an object with x, y, and z coordinates.

#### Retrieving Data

To access saved data, use the `ludb:retrieve` function. You can retrieve individual data items, such as tokens, or all associated data using a wildcard.

```lua title="lua"
-- Retrieve player tokens
local tokens = ludb:retrieve("players/license:123/tokens")

-- Print retrieved tokens
print("Player Tokens:", tokens)
```
- Retrieve All Data: The wildcard `*` allows you to retrieve all saved information (tokens, coordinates, etc.) for the player.

```lua title="lua"
-- Retrieve all player information using wildcard (*)
local player = ludb:retrieve("players/license:123/*")

-- Prints all retrieved data
print(json.encode(player.tokens.value))  -- Prints tokens
print(json.encode(player.coords.value))  -- Prints coordinates
```

#### Deleting Data
To remove specific player data, such as tokens, use the `ludb:delete` function. After deletion, retrieving that data will return `nil`.

```lua title="lua"
-- Delete player tokens
ludb:delete("players/license:123/tokens")

-- Attempt to retrieve deleted tokens
local tokens = ludb:retrieve("players/license:123/tokens")
print(tokens) -- Expected output: nil
```
## Conclusion

By using the `0xludb-fivem` module, you can effectively manage local player data within your FiveM scripts. These operations provide flexibility for storing, retrieving, and deleting player-specific data, ensuring that the information remains confined to its original script.