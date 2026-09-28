[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# java-IDE

A lightweight, browser‑based IDE for Java that compiles and runs code entirely on your local machine. All compilation and execution happen on the host, so your source files never leave your computer.

![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=flat-square)
![Java](https://img.shields.io/badge/java-%3E%3D17-brightgreen?style=flat-square)
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

`java-IDE` is a self‑contained, single‑page application that lets you write, compile, and run Java code from the browser. The backend is a small Node.js/Express server that invokes the local `javac` and `java` executables. Standard output and error streams are forwarded to the browser over WebSocket, giving you a near‑real‑time terminal view.

---

## ✨ Features

- ✅ **Code editor** – CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indentation, and bracket matching.
- ✅ **Compile & run** – `Ctrl + Enter` (Windows/Linux) or `Cmd + Enter` (macOS) compiles the current file and streams output to an embedded terminal.
- ✅ **File management** – Create, rename, delete, and drag‑and‑drop files. The file tree is stored in `localStorage` so your workspace is restored on reload.
- ✅ **Responsive UI** – Works on desktop and mobile; respects system light/dark theme.
- ✅ **Local‑only** – Nothing is sent to a remote server; all code stays on your machine.

---

## 🚀 Getting started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# Install dependencies and start the server
npm ci
npm start   # defaults to http://localhost:3000
```

Open <http://localhost:3000> in a browser.  
If you only want to test the static frontend, run:

```bash
npx serve client   # defaults to http://localhost:5000
```

> **Tip:** Make sure `java` and `javac` are on your `PATH`. If you want to use a specific JDK, set `JAVA_HOME` to its installation directory before starting the server.

---

## 🏗 Architecture

```
Browser (client)
│
├─ HTTP   → Express (Node.js) → spawn('javac') / spawn('java')
└─ WebSocket → streams stdout/stderr → embedded terminal
```

* `client/` – Static assets (HTML, CSS, JS) served by Express.  
* `server/` – Express server that talks to the local JDK and streams output.

---

## 📦 Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer  |
| JDK       | 17 or newer    |

`java` and `javac` must be available on the `PATH`.  
If you set `JAVA_HOME`, the server will use `${JAVA_HOME}/bin/javac` and `${JAVA_HOME}/jre/bin/java`.

---

## ⚙️ Configuration

Environment variables accepted by the server:

| Variable           | Default   | Description                                        |
|--------------------|----------|----------------------------------------------------|
| `SERVER_PORT`      | `3000`   | Port the server listens on.                        |
| `MAX_OUTPUT_LINES`| `2000`   | Number of terminal lines retained in memory.       |
| `JAVA_HOME`        | –        | Path to a JDK installation, overrides `PATH`.     |

Example:

```bash
export SERVER_PORT=4000
export JAVA_HOME=/opt/jdk-17
npm start
```

---

## 📦 Usage

1. **Open the IDE** – Navigate to the URL shown by `npm start`.  
2. **Write code** – Edit the editor or create new files via the file tree.  
3. **Compile & run** – Press **Ctrl + Enter** (Windows/Linux) or **Cmd + Enter** (macOS).  
4. **View output** – The terminal panel displays `stdout` and `stderr` in real time.  
5. **File operations** – Drag files, create, rename, and delete them in the sidebar.  
6. **Persisted state** – Open tabs and the workspace are persisted in `localStorage` and restored after a page reload.

---

## 🧪 Testing

```bash
cd server
npm test
```

Run the test suite to validate the compilation API, WebSocket handling, and error paths.

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/your-feature`.  
3. Follow the linting rules (`npm run lint`) and run tests (`npm test`).  
4. Push your branch and open a Pull Request.

Feel free to open issues for bugs, feature requests, or questions.

---

## 📄 License

MIT – see the [LICENSE](LICENSE) file.

---

## 📅 Changelog

- **v1.3 (2026‑08‑28)** – Persisted tabs, drag‑and‑drop imports, dark‑theme toggle, mobile layout, race‑condition fix.  
- **v1.2 (2026‑07‑15)** – Real‑time terminal output, auto‑scroll.  
- **v1.0 (2026‑05‑01)** – Initial public release.
