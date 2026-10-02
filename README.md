[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
# java-IDE

A lightweight, browser-based IDE for Java that compiles and runs your code locally. The Node.js server shells out to your machine's `javac` and `java`, so source files never leave your computer.

![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=flat-square)
![Java](https://img.shields.io/badge/java-%3E%3D17-brightgreen?style=flat-square)
![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)
![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Architecture](#architecture)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Overview

`java-IDE` is a self-contained single-page application for writing, compiling, and running Java in the browser. A small Express backend invokes the local `javac` and `java` executables and forwards their output to the browser over a WebSocket, so you get a near-real-time terminal view without installing a desktop IDE.

Everything runs on your own machine — no source code is uploaded anywhere.

---

## Features

- **Code editor** — CodeMirror 6 with syntax highlighting, line numbers, code folding, auto-indentation, and bracket matching.
- **Compile & run** — `Ctrl + Enter` (Windows/Linux) or `Cmd + Enter` (macOS) compiles the current file and streams the output to the embedded terminal.
- **File management** — Create, rename, delete, and drag-and-drop files. The file tree lives in `localStorage`, so your workspace is restored on reload.
- **Responsive UI** — Works on desktop and mobile, and follows the system light/dark theme.
- **Local-only** — Nothing is sent to a remote server; all code stays on your machine.

---

## Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer   |
| JDK       | 17 or newer     |

Both `java` and `javac` must be available on your `PATH`. If `JAVA_HOME` is set, the server uses the binaries from that JDK instead.

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

To preview the static frontend on its own (no compilation, no terminal):

```bash
npx serve client   # defaults to http://localhost:5000
```

> **Tip:** If the server can't find the JDK, check that `java -version` and `javac -version` work in your shell, or point `JAVA_HOME` at your JDK installation before running `npm start`.

---

## Configuration

The server reads the following environment variables:

| Variable           | Default | Description                                  |
|--------------------|---------|----------------------------------------------|
| `SERVER_PORT`      | `3000`  | Port the server listens on.                  |
| `MAX_OUTPUT_LINES` | `2000`  | Number of terminal lines retained in memory. |
| `JAVA_HOME`        | –       | Path to a JDK installation; overrides `PATH`. |

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
3. **Compile & run** — Press `Ctrl + Enter` (Windows/Linux) or `Cmd + Enter` (macOS).
4. **View output** — The terminal panel shows `stdout` and `stderr` as they are produced.
5. **Manage files** — Drag files, and create, rename, or delete them from the sidebar.
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

The test suite covers the compilation API, WebSocket handling, and error paths. Run `npm run lint` before submitting changes.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Follow the linting rules (`npm run lint`) and make sure the tests pass (`npm test`).
4. Push your branch and open a pull request.

Bug reports, feature requests, and questions are all welcome — feel free to open an issue.

---

## Changelog

- **v1.3 (2026-08-28)** — Persisted tabs, drag-and-drop imports, dark-theme toggle, mobile layout, race-condition fix.
- **v1.2 (2026-07-15)** — Real-time terminal output, auto-scroll.
- **v1.0 (2026-05-01)** — Initial public release.

---

## License

MIT — see the [LICENSE](LICENSE) file.
