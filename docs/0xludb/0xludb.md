# 0xludb-FiveM Database


## Overview
0xludb is a simple and efficient database system for FiveM. It provides easy-to-use functions for storing, retrieving, and managing data within your server environment.

## Key Information
- Database for FiveM: Designed specifically for FiveM, offering seamless integration.
- User-Friendly: Easy to implement and use in your FiveM scripts, requiring minimal setup.



## Important Note
:::warning[Where 0xluadb saving data]
    In your server files
  - cache
  - db **The main database file. Do not delete this file as it contains all your saved data.**
  - resource
  - server.cfg
:::

## Installation Guide
1. Download and Install Files
    - Download the required files from the official [GitHub repository](https://github.com/0xwal/0xludb-fivem).
    - Drag and drop the downloaded files into your FiveM resources folder.

2. Start the Script
    - To start using 0xludb, add the following line to your `server.cfg` file:

    ```cfg title="cfg"
        start 0xludb-fivem
    ```

Once installed and started, the module will automatically handle your database interactions within the server.