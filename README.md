# Java IDE – Browser‑Based Development Environment

A lightweight web application that lets you write, compile, and run Java programs directly in the browser.  
All compilation happens locally on a Node.js backend, so your code never leaves your machine.

[![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)](https://github.com/shubhyagami/java-IDE/actions)
[![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)](https://coveralls.io/github/shubhyagami/java-IDE)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)](https://www.npmjs.com/package/java-ide)

---

## Features

- **Code editor** powered by CodeMirror 6 – syntax highlighting, line numbers, code folding, auto‑indent, and bracket matching.
- **Instant compile & run** – hit **Ctrl + Enter** or click the **Run** button; output streams live to an embedded terminal.
- **File management** – create, rename, delete, drag‑and‑drop files; tabs and layout persist in `localStorage`.
- **Responsive UI** – works on desktop and mobile; light/dark theme follows the system setting.
- **Local backend** – Node.js/Express server runs on your machine and calls the JDK directly; no external services.

---

## Architecture

```
Browser (client)  <—— HTTP/WS ——>  Node.js (Express)  <—— JDK
```

- `client/` – static HTML/CSS/JS served by Express.
- `server/` – Express app that spawns `javac` and `java`, streaming output back via WebSockets.

Compilation never leaves the host.

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE
```

### 1. Install backend dependencies

```bash
cd server
npm ci
```

### 2. Start the backend

```bash
npm start   # defaults to port 3000; use SERVER_PORT to change
```

### 3. Open the client

You can open the static file directly:

```bash
open client/index.html
```

Or serve it with any static server (e.g., `npx serve client`).  
The client will automatically connect to the backend on the same host and port.

Once the server is running, write Java code, press **Ctrl + Enter**, and watch the terminal panel for output.

---

## Prerequisites

| Item | Minimum |
|------|---------|
| Node.js | 18.x or newer |
| JDK | 17 or newer (must be on `PATH` or set via `JAVA_HOME`) |

---

## Configuration

| Variable          | Default  | Description |
|-------------------|----------|-------------|
| `SERVER_PORT`     | `3000`   | Port the Node.js server listens on. |
| `MAX_OUTPUT_LINES`| `2000`  | Maximum number of lines retained in the terminal history. |
| `JAVA_HOME`       | Environment | If set, overrides the JDK path used for compilation. |

Export variables before starting the server:

```bash
export SERVER_PORT=4000
npm start
```

---

## Testing

Run the test suite in the backend directory:

```bash
cd server
npm test
```

The tests cover the compilation API, WebSocket handling, and error scenarios.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make your changes and write clear commit messages.
4. Run `npm test` to ensure the suite passes.
5. Push the branch and open a Pull Request.

Keep the code style consistent with the existing project and update the documentation where appropriate.

---

## License

MIT – see the [LICENSE](LICENSE) file for details.

---

## Changelog

* **v1.3 – 2026‑08‑28** – Persistent tabs, drag‑and‑drop file import, dark‑theme toggle, mobile layout improvements, race‑condition fix.
* **v1.2 – 2026‑07‑15** – Real‑time terminal output, auto‑scroll.
* **v1.0 – 2026‑05‑01** – Initial public release.

---

## Maintainers

- **[shubhyagami](https://github.com/shubhyagami)** – project creator & primary maintainer.
