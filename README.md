# java-IDE

A lightweight, browser‑based IDE that compiles and runs Java code locally. All compilation and execution happen on the machine that hosts the Node.js backend, so your source code never leaves your computer.

![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)  
![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)  
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)  
![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## Table of contents

- [Getting started](#getting-started)
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)

---

## Getting started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# Install and run the server
cd server
npm ci
npm start   # default: http://localhost:3000
```

Open `http://localhost:3000` in a browser. The static front‑end is served automatically by Express.

> *Tip:* If you only want to preview the static assets, run `npx serve client` (defaults to `http://localhost:5000`).

---

## Features

- **Code editor** – CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indentation, and bracket matching.
- **Compile & run** – `Ctrl + Enter` (or `Cmd + Enter` on macOS) compiles the current file and streams **stdout** / **stderr** to an embedded terminal.
- **File management** – Create, rename, delete, and drag‑and‑drop files. Tab state persists via `localStorage`.
- **Responsive UI** – Fully functional on desktop and mobile and respects system light/dark theme.
- **Purely local** – No data leaves your machine.

---

## Architecture

```
Browser (client)
│
├─ HTTP   → Express (Node.js) → exec('javac') / exec('java')
│
└─ WebSocket → streams stdout/stderr → embedded terminal
```

The repository contains two top‑level directories:

- `client/` – Static assets (HTML, CSS, JS) served by Express.
- `server/` – Express app that spawns `javac` and `java` and streams output over WebSocket.

---

## Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer |
| JDK       | 17 or newer |

Both `java` and `javac` must be available on the system `PATH`.  
To use a specific JDK set `JAVA_HOME` to its installation directory; the server will then use `JAVA_HOME/jre/bin/java` and `JAVA_HOME/bin/javac`.

---

## Configuration

The server honours the following environment variables:

| Variable          | Default | Description |
|-------------------|---------|-------------|
| `SERVER_PORT`     | `3000`  | Port the server listens on. |
| `MAX_OUTPUT_LINES`| `2000`  | Number of terminal lines kept in memory. |
| `JAVA_HOME`       | –       | Path to a JDK installation; overrides the default `java`/`javac` on `PATH`. |

Example:

```bash
export SERVER_PORT=4000
export JAVA_HOME=/opt/jdk-17
npm start
```

---

## Usage

1. Open the IDE in a browser and start typing Java code.  
2. Press **Ctrl + Enter** (Windows/Linux) or **Cmd + Enter** (macOS) to compile and run the current file.  
3. Observe the terminal panel for real‑time stdout and stderr.  
4. Use the file explorer sidebar to create, rename, delete, or drag‑and‑drop files.  
5. Tab state is persisted in `localStorage` and restores automatically after a reload.

---

## Testing

```bash
cd server
npm test
```

The test suite covers the compilation API, WebSocket handling, and error conditions.

---

## Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/your-feature`.  
3. Follow the code style (`npm run lint` if available).  
4. Run `npm test` to ensure all tests pass.  
5. Push your branch and open a Pull Request.

Feel free to open issues for bugs, feature requests, or questions.

---

## License

MIT – see the [LICENSE](LICENSE) file.

---

## Changelog

- **v1.3 (2026‑08‑28)** – Persisted tabs, drag‑and‑drop import, dark‑theme toggle, mobile layout improvements, race‑condition fix.  
- **v1.2 (2026‑07‑15)** – Real‑time terminal output, auto‑scroll.  
- **v1.0 (2026‑05‑01)** – Initial public release.
