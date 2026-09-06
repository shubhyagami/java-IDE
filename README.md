# Java IDE

A lightweight, browser‑based IDE that compiles and runs Java code locally.  
All requests are handled by a Node.js backend that invokes the system JDK, so your source code never leaves your machine.

[![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)](https://github.com/shubhyagami/java-IDE/actions)
[![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)](https://coveralls.io/github/shubhyagami/java-IDE)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)](https://www.npmjs.com/package/java-ide)

---

## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation & Launch](#installation--launch)
- [Configuration](#configuration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)
- [Maintainers](#maintainers)

---

## Quick Start

```bash
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE
```

Install dependencies and start the server:

```bash
cd server
npm ci
npm start   # defaults to http://localhost:3000
```

Serve the client (or open `client/index.html` directly):

```bash
npx serve client
```

Open `http://localhost:3000` in a browser. The IDE will automatically connect to the backend.

---

## Features

| Feature                     | What it does |
|------------------------------|--------------|
| **Code editor**              | CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indent, and bracket matching. |
| **Instant compile & run**   | `Ctrl + Enter` (or the Run button) compiles the active file and streams output to an embedded terminal. |
| **File management**         | Create, rename, delete, drag‑and‑drop files; tabs persist via `localStorage`. |
| **Responsive UI**           | Works on desktop and mobile; automatically adapts to system light/dark themes. |
| **Purely local**            | Compilation and execution happen on your machine; no code is sent to any external server. |

---

## Architecture

```
Browser (client) ────HTTP/WebSocket───► Express (Node.js) ────exec──► JDK
```

* `client/` – Static assets served by Express.  
* `server/` – Express app that spawns `javac` and `java`, streams stdout/stderr over WebSocket.

---

## Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer   |
| JDK       | 17 or newer     |

Ensure `java` and `javac` are in your `PATH`.  
Alternatively set `JAVA_HOME` to the JDK root directory; this will be used by the server.

---

## Installation & Launch

```bash
# from the repository root
cd server
npm ci        # install dependencies
npm start     # starts the server (default port 3000)
```

### Launch the IDE

Serve the static client or open its index file:

```bash
npx serve client
```

The client detects the backend automatically.

---

## Configuration

Environment variables accepted by the server:

| Variable          | Default  | Description |
|-------------------|----------|-------------|
| `SERVER_PORT`     | `3000`   | Port on which the server listens. |
| `MAX_OUTPUT_LINES`| `2000`   | Terminal lines kept in memory. |
| `JAVA_HOME`       | –        | If set, overrides the JDK path used for compilation. |

Example:

```bash
export SERVER_PORT=4000
export JAVA_HOME=/opt/jdk-17
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
3. Keep the code style consistent with the existing codebase.  
4. Run `npm test` to ensure all tests pass.  
5. Push the branch and open a Pull Request.

Feel free to open issues or ask questions if anything is unclear.

---

## License

MIT – see the [LICENSE](LICENSE) file.

---

## Changelog

- **v1.3 (2026‑08‑28)** – Persisted tabs, drag‑and‑drop file import, dark‑theme toggle, mobile layout improvements, race‑condition fix.  
- **v1.2 (2026‑07‑15)** – Real‑time terminal output, auto‑scroll.  
- **v1.0 (2026‑05‑01)** – Initial public release.

---

## Maintainers

- **[shubhyagami](https://github.com/shubhyagami)** – project creator & primary maintainer.
