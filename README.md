<div align="center">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</div>

<div align="center">
  <h1>🚀 Java IDE - Online Java Compiler</h1>
  <p><strong>A modern, web-based Java IDE similar to Programiz</strong></p>
  
  <div style="display: flex; justify-content: center; gap: 20px; margin: 20px 0;">
    <a href="#features">✨ Features</a>
    <a href="#demo">🎮 Demo</a>
    <a href="#installation">⚙️ Installation</a>
    <a href="#usage">📖 Usage</a>
    <a href="#contributing">🤝 Contributing</a>
  </div>
</div>

---

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=25&pause=1000&color=667EEA&center=true&vCenter=true&width=600&height=100&lines=Write+Java+Code+Online;Compile+and+Run+Instantly;Save+and+Load+Files;Modern+IDE+Experience" alt="Typing SVG" />
</div>

---

## ✨ Features

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

### 🎨 **Code Editor**
- **Syntax Highlighting** for Java with CodeMirror
- **Line Numbers** and **Code Folding**
- **Multiple Themes** (Monokai, Default, Dracula, Material)
- **Auto-indentation** and **Bracket Matching**
- **Keyboard Shortcuts** (Ctrl+S, Ctrl+O, Ctrl+Enter)

### ⚡ **Compilation & Execution**
- **Real-time Java compilation** and execution
- **Input/Output handling** for interactive programs
- **Error and warning display** with detailed messages
- **Loading indicators** during compilation
- **Automatic cleanup** of temporary files

### 💾 **File Management**
- **Save Java files** with custom names
- **Load previously saved files**
- **Delete unwanted files**
- **File browser** with preview
- **Local storage** on server

### 🎯 **Modern UI/UX**
- **Responsive design** for all devices
- **Glassmorphism effects** and modern styling
- **Dark/Light theme support**
- **Smooth animations** and transitions
- **Intuitive interface** similar to Programiz

</div>

---

## 🎮 Demo

<div align="center">
  <img src="https://img.shields.io/badge/Live_Demo-667EEA?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
</div>

> **Note**: The demo requires Java JDK to be installed on the server. For a live demo, you'll need to deploy this application.

### 🎥 **Demo Features**
- **Code Editor**: Write Java code with syntax highlighting
- **Input Section**: Provide input for your programs
- **Output Section**: See compilation results and program output
- **File Management**: Save, load, and manage your Java files
- **Error Handling**: Clear error messages for debugging

---

## 🚀 Quick Start

### Prerequisites

<div style="display: flex; justify-content: center; gap: 10px; margin: 20px 0;">
  <img src="https://img.shields.io/badge/Node.js-14+-green?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Java_JDK-8+-orange?style=for-the-badge&logo=java" alt="Java JDK">
  <img src="https://img.shields.io/badge/Windows_10+-blue?style=for-the-badge&logo=windows" alt="Windows">
</div>

### Installation

```bash
# Clone the repository
git clone https://github.com/shubhyagami/java-compiler.git

# Navigate to the project directory
cd java-compiler

# Install dependencies
npm install

# Start the server
npm start
```

### 🎯 **One-liner Installation**
```bash
git clone https://github.com/shubhyagami/java-compiler.git && cd java-compiler && npm install && npm start
```

---

## 📖 Usage

### 🖥️ **Writing Java Code**
1. The editor comes with a default "Hello World" example
2. Write your Java code in the main editor
3. Ensure your class name matches the filename (e.g., `public class Main`)

### ▶️ **Running Code**
1. Click the **Run** button or press **Ctrl+Enter**
2. The code will be compiled and executed
3. Output will appear in the Output section
4. Any compilation errors will be displayed

### ⌨️ **Providing Input**
1. If your program requires input, type it in the **Input** section
2. Click **Run** to execute with the provided input
3. The input will be automatically passed to your Java program

### 💾 **Saving Files**
1. Click the **Save** button or press **Ctrl+S**
2. Enter a filename (without .java extension)
3. Your code will be saved locally on the server

### 📂 **Loading Files**
1. Click the **Load** button or press **Ctrl+O**
2. Select a previously saved file from the list
3. The code will be loaded into the editor

