[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# java‑IDE

A lightweight, browser‑based IDE for Java that compiles and runs code entirely on the host machine. All compilation and execution happen locally, so your source files never leave your computer.

![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)
![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## 📚 Table of contents

- [Overview](#overview)
- [Features](#features)
- [Getting started](#getting-started)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)

---

## 📖 Overview

`java-IDE` is a simple, self‑contained IDE that lets you write, compile, and run Java code from a browser. It is built with Node.js/Express for the backend and CodeMirror 6 for the frontend. All compilation is performed on the server side using the local JDK, and output is streamed back to the browser over WebSocket, making the experience feel instant.

---

## ✨ Features

- **Code editor** – CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indentation, and bracket matching.
- **Compile & run** – `Ctrl + Enter` (or `Cmd + Enter` on macOS) compiles the current file and streams stdout/stderr to an embedded terminal.
- **File management** – Create, rename, delete, and drag‑and‑drop files. The file tree is persisted in `localStorage` so your workspace is restored on reload.
- **Responsive UI** – Works on desktop and mobile, respects system light/dark theme.
- **Local‑only** – Everything runs on your machine; no code leaves your computer.

---

## 🚀 Getting started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# Install and start the server
npm ci
npm start   # defaults to http://localhost:3000
```

Open <http://localhost:3000> in a browser. The static front‑end is served automatically by Express.

> **Tip:** To test the frontend without the server, run `npx serve client` (defaults to <http://localhost:5000>).

---

## 🏗 Architecture

```
Browser (client)
│
├─ HTTP    → Express (Node.js) → spawn('javac') / spawn('java')
│
└─ WebSocket → streams stdout/stderr → embedded terminal
```

The repo is split into two top‑level directories:

- **`client/`** – Static assets (HTML, CSS, JS) served by Express.  
- **`server/`** – Express server that spawns `javac`/`java` and streams output over WebSocket.

---

## 📦 Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer |
| JDK       | 17 or newer   |

`java` and `javac` must be on the system `PATH`. If you want to use a specific JDK, set `JAVA_HOME` to its installation directory; the server will then use `JAVA_HOME/jre/bin/java` and `JAVA_HOME/bin/javac`.

---

## ⚙️ Configuration

The server respects these environment variables:

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

## 📦 Usage

1. Open the IDE in a browser.  
2. Type Java code in the editor.  
3. Press **Ctrl + Enter** (Windows/Linux) or **Cmd + Enter** (macOS) to compile and run the current file.  
4. View real‑time stdout and stderr in the terminal panel.  
5. Use the file explorer sidebar to create, rename, delete, or drag‑and‑drop files.  
6. The IDE remembers open tabs in `localStorage` and restores them on reload.

---

## 🧪 Testing

```bash
cd server
npm test
```

The test suite covers the compilation API, WebSocket handling, and error conditions.

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/your-feature`.  
3. Follow the code style (`npm run lint` if available).  
4. Run `npm test` to verify that all tests pass.  
5. Push your branch and open a Pull Request.

Feel free to open issues for bugs, feature requests, or questions.

---

## 📄 License

MIT – see the [LICENSE](LICENSE) file.

---

## 📅 Changelog

- **v1.3 (2026‑08‑28)** – Persisted tabs, drag‑and‑drop imports, dark‑theme toggle, mobile layout improvements, race‑condition fix.  
- **v1.2 (2026‑07‑15)** – Real‑time terminal output, auto‑scroll.  
- **v1.0 (2026‑05‑01)** – Initial public release.
