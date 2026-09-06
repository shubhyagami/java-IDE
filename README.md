# Java IDE

A lightweight, browser‑based IDE that compiles and runs Java code locally.  
All requests are processed by a Node.js backend that invokes the system JDK, so your source code never leaves your machine.

![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)  
![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)  
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)  
![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## Table of Contents

- [Getting Started](#getting-started)
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

## Getting Started

```bash
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE
```

Install dependencies and start the server:

```bash
cd server
npm ci
npm start   # by default, listens on http://localhost:3000
```

Open `client/index.html` in a browser (or simply visit `http://localhost:3000`).  
The IDE will automatically connect to the backend running on the same host.

---

## Features

| Feature                 | What it does |
|-------------------------|--------------|
| **Code editor**         | CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indent, bracket matching. |
| **Instant compile & run** | `Ctrl + Enter` or the Run button compiles the active file and streams output to an embedded terminal. |
| **File management**     | Create, rename, delete, drag‑and‑drop files; tabs persist in `localStorage`. |
| **Responsive UI**      | Works on desktop and mobile, auto‑adapts to system light/dark themes. |
| **Purely local**        | Compilation and execution happen on your machine; no code is sent anywhere. |

---

## Architecture

```
Browser (client)  <HTTP/WebSocket>  Node.js (Express)  <exec>  JDK
```

* `client/` – Static assets served by Express.
* `server/` – Express app that spawns `javac` and `java`, streams stdout/stderr over WebSocket.

---

## Prerequisites

| Component | Minimum version |
|-----------|----------------|
| Node.js   | 18.x or newer |
| JDK       | 17 or newer    |

Make sure `java` and `javac` are in your `PATH`.  
Alternatively, set `JAVA_HOME` to the JDK root directory.

---

## Installation & Launch

```bash
# From the repository root
cd server
npm ci          # Install dependencies
npm start       # Starts the server (default port 3000)
```

### Launch the IDE

Open `client/index.html` in a browser or serve it with any static file server:

```bash
npx serve client
```

The client auto‑detects the backend on the same host.

---

## Configuration

Environment variables accepted by the server:

| Variable      | Default  | Description |
|---------------|----------|------------|
| `SERVER_PORT` | `3000`   | Port on which the server listens. |
| `MAX_OUTPUT_LINES` | `2000` | Number of terminal lines kept in memory. |
| `JAVA_HOME`   | –        | If set, overrides the JDK path used for compilation. |

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
