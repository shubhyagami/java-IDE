# java-IDE

A lightweight, browser‑based IDE that compiles and runs Java code locally.  
All compilation and execution are performed on the machine that hosts the Node.js backend, so your source code never leaves your computer.

![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)  
![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)  
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)  
![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## Table of contents

- [Quick start](#quick-start)
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation & running](#installation--running)
- [Configuration](#configuration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)
- [Maintainers](#maintainers)

---

## Quick start

```bash
# Clone the repository
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# Install and start the backend
cd server
npm ci
npm start   # runs on http://localhost:3000

# Open the IDE
open http://localhost:3000   # or navigate manually in your browser
```

The frontend is served automatically by Express. If you prefer to preview the static files without running the backend, you can also run:

```bash
npx serve client  # serves the `client/` folder on http://localhost:5000
```

---

## Features

| Feature | Description |
|---------|-------------|
| **Code editor** | CodeMirror 6 with syntax highlighting, line numbers, code folding, auto‑indentation, and bracket matching. |
| **Compile & run** | `Ctrl+Enter` (or the Run button) compiles the active file and streams output to the embedded terminal. |
| **File management** | Create, rename, delete, drag‑and‑drop files. Tab state is persisted via `localStorage`. |
| **Responsive UI** | Works on desktop and mobile; respects the system light/dark theme. |
| **Purely local** | All code is compiled and executed locally; no data leaves your machine. |

---

## Architecture

```text
Browser (client) ── HTTP/WebSocket ──► Express (Node.js) ── exec ──► JDK
```

* `client/` – Static assets (HTML, CSS, JS) served by Express.
* `server/` – Express app that spawns `javac` and `java` and streams stdout/stderr over WebSocket.

---

## Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer   |
| JDK       | 17 or newer     |

`java` and `javac` must be available on the system `PATH`.  
If you want the server to use a specific JDK installation, set the `JAVA_HOME` environment variable; the server will then use `JAVA_HOME/jre/bin/java` and `JAVA_HOME/bin/javac`.

---

## Installation & running

```bash
# From the repository root
cd server
npm ci          # install dependencies
npm start       # starts the server on http://localhost:3000
```

The server automatically serves the static frontend.  
Open `http://localhost:3000` in any browser; the IDE will connect to the running backend.

If you need the server on a different port:

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
| `MAX_OUTPUT_LINES`| 2000    | Number of terminal lines kept in memory. |
| `JAVA_HOME`       | –       | Path to a JDK installation; overrides the default `java`/`javac` on `PATH`. |

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

The test suite verifies the compilation API, WebSocket handling, and error conditions.

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

- **v1.3 (2026‑08‑28)** – Persisted tabs, drag‑and‑drop file import, dark‑theme toggle, mobile layout improvements, race‑condition fix.  
- **v1.2 (2026‑07‑15)** – Real‑time terminal output, auto‑scroll.  
- **v1.0 (2026‑05‑01)** – Initial public release.

---

## Maintainers

- **[shubhyagami](https://github.com/shubhyagami)** – project creator & primary maintainer.
