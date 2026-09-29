[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
# java-IDE

A lightweight, browser-based IDE for Java that compiles and runs code entirely on your local machine. All compilation and execution happen on the host, so your source files never leave your computer.

![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=flat-square)
![Java](https://img.shields.io/badge/java-%3E%3D17-brightgreen?style=flat-square)
![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)
![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Getting started](#getting-started)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Usage](#usage)
- [Architecture](#architecture)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Overview

`java-IDE` is a self-contained, single-page application for writing, compiling, and running Java code in the browser. A small Node.js/Express server acts as the backend and invokes the local `javac` and `java` executables. Standard output and error streams are forwarded to the browser over WebSocket, giving you a near-real-time terminal view.

Because everything runs on your machine, no source code is uploaded anywhere.

---

## Features

- **Code editor** — CodeMirror 6 with syntax highlighting, line numbers, code folding, auto-indentation, and bracket matching.
- **Compile & run** — `Ctrl + Enter` (Windows/Linux) or `Cmd + Enter` (macOS) compiles the current file and streams the output to an embedded terminal.
- **File management** — Create, rename, delete, and drag-and-drop files. The file tree is stored in `localStorage`, so your workspace is restored on reload.
- **Responsive UI** — Works on desktop and mobile, and respects the system light/dark theme.
- **Local-only** — Nothing is sent to a remote server; all code stays on your machine.

---

## Getting started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# Install dependencies and start the server
npm ci
npm start   # defaults to http://localhost:3000
```

Then open <http://localhost:3000> in your browser.

If you only want to test the static frontend, run:

```bash
npx serve client   # defaults to http://localhost:5000
```

> **Tip:** Make sure `java` and `javac` are on your `PATH`. To use a specific JDK, set `JAVA_HOME` to its installation directory before starting the server.

---

## Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer   |
| JDK       | 17 or newer     |

`java` and `javac` must be available on the `PATH`. If `JAVA_HOME` is set, the server uses `${JAVA_HOME}/bin/javac` and `${JAVA_HOME}/jre/bin/java` instead.

---

## Configuration

Environment variables accepted by the server:

| Variable           | Default | Description                                    |
|--------------------|---------|------------------------------------------------|
| `SERVER_PORT`      | `3000`  | Port the server listens on.                    |
| `MAX_OUTPUT_LINES` | `2000`  | Number of terminal lines retained in memory.   |
| `JAVA_HOME`        | –       | Path to a JDK installation, overrides `PATH`.  |

Example:

```bash
export SERVER_PORT=4000
export JAVA_HOME=/opt/jdk-17
npm start
```

---

## Usage

1. **Open the IDE** — Navigate to the URL printed by `npm start`.
2. **Write code** — Edit the current file or create new ones from the file tree.
3. **Compile & run** — Press **Ctrl + Enter** (Windows/Linux) or **Cmd + Enter** (macOS).
4. **View output** — The terminal panel displays `stdout` and `stderr` in real time.
5. **Manage files** — Drag files, and create, rename, or delete them in the sidebar.
6. **Resume where you left off** — Open tabs and the workspace are persisted in `localStorage` and restored after a reload.

---

## Architecture

```
Browser (client)
│
├─ HTTP      → Express (Node.js) → spawn('javac') / spawn('java')
└─ WebSocket → streams stdout/stderr → embedded terminal
```

- `client/` — Static assets (HTML, CSS, JS) served by Express.
- `server/` — Express server that talks to the local JDK and streams output.

---

## Testing

```bash
cd server
npm test
```

The test suite covers the compilation API, WebSocket handling, and error paths. Lint with `npm run lint` before submitting changes.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Follow the linting rules (`npm run lint`) and run the tests (`npm test`).
4. Push your branch and open a Pull Request.

Issues and questions are welcome — feel free to open one for a bug, a feature request, or general feedback.

---

## Changelog

- **v1.3 (2026-08-28)** — Persisted tabs, drag-and-drop imports, dark-theme toggle, mobile layout, race-condition fix.
- **v1.2 (2026-07-15)** — Real-time terminal output, auto-scroll.
- **v1.0 (2026-05-01)** — Initial public release.

---

## License

MIT — see the [LICENSE](LICENSE) file.
