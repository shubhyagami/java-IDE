<div align="center">
  <h1>Java IDE - Online Java Compiler</h1>
  <p>A modern, web-based Java IDE for writing, compiling, and running Java code directly in your browser.</p>
  
  <p>
    <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express&logoColor=white" alt="Express.js">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
    <br>
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs">
  </p>
</div>

---

## Overview

This project provides a lightweight, browser-based environment for compiling and executing Java code without requiring a local IDE setup. It features a full-featured code editor, integrated terminal, and backend execution layer powered by Node.js and the local JDK.

## Features

- **Code Editor**: Syntax highlighting, line numbers, code folding, and bracket matching powered by CodeMirror.
- **Execution**: Real-time Java compilation and execution with an integrated terminal for standard I/O.
- **Feedback**: Inline error highlighting with exact line numbers and execution time tracking.
- **File Management**: Save and load `.java` files, use multiple tabs for different projects, and drag-and-drop file importing.
- **User Experience**: Responsive layout for desktop and mobile, persistent light/dark mode toggle, and auto-save to prevent data loss.

## Getting Started

These instructions will help you set up the IDE on your local machine for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A local Java Development Kit (JDK) installed and configured so the backend can invoke the compiler.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhyagami/java-IDE.git
   cd java-IDE
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   ```

4. **Open the frontend**  
   Open `client/index.html` directly in your browser, or serve the directory using a static server:
   ```bash
   npx serve client
   ```

5. **Write and run code**  
   - Enter your Java code in the editor.
   - Press `Ctrl+Enter` (or click **Run**) to compile and execute.
   - View output and errors in the integrated terminal.

## Changelog

### [v1.5.0] - 2026-08-06
#### Added
- Quick Start guide for new users.
- Dark/Light mode toggle now persists across sessions.
- Drag-and-drop file import for `.java` files.

#### Changed
- Upgraded CodeMirror to v6 for better performance.
- Improved inline error highlighting to show exact line numbers.

#### Fixed
- Auto-save timer no longer fires when the editor is empty.
- Terminal scroll behavior on long outputs.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/shubhyagami">shubhyagami</a>.</sub>
</div>