---

## 🎨 **Example Code**

### Hello World Example
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Example: Calculate sum of numbers
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        System.out.println("Sum of numbers from 1 to 10: " + sum);
    }
}
```

### Input Example
```java
import java.util.Scanner;

public class InputTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");
        scanner.close();
    }
}
```

---

## 🏗️ Project Structure

```
java-ide/
├── 📁 server/
│   ├── 📄 index.js          # Main server file
│   ├── 📁 temp/             # Temporary compilation files
│   └── 📁 files/            # Saved Java files
├── 📁 public/
│   ├── 📄 index.html        # Main HTML file
│   ├── 📄 styles.css        # CSS styles
│   └── 📄 script.js         # Frontend JavaScript
├── 📁 examples/
│   ├── 📄 HelloWorld.java   # Example with input
│   └── 📄 Calculator.java   # Calculator example
├── 📄 package.json          # Node.js dependencies
└── 📄 README.md            # This file
```

---

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/run` | Compile and run Java code |
| `POST` | `/api/save` | Save a Java file |
| `GET` | `/api/load/:filename` | Load a specific file |
| `GET` | `/api/files` | List all saved files |
| `DELETE` | `/api/files/:filename` | Delete a file |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Save file |
| `Ctrl+O` | Load file |
| `Ctrl+Enter` | Run code |
| `Tab` | Indent code |
| `Ctrl+Space` | Code completion |

---

## 🐛 Troubleshooting

### Common Issues

<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">

#### ❌ **"javac not found" error**
- Make sure Java JDK is installed and added to PATH
- Restart your terminal/command prompt after installation

#### ❌ **"Port 3000 already in use"**
- Change the port in `server/index.js` or kill the process using the port

#### ❌ **Code doesn't compile**
- Ensure your Java code has a `public class` with a `main` method
- Check for syntax errors in the output

#### ❌ **Files not saving/loading**
- Check if the `server/files` directory exists
- Ensure proper file permissions

</div>

### Performance Tips
- Large files may take longer to compile
- Use the Clear buttons to free up memory
- Restart the server if you experience slowdowns

---

## 🔒 Security Notes

<div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 20px 0;">

⚠️ **Important**: This IDE runs Java code on your local machine. Be careful when running code from untrusted sources. The server stores files locally - ensure proper access controls.

</div>

---

## 🤝 Contributing

<div align="center">
  <img src="https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge&logo=github" alt="Contributions Welcome">
</div>

We welcome contributions! Here's how you can help:

### 🎯 **Ways to Contribute**
- 🐛 **Report bugs** and issues
- 💡 **Suggest new features**
- 📝 **Improve documentation**
- 🔧 **Submit pull requests**
- ⭐ **Star the repository**

### 📋 **Contribution Guidelines**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="MIT License">
</div>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

<div style="display: flex; justify-content: center; gap: 20px; margin: 20px 0;">

- [CodeMirror](https://codemirror.net/) for the code editor
- [Font Awesome](https://fontawesome.com/) for icons
- [Express.js](https://expressjs.com/) for the web server
- [Programiz](https://www.programiz.com/) for inspiration

</div>

---

<div align="center">
  <h3>🌟 Star this repository if you found it helpful!</h3>
  
  <div style="display: flex; justify-content: center; gap: 10px; margin: 20px 0;">
    <img src="https://img.shields.io/github/stars/shubhyagami/java-compiler?style=social" alt="Stars">
    <img src="https://img.shields.io/github/forks/shubhyagami/java-compiler?style=social" alt="Forks">
    <img src="https://img.shields.io/github/watchers/shubhyagami/java-compiler?style=social" alt="Watchers">
  </div>
  
  <p><strong>Made with ❤️ by <a href="https://github.com/shubhyagami">shubhyagami</a></strong></p>
</div>

---

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=20&pause=2000&color=667EEA&center=true&vCenter=true&width=600&height=50&lines=Happy+Coding!+%F0%9F%8E%89" alt="Happy Coding!" />
</div> 