# Java IDE

A lightweight, browser‑based IDE for writing, compiling, and running Java code on your own machine.  
All compilation is handled by a Node.js backend that calls the system JDK, so your source never leaves your computer.

[![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)](https://github.com/shubhyagami/java-IDE/actions)  
[![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)](https://coveralls.io/github/shubhyagami/java-IDE)  
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)  
[![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)](https://www.npmjs.com/package/java-ide)

---

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Core Setup](#core-setup)
  - [Running the Client](#running-the-client)
- [Configuration](#configuration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)
- [Maintainers](#maintainers)

---

## Getting Started

```bash
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE
```

The server and client can be started with a single command:

```bash
cd server
npm ci
npm start
```

Open the client in a browser by visiting `http://localhost:3000` or by opening `client/index.html` directly.  
The IDE will automatically connect to the backend running on the same host.

---

## Features

| Feature | Description |
|---------|--------------|
| **Code editor** | CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indent, and bracket matching. |
| **Instant compile & run** | `Ctrl + Enter` or the Run button compiles and executes the active file; output streams live in an embedded terminal. |
| **File management** | Create, rename, delete, drag‑and‑drop files; tabs and layout persist in `localStorage`. |
| **Responsive UI** | Works on desktop and mobile; automatically adapts to light/dark system themes. |
| **Purely local** | All compilation and execution happens locally; no code is sent to any external service. |

---

## Architecture

```
Browser (client)  <HTTP/WebSocket>  Node.js (Express)  <exec>  JDK
```

* **`client/`** – static assets served by Express.
* **`server/`** – Express application that spawns `javac` and `java`, streaming stdout/stderr over WebSocket.

---

## Installation

### Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer   |
| JDK       | 17 or newer     |

The JDK must be in `PATH`; alternatively set `JAVA_HOME` to its root directory.

### Core Setup

```bash
# from the root
cd server
npm ci          # Installs dependencies
npm start       # Starts the server on port 3000 (use SERVER_PORT to change)
```

### Running the Client

The client can be served directly:

```bash
# from the root
open client/index.html
```

or via a static file server:

```bash
npx serve client
```

The client connects automatically to the backend running on the same host.

---

## Configuration

Environment variables accepted by the server:

| Variable | Default | Description |
|----------|---------|-------------|
| `SERVER_PORT` | `3000` | Port on which the server listens. |
| `MAX_OUTPUT_LINES` | `2000` | Number of terminal lines kept in memory. |
| `JAVA_HOME` | – | If set, overrides the JDK path used for compilation. |

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

The test suite exercises the compilation API, WebSocket handling, and error paths.

---

## Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/your-feature`.  
3. Make your changes and keep the code style consistent with the existing project.  
4. Run `npm test` to ensure all tests pass.  
5. Push the branch and open a Pull Request.

Feel free to open issues or ask questions if something is unclear.

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
