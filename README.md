# java-IDE

A lightweight, browser‑based IDE that compiles and runs Java code locally.  
All compilation and execution happen on the machine that hosts the Node.js
backend, so your source code never leaves your computer.

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
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)
- [Maintainers](#maintainers)

---

## Getting started

1. **Clone the repository**

   ```bash
   git clone https://github.com/shubhyagami/java-IDE.git
   cd java-IDE
   ```

2. **Install the backend and start the server**

   ```bash
   cd server
   npm ci
   npm start   # listens on http://localhost:3000
   ```

3. **Open the IDE**

   Navigate to `http://localhost:3000` in any browser.  
   The static frontend is served automatically by Express.

> *Tip:* To preview the static assets independently, run `npx serve client`
> (defaulting to `http://localhost:5000`).

---

## Features

- **Code editor** – CodeMirror 6 with syntax highlighting, line numbers, folding, auto‑indentation, and bracket matching.
- **Compile & run** – `Ctrl + Enter` (or the Run button) compiles the current file and streams **stdout/stderr** to an embedded terminal.
- **File management** – Create, rename, delete, and drag‑and‑drop files. The tab state persists via `localStorage`.
- **Responsive UI** – Fully functional on desktop and mobile; respects the system light/dark theme.
- **Purely local** – No data exits your machine.

---

## Architecture

```
Browser (client)
│
├─ HTTP          → Express (Node.js) → exec('javac') / exec('java')
│
└─ WebSocket    → streams stdout/stderr → embedded terminal
```

- `client/` – Static assets (HTML, CSS, JS) served by Express.
- `server/` – Express app that spawns `javac` and `java` and streams output over WebSocket.

---

## Prerequisites

| Component | Minimum version |
|-----------|-----------------|
| Node.js   | 18.x or newer |
| JDK       | 17 or newer |

Both `java` and `javac` must be available on the system `PATH`.  
If a specific JDK should be used, set `JAVA_HOME` to its installation directory; the server will then use `JAVA_HOME/jre/bin/java` and `JAVA_HOME/bin/javac`.

---

## Installation

From the repository root:

```bash
cd server
npm ci          # install dependencies
npm start       # starts the server on http://localhost:3000
```

To run the server on a different port:

```bash
export SERVER_PORT=4000
npm start
```

---

## Configuration

Environment variables supported by the server:

| Variable          | Default | Description |
|-------------------|---------|-------------|
| `SERVER_PORT`     | `3000`  | Port on which the server listens. |
| `MAX_OUTPUT_LINES` | `2000` | Number of terminal lines kept in memory. |
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
5. Tabs persist in `localStorage`; they will automatically restore after a reload.

---

## Testing

Run the test suite from the `server/` directory:

```bash
cd server
npm test
```

The tests cover the compilation API, WebSocket handling, and error conditions.

---

## Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/your-feature`.  
3. Keep the code style consistent (`npm run lint` if available).  
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

---

## Maintainers

- **[shubhyagami](https://github.com/shubhyagami)** – project creator & primary maintainer.
