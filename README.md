# Java IDE – Browser‑Based Development Environment

A lightweight web application that lets you write, compile, and run Java programs directly in the browser.  
All compilation happens locally on a Node.js backend, so no code leaves your computer.

[![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)](https://github.com/shubhyagami/java-IDE/actions)
[![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)](https://coveralls.io/github/shubhyagami/java-IDE)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)](https://www.npmjs.com/package/java-ide)

---

## Features

- Rich code editor powered by CodeMirror 6: syntax highlighting, line numbers, code folding, bracket matching, auto‑indent.
- Instant compile & run: `Ctrl + Enter` or the **Run** button streams output to an embedded terminal in real time.
- File management: create, rename, delete, and drag‑and‑drop files. Tabs and layout persist in `localStorage`.
- Responsive UI: works on desktop and mobile; light/dark theme follows the system setting.
- Zero‑install backend: the Node.js server runs locally and invokes the JDK directly; no third‑party APIs are used.

---

## Architecture

```
Browser (client) <—— HTTP/WS ——> Node.js (Express)          <—— JDK
```

* **client/** – Static assets (HTML, CSS, JS) served by Express.
* **server/** – Express app that spawns `javac` and `java`, streaming output to the client via WebSockets.

All compilation is performed on the host machine; the code never leaves your computer.

---

## Quick Start

```bash
# Clone and enter the repository
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# Build and run the backend
cd server
npm ci
npm start   # default port 3000; change with SERVER_PORT

# Open the client
# Option 1: open the static file directly
open client/index.html

# Option 2: serve it with a static server
npx serve client
```

Once the server is running, open the editor, write Java code, press `Ctrl + Enter`, and watch the terminal panel for output.

---

## Prerequisites

- **Node.js** v18 or newer
- **JDK** 17 or newer (available on `PATH` or configured via `JAVA_HOME`)

---

## Installation & Running

### Backend

```bash
cd server
npm ci
npm start   # defaults to port 3000; set SERVER_PORT to change
```

### Frontend

The client can be opened directly:

```bash
open client/index.html
```

or served with any static server (e.g., `npx serve client`).  
The client automatically connects to the backend on the same host and port.

---

## Usage

1. Write or paste Java source code in the editor.
2. Press `Ctrl + Enter` or click the **Run** button.
3. Observe the terminal panel: compilation errors and program output appear as they are produced.
4. All open files and tab layout are saved in `localStorage`, so they survive browser reloads.

---

## Configuration

| Variable          | Default | Description |
|-------------------|---------|-------------|
| `SERVER_PORT`     | `3000`  | Port for the Node.js server. |
| `MAX_OUTPUT_LINES`| `2000`  | Max lines kept in the terminal history. |
| `JAVA_HOME`       | *env*   | If set, overrides the JDK path used for compilation. |

Export variables before starting the server, e.g.:

```bash
export SERVER_PORT=4000
npm start
```

---

## Testing

```bash
cd server
npm test
```

The test suite covers the compilation API, WebSocket handling, and error scenarios.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make your changes and write clear commit messages.
4. Run `npm test` to ensure the suite passes.
5. Push the branch and open a Pull Request.

Keep the code style consistent with the existing project and update the documentation when necessary.

---

## License

MIT – see the [LICENSE](LICENSE) file for details.

---

## Changelog

* **v1.3 – 2026‑08‑28**  
  - Persistent tabs and drag‑and‑drop file import.  
  - Dark‑theme toggle and improved mobile layout.  
  - Fixed a race condition causing occasional timeouts.

* **v1.2 – 2026‑07‑15**  
  - Real‑time terminal output with auto‑scroll.  
  - Added line numbers and bracket matching.

* **v1.0 – 2026‑05‑01**  
  - Initial public release: editor, compile, and run functionality.

---

## Maintainers

- **[shubhyagami](https://github.com/shubhyagami)** – project creator & primary maintainer.
