# Java IDE

A lightweight, browser‑based development environment that compiles and runs Java code locally.  
All compilation and execution happens on the machine that hosts the Node.js backend, so your source code never leaves your computer.

![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square) ![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square) ![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## Table of contents

- [Introduction](#introduction)
- [Quick start](#quick-start)
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the IDE](#running-the-ide)
- [Configuration](#configuration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)
- [Maintainers](#maintainers)

---

## Introduction

Java IDE is a self‑contained, browser‑based editor that compiles Java files on your local machine.  
It consists of a Node.js Express server that runs `javac` and `java` and a static front‑end that communicates via WebSockets.

---

## Quick start

```bash
# clone the repo
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# start the backend
cd server
npm ci
npm start   # listens on http://localhost:3000 by default

# serve the front‑end (from the repo root)
npx serve client
```

Open `http://localhost:3000` in any browser. The IDE will automatically connect to the running backend.

---

## Features

| Feature | Description |
|---------|------------|
| Code editor | CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indentation and bracket matching. |
| Compile & run | `Ctrl+Enter` or the Run button compiles the active file and streams the output to an embedded terminal. |
| File management | Create, rename, delete and drag‑and‑drop files. Opened tabs persist across sessions via `localStorage`. |
| Responsive UI | Works on desktop and mobile; matches the system light/dark theme. |
| Purely local | All compilation and execution happen locally; no code is sent to external services. |

---

## Architecture

```
Browser (client) ────HTTP/WebSocket───► Express (Node.js) ────exec──► JDK
```

* `client/` – Static assets (HTML, CSS, JS) served by Express.  
* `server/` – Express app that spawns `javac` and `java`, streams stdout/stderr over WebSocket.

---

## Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer   |
| JDK       | 17 or newer     |

`java` and `javac` must be available on the system `PATH`.  
If you prefer to point to a specific JDK installation, set the `JAVA_HOME` environment variable; the server will use `JAVA_HOME/jre/bin/java` and `JAVA_HOME/bin/javac`.

---

## Installation

```bash
# from the repository root
cd server
npm ci        # install dependencies
npm start     # starts the server on http://localhost:3000
```

The server is now ready.  Serve the front‑end or open the `client/` folder directly with any static server.

---

## Running the IDE

```bash
# serve the front‑end
npx serve client
```

Open `http://localhost:3000` in a browser.  The IDE will connect automatically to the backend.

If you need the server on a different port:

```bash
export SERVER_PORT=4000
npm start
```

---

## Configuration

The server accepts the following environment variables:

| Variable          | Default | Description |
|-------------------|---------|-----------|
| `SERVER_PORT`     | 3000    | Port on which the server listens. |
| `MAX_OUTPUT_LINES`| 2000    | Number of terminal lines kept in memory. |
| `JAVA_HOME`       | –       | If set, overrides the JDK path used for compilation. |

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

The test suite exercises the compilation API, WebSocket handling and error conditions.

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
