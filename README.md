# Java IDE

A lightweight browser‑based IDE that lets you write, compile, and run Java programs directly in the browser.  
All compilation is performed locally by a Node.js backend, so your code never leaves your machine.

![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)  
![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)  
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)  
![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)

---

## Features

- **Code editor** powered by CodeMirror 6 – syntax highlighting, line numbers, folding, auto‑indent, and bracket matching.  
- **Instant compile & run** – `Ctrl+Enter` or click **Run**; output streams live to an embedded terminal.  
- **File management** – create, rename, delete, drag‑and‑drop files; tabs and layout persist in `localStorage`.  
- **Responsive UI** – works on desktop and mobile; light/dark theme follows the system setting.  
- **Purely local** – a Node.js/Express server calls the JDK directly; all compilation stays on your machine.

---

## Architecture

```
Browser (client)  ─── HTTP / WebSocket ──── Node.js (Express)  ──── JDK
```

- `client/` – static HTML/CSS/JS served by Express.  
- `server/` – Express app that spawns `javac`/`java` and streams output back via WebSockets.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE
```

### 1️⃣ Install backend dependencies

```bash
cd server
npm ci
```

### 2️⃣ Start the backend

```bash
npm start   # defaults to port 3000; use SERVER_PORT to change
```

### 3️⃣ Open the client

```bash
open client/index.html
```

or serve it with any static server:

```bash
npx serve client
```

The client automatically connects to the backend on the same host and port.  
Write Java code, press **Ctrl+Enter**, and observe the output in the terminal panel.

---

## Prerequisites

| Item      | Minimum |
|-----------|---------|
| Node.js   | 18.x or newer |
| JDK       | 17 or newer (must be on `PATH` or set via `JAVA_HOME`) |

---

## Configuration

Environment variables accepted by the server:

| Variable         | Default | Description |
|------------------|---------|-------------|
| `SERVER_PORT`    | `3000`  | Port the Node.js server listens on. |
| `MAX_OUTPUT_LINES`| `2000`| Maximum number of terminal lines retained. |
| `JAVA_HOME`     | –       | If set, overrides the JDK path used for compilation. |

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

1. Fork the repo.  
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

- **v1.3 (2026‑08‑28)** – Persistent tabs, drag‑and‑drop file import, dark‑theme toggle, mobile layout improvements, race‑condition fix.  
- **v1.2 (2026‑07‑15)** – Real‑time terminal output, auto‑scroll.  
- **v1.0 (2026‑05‑01)** – Initial public release.

---

## Maintainers

- **[shubhyagami](https://github.com/shubhyagami)** – project creator & primary maintainer.
