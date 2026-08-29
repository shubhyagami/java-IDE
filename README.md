# Java IDE – Browser‑Based Development Environment  

A lightweight, web‑based IDE that lets you write, compile, and run Java code directly in the browser—no local setup required.  

## Overview  

Java IDE is a minimal, responsive web application that provides a full‑featured code editor, real‑time compilation, and simple file management. It’s ideal for quick experiments, learning, or coding on the go when you don’t want to install a heavy desktop IDE.  

## Key Features  

- **Rich Code Editor** – Syntax highlighting, line numbers, folding, and bracket matching using CodeMirror.  
- **Instant Compilation** – Run Java code instantly; results appear in an embedded terminal with live feedback.  
- **File Management** – Create, edit, save, and load multiple `.java` files; drag‑and‑drop files into the editor and keep tabs persistent across sessions.  
- **Responsive Design** – Optimized UI for desktop and mobile, with a theme that adapts to user preferences.  
- **Zero‑Install Backend** – The server runs locally; no external hosting required.  

## Quick Start  

### Prerequisites  
- Node.js (v18+)  
- A JDK installed and available on the system `PATH`.  

### Setup  
1. Clone the repository  
   ```bash
   git clone https://github.com/shubhyagami/java-IDE.git
   cd java-IDE
   ```  

2. Install backend dependencies  
   ```bash
   cd server && npm install && cd ..
   ```  

3. Start the backend server  
   ```bash
   npm start   # runs on http://localhost:3000
   ```  

4. Open the frontend  
   - Open `client/index.html` directly in a browser, or serve the `client` folder with a static server (e.g., `npx serve client`).  

5. Write and run Java code  
   - Type code in the editor.  
   - Press **Ctrl + Enter** or click the **Run** button to compile and execute.  

## Contributing  

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/YourFeature`.  
3. Make your changes and commit: `git commit -m 'Add YourFeature'`.  
4. Push the branch: `git push origin feature/YourFeature`.  
5. Open a Pull Request for review.  

## License  

Java IDE is released under the **MIT License** – see the `LICENSE` file for details.  

## Badges  

[![Build Status](https://travis-ci.org/shubhyagami/java-IDE.svg?branch=main)](https://travis-ci.org/shubhyagami/java-IDE)  
[![Maintainability](https://api.codeclimate.com/v1/badges/4d25b6b35d77736c6a08/maintainability)](https://codeclimate.com/github/shubhyagami/java-IDE)  
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)  

## Changelog (excerpt)  

- **v1.3 – 2026‑08‑28**  
  - Added persistent file tabs and drag‑and‑drop import.  
  - Improved mobile responsiveness and added dark‑theme toggle.  
  - Fixed compilation race condition causing occasional timeouts.  
- **v1.2 – 2026‑07‑15**  
  - Integrated real‑time terminal output with auto‑scroll.  
  - Added line‑number gutter and bracket‑matching highlight.  
- **v1.0 – 2026‑05‑01**  
  - Initial public release with basic editor and compile/run functionality.  

**Maintained by [shubhyagami](https://github.com/shubhyagami).**
