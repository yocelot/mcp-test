# MCP Server Example

This is an example MCP (Model Context Protocol) server implemented in Node.js.

## Directory Structure

```
.
├── bin
│   └── cli.js
├── src
│   └── server.js
├── manifest.json
├── package.json
└── README.md
```

## Setup

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Make the CLI executable:**

    On Unix-based systems (Linux, macOS), you need to give the script execution permissions.

    ```bash
    chmod +x bin/cli.js
    ```

## Running the Server

You can run the server directly using Node.js:

```bash
node src/server.js
```

Or, you can run it through the CLI entry point:

```bash
./bin/cli.js
```

## Running with npx

Once you have published this repository to GitHub, you can run it directly using `npx`.

Replace `<user>` and `<repo>` with your GitHub username and repository name.

```bash
npx github:<user>/<repo>
```

## Testing

Here is an example of how a client might interact with the server.

**Server starts and sends handshake:**

```json
{"mcp_version":"0.1","pid":12345,"manifest":{"name":"mcp-server-example","version":"0.1.0","description":"An example MCP server.","tools":[{"name":"example_tool","description":"Converts input text to uppercase.","parameters":{"type":"object","properties":{"query":{"type":"string","description":"The text to convert to uppercase."}},"required":["query"]}},{"name":"system_info","description":"Returns OS and CPU information.","parameters":{"type":"object","properties":{}}}]}}
```

**Client sends a request to `example_tool`:**

```json
{"request_id":"req-1","tool_name":"example_tool","parameters":{"query":"hello world"}}
```

**Server sends a response:**

```json
{"request_id":"req-1","payload":"HELLO WORLD"}
```

**Client sends a request to `system_info`:**

```json
{"request_id":"req-2","tool_name":"system_info","parameters":{}}
```

**Server sends a response:**

```json
{"request_id":"req-2","payload":{"os":"win32","arch":"x64","cpus":8}}
```