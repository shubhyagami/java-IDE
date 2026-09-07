# Java IDE

A lightweight, browser‑based development environment that compiles and runs Java code locally.  
All work is performed on the client and on the machine that runs the Node.js backend, so your source code never leaves your computer.

![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square) ![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square) ![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## Table of contents

- [Getting started](#getting-started)
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

## Getting started

```bash
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE
```

**Start the backend**

```bash
cd server
npm ci          # install dependencies
npm start        # the server listens on http://localhost:3000 by default
```

**Serve the client**

```bash
npx serve client
```

Open `http://localhost:3000` in any browser and the IDE will automatically detect the running backend.

---

## Features

| Feature | Description |
|---------|-------------|
| **Code editor** | CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indentation, and bracket matching. |
| **Instant compile & run** | `Ctrl+Enter` (or the Run button) compiles the active file and streams the output to an embedded terminal. |
| **File management** | Create, rename, delete, and drag‑and‑drop files; opened tabs persist across sessions via `localStorage`. |
| **Responsive UI** | Works on desktop and mobile; automatically switches to the system light/dark theme. |
| **Purely local** | All compilation and execution happen on your machine; no code is sent to any external service. |

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

`java` and `javac` must be in your `PATH`.  
Alternatively set `JAVA_HOME` to the JDK root – the server will use that when compiling.

---

## Installation

```bash
# from the repository root
cd server
npm ci          # install dependencies
npm start       # defaults to http://localhost:3000
```

The server is ready; you can now serve the client or open it directly.

---

## Running the IDE

Serve the client assets:

```bash
npx serve client
```

Open `http://localhost:3000` in a browser. The IDE will connect automatically to the backend.

If you need a different port for the server:

```bash
export SERVER_PORT=4000
npm start
```

---

## Configuration

Environment variables accepted by the server:

| Variable          | Default | Description |
|-------------------|---------|-------------|
| `SERVER_PORT`     | 3000    | Port on which the server listens. |
| `MAX_OUTPUT_LINES`| 2000   | Number of terminal lines kept in memory. |
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
