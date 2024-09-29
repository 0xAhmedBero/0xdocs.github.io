---
sidebar_position: 1
---
# local save 

## Info 
 - Local Saving is restricted to the script that created it and cannot be accessed by other scripts.
  
## Module

- Import the 0xludb-fivem module!!

```lua
local ludb = exports['0xludb-fivem']
```

## Exports

```lua
-- Save player tokens
ludb:save("players/license:123/tokens", 1000)

-- Save player coordinates
ludb:save("players/license:123/coords", { x = 50, y = -30, z = 10 })

-- Confirmation message
print("Player tokens and coordinates saved.")


-- Retrieve player tokens
local tokens = ludb:retrieve("players/license:123/tokens")

-- Display retrieved tokens
print("Player Tokens:", tokens)


-- Retrieve all player information using wildcard (*)
local player = ludb:retrieve("players/license:123/*")

print(json.encode(player.tokens.value))
print(json.encode(player.coords.value))

-- Delete tokens
ludb:delete("players/license:123/tokens")

local tokens = ludb:retrieve("players/license:123/tokens")
print(tokens) -- nil
```
