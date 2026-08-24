-------------


# Java IDE - Online Java Compiler

A modern, browser-based Java IDE for writing, compiling, and running Java code directly in your browser.

## About this project

This project provides a lightweight, browser-based environment for compiling and executing Java code without requiring a local IDE setup. It features a full-featured code editor, integrated terminal, and backend execution layer powered by Node.js and the local JDK.

## Features

### Code Editor

* Syntax highlighting
* Line numbers
* Code folding
* Bracket matching powered by CodeMirror

### Execution

* Real-time Java compilation and execution
* Integrated terminal for standard I/O

### Feedback

* Inline error highlighting with exact line numbers
* Execution time tracking

### File Management

* Save and load `.java` files
* Multiple tabs for different projects
* Drag-and-drop file importing

### User Experience

* Responsive layout for desktop and mobile
* Persistent light/dark mode toggle
* Auto-save to prevent data loss

## Getting Started

### Prerequisites

* Node.js installed on your machine
* A local Java Development Kit (JDK) installed and configured so the backend can invoke the compiler

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/shubhyagami/java-IDE.git
   cd java-IDE
   ```

2. Install backend dependencies
   ```bash
   cd server
   npm install
   ```

3. Start the backend server
   ```bash
   npm start
   ```

4. Open the frontend
   Open `client/index.html` directly in your browser, or serve the directory using a static server:
   ```bash
   npx serve client
   ```

5. Write and run code
   - Enter your Java code in the editor.
   - Press `Ctrl+Enter` (or click **Run**) to compile and execute.
   - View output and errors in the integrated terminal.

## Star and use

If you find this project useful, please star it.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Maintainer

Built with ❤️ by [shubhyagami](https://github.com/shubhyagami).
