[K[2m  [2mmodel openai/gpt-oss-20b failed, trying next...[0m[0m
# Java IDE – Browser‑Based Development Environment  

[![CI](https://img.shields.io/github/actions/workflow/status/shubhyagami/java-IDE/nodejs.yml?label=CI&style=flat-square)](https://github.com/shubhyagami/java-IDE/actions)  
[![Coverage](https://img.shields.io/coveralls/shubhyagami/java-IDE/main?style=flat-square)](https://coveralls.io/github/shubhyagami/java-IDE)  
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)  
[![npm version](https://img.shields.io/npm/v/java-ide?style=flat-square)](https://www.npmjs.com/package/java-ide)  

A lightweight web application that lets you write, compile, and run Java programs directly in the browser. No external services are required—the compilation happens locally on a Node.js backend.

---

## Features  

- **Rich code editor** – CodeMirror 6 with syntax highlighting, line numbers, code folding, bracket matching and auto‑indent.  
- **Instant compile & run** – Press **Ctrl + Enter** or click **Run**; output is streamed to an embedded terminal in real time.  
- **File management** – Create, rename, delete, and drag‑and‑drop files; open tabs persist across sessions via `localStorage`.  
- **Responsive UI** – Works on desktop and mobile; light/dark theme follows the system setting.  
- **Zero‑install backend** – The Node.js server runs locally and invokes the JDK directly; no third‑party APIs are used.

---

## Architecture  

    ┌─────────────┐   HTTP   ┌───────────────────────┐
    │  Browser    │<────────>│  Node.js (Express)    │
    │ (client)   │   WS     │  /api/compile          │
    └─────────────┘          └───────────────────────┘  

- **client/** – Static assets (HTML, CSS, JS) served by the Express server.  
- **server/** – Express app that spawns `javac` and `java`, streams compilation and runtime output back to the client via WebSockets.  

All compilation is performed on the host machine; no code leaves your computer.

---

## Quick Start  

```bash
# Clone and enter the project
git clone https://github.com/shubhyagami/java-IDE.git
cd java-IDE

# Install backend dependencies
cd server
npm ci
npm start      # → http://localhost:3000
```

Open `client/index.html` in a browser, or serve the folder with a static server:

```bash
npx serve client
```

The editor is ready – write Java code, press **Ctrl + Enter**, and watch the output.

---

## Prerequisites  

- **Node.js** v18 or newer  
- **JDK** 17 or newer, accessible via the `PATH` (or set `JAVA_HOME`)  

---

## Installation & Running  

### Backend  

```bash
cd server
npm ci
npm start   # defaults to port 3000; override with SERVER_PORT env var
```

### Frontend  

You can open the HTML file directly:

```bash
open client/index.html
```

or serve it with any static‑file server (e.g., `npx serve client`).  

The client automatically connects to the backend on the same host and port.

---

## Usage  

1. Write or paste Java source code in the editor.  
2. Press **Ctrl + Enter** or click the **Run** button.  
3. The terminal panel below shows compilation errors or program output as they are produced.  

All opened files and tab layout are saved in `localStorage`, so they survive browser reloads and restarts.

---

## Configuration  

| Variable            | Default | Description |
|---------------------|---------|-------------|
| `SERVER_PORT`       | `3000`  | Port on which the Node.js server listens. |
| `MAX_OUTPUT_LINES`  | `2000`  | Maximum number of lines kept in the terminal history. |
| `JAVA_HOME`         | *env*   | If set, overrides the JDK path used for compilation. |

Set variables before starting the server, for example:

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

The test suite covers the compilation API, WebSocket handling, and basic error scenarios.

---

## Contributing  

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/your-feature`.  
3. Make your changes and write clear commit messages.  
4. Run the test suite (`npm test`).  
5. Push the branch and open a Pull Request.  

Please keep the code style consistent with the existing project and update documentation when appropriate.

---

## License  

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## Changelog  

**v1.3 – 2026‑08‑28**  
- Persistent tabs and drag‑and‑drop file import.  
- Dark‑theme toggle and improved mobile layout.  
- Fixed a race condition that caused occasional timeouts.  

**v1.2 – 2026‑07‑15**  
- Real‑time terminal output with auto‑scroll.  
- Added line numbers and bracket matching.  

**v1.0 – 2026‑05‑01**  
- Initial public release: editor, compile, and run functionality.

---

## Maintainers  

- **[shubhyagami](https://github.com/shubhyagami)** – project creator & primary maintainer.  
