# Java IDE

A lightweight, browser‑based IDE for writing, compiling, and running Java code locally.  
All compilation is performed by a Node.js backend that calls the JDK on your machine, so your source never leaves your computer.

![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)
![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## Table of Contents

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

## Features

- **Code editor** – CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indent, and bracket matching.  
- **Instant compile & run** – `Ctrl+Enter` or click **Run**; output streams live to the embedded terminal.  
- **File management** – create, rename, delete, drag‑and‑drop files; tabs and layout persist in `localStorage`.  
- **Responsive UI** – works on desktop and mobile; light/dark mode follows the system theme.  
- **Purely local** – the Node.js/Express server calls `javac`/`java`; no code is sent to the internet.

---

## Architecture

```
Browser (client)   <HTTP/WebSocket>   Node.js (Express)   <exec>    JDK
```

- `client/` – static HTML, CSS and JavaScript served by Express.  
- `server/` – Express app that spawns `javac` and `java`, streaming stdout/stderr via WebSocket.

---

## Installation

### Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer   |
| JDK       | 17 or newer     |

The JDK must be on `PATH` or you can set `JAVA_HOME`.

### Core Setup

```bash
# clone the repository
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# install backend dependencies
cd server
npm ci

# start the backend
npm start   # defaults to port 3000; use SERVER_PORT to change
```

### Running the Client

The client can be opened directly in a browser:

```
open client/index.html
```

or served by any static server:

```
npx serve client
```

The client will automatically connect to the backend on the same host/port.

---

## Configuration

The server accepts the following environment variables:

| Variable         | Default | Description                                                  |
|------------------|--------|--------------------------------------------------------------|
| `SERVER_PORT`    | 3000   | Port on which the Node.js server listens.                    |
| `MAX_OUTPUT_LINES` | 2000  | Number of terminal lines retained in memory.                 |
| `JAVA_HOME`      | –      | If set, overrides the JDK path used for compilation.         |

Example:

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
3. Make changes and write clear commit messages.  
4. Run `npm test` to ensure all tests pass.  
5. Push the branch and open a Pull Request.

Keep the code style consistent with the existing project and update the documentation where necessary.

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
