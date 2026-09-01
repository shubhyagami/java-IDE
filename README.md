# Java IDE – Browser‑Based Development Environment

A lightweight web application that lets you write, compile, and run Java code directly in the browser without any additional installation.

---

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)
- [Maintainers](#maintainers)

---

## Features

- **Code editor** – CodeMirror 6 with syntax highlighting, line numbers, folding, bracket matching, and auto‑indent.
- **Instant compile & run** – Submit code via `Ctrl+Enter` or the Run button; output appears in an embedded terminal that scrolls automatically.
- **File management** – Create, edit, rename, delete, drag‑and‑drop files; multiple tabs stay open across sessions.
- **Responsive UI** – Works on desktop and mobile, with light/dark theme that follows the system preference.
- **Zero‑install backend** – The node server runs locally; no external hosting required.

---

## Architecture

```
┌─────────────┐   HTTP   ┌───────────────────────┐
│  Browser    │<────────>│  Node.js (Express)    │
│  (client)  │   WebSocket   │  /api/compile         │
└─────────────┘           └───────────────────────┘
```

* `client/` – Static files (HTML, CSS, JS) served by the node server.
* `server/` – Express application that spawns `javac` and `java` processes, streams output back to the client via WebSockets.
* All compilation happens locally; no third‑party services.

---

## Getting Started

### Prerequisites

- Node.js **v18+**
- JDK 17+ in your `PATH`

### Installation

```bash
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE
```

#### Backend

```bash
cd server
npm install
npm start     # starts at http://localhost:3000
```

#### Frontend

Open `client/index.html` in a browser, or serve it statically:

```bash
npx serve client
```

---

## Usage

1. Type or paste Java source into the editor.
2. Press **Ctrl + Enter** or click **Run**.
3. The terminal panel displays compilation errors or program output in real time.

The editor keeps your open files across browser restarts by storing them in `localStorage`.

---

## Configuration

| Setting | Default | Description |
|---------|---------|-------------|
| `SERVER_PORT` | `3000` | Port for the node backend. |
| `MAX_OUTPUT_LINES` | `2000` | Maximum lines stored in terminal history. |
| `JAVA_HOME` | env var | Optional; overrides the default JDK path. |

Set environment variables before starting the server, e.g.:

```bash
export SERVER_PORT=4000
npm start
```

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes with a clear message.
4. Push and open a Pull Request.

Please run the test suite before submitting:

```bash
cd server
npm test
```

---

## License

MIT – see the [LICENSE](LICENSE) file.

---

## Changelog

### v1.3 – 2026‑08‑28

- Persistent tabs and drag‑and‑drop file import.
- Dark‑theme toggle and mobile layout improvements.
- Resolved race condition causing occasional timeouts.

### v1.2 – 2026‑07‑15

- Real‑time terminal output with auto‑scroll.
- Added line numbers and bracket matching.

### v1.0 – 2026‑05‑01

- First public release: editor + compile/run.

---

## Maintainers

- [shubhyagami](https://github.com/shubhyagami)

---

## Badges

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)](https://github.com/shubhyagami/java-IDE/actions)
[![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)](https://coveralls.io/github/shubhyagami/java-IDE)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/java-ide?style=flat-square)](https://www.npmjs.com/package/java-ide)
