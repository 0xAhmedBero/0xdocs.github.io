---
sidebar_position: 1
---
# global save 

## Info 
- Global Saving is accessible to all scripts, allowing them to retrieve data.

## Module
- Import the 0xludb-fivem module!!

```lua
local ludb = exports['0xludb-fivem']
```

## Exports
```lua
-- Save global player tokens
ludb:saveGlobal("players/license:123/tokens", 1000)

-- Save global player coordinates
ludb:saveGlobal("players/license:123/coords", { x = 50, y = -30, z = 10 })

-- Confirmation message
print("Global Player tokens and coordinates saved.")

-- In another resource (assuming you have access to ludb)

-- Retrieve global player tokens
local globalTokens = ludb:retrieveGlobal("players/license:123/tokens")

-- Display retrieved global tokens
print("Global Player Tokens:", globalTokens)

-- Retrieve all global player information using wildcard (*)
local globalPlayer = ludb:retrieveGlobal("players/license:123/*")

print(json.encode(globalPlayer.tokens.value))
print(json.encode(globalPlayer.coords.value))

-- Delete global tokens
ludb:deleteGlobal("players/license:123/tokens")

local globalTokens = ludb:retrieveGlobal("players/license:123/tokens")
print(globalTokens) -- nil

```
