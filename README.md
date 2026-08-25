-------------


# Java IDE - Modern Browser-Based Development

### Overview

A lightweight, web-based Java Integrated Development Environment (IDE) for creating, compiling, and running Java code directly in the browser. This project eliminates the need for a local IDE setup, making it an ideal choice for anyone who wants to write and execute Java code on the go.

## Features

### Code Editor

* **Syntax Highlighting**: Color-coded syntax for better readability
* **Line Numbers**: Easy navigation for large code bases
* **Code Folding**: Collapse and expand sections for a clutter-free experience
* **Bracket Matching**: Accurate auto-completion powered by CodeMirror

### Execution

* **Real-Time Compilation**: Instant feedback on code changes
* **Integrated Terminal**: Standard input/output for seamless debugging

### Feedback

* **Inline Error Highlighting**: Exact line numbers for easy debugging
* **Execution Time Tracking**: Monitor performance and optimize code

### File Management

* **Save and Load**: Store and load `.java` files for future use
* **Multiple Tabs**: Simultaneously work on different projects
* **Drag-and-Drop File Importing**: Quickly add existing files to your project

### User Experience

* **Responsive Design**: Optimized for desktop and mobile devices
* **Persistent Light/Dark Mode**: Toggle your preferred theme
* **Auto-Save**: Prevent data loss with automatic saving

## Getting Started

### Prerequisites

* Node.js installed on your machine
* A local Java Development Kit (JDK) installed and configured for backend communication

### Quick Start

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
   - Open `client/index.html` directly in your browser
   - Alternatively, serve the directory using a static server
     ```bash
     npx serve client
     ```
5. Write and run code
   - Enter your Java code in the editor
   - Press `Ctrl+Enter` (or click **Run**) to compile and execute
   - View output and errors in the integrated terminal

## Star and Contribute

If you find this project useful, please star it. Contributions are also welcome. To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License and Maintainer

This project is licensed under the MIT License. Built with ❤️ by [shubhyagami](https://github.com/shubhyagami).

[![Build Status](https://travis-ci.org/shubhyagami/java-IDE.svg?branch=main)](https://travis-ci.org/shubhyagami/java-IDE)
[![Maintainability](https://api.codeclimate.com/v1/badges/4d25b6b35d77736c6a08/maintainability)](https://codeclimate.com/repos/4d25b6b35d77736c6a08)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
