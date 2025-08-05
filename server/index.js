const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Create directories if they don't exist
const tempDir = path.join(__dirname, 'temp');
const filesDir = path.join(__dirname, 'files');

fs.ensureDirSync(tempDir);
fs.ensureDirSync(filesDir);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, filesDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Compile and run Java code
app.post('/api/run', async (req, res) => {
  try {
    const { code, input } = req.body;
    
    if (!code) {
      return res.status(400).json({ error: 'No code provided' });
    }

    // Check if Java is available
    try {
      await execAsync('javac -version');
    } catch (javaError) {
      return res.json({
        success: false,
        output: 'Java Development Kit (JDK) is not installed or not in PATH. Please install JDK to compile Java code.',
        error: 'Java not found'
      });
    }

    // Extract class name from code
    const classNameMatch = code.match(/public\s+class\s+(\w+)/);
    if (!classNameMatch) {
      return res.status(400).json({ error: 'No public class found in code' });
    }
    
    const className = classNameMatch[1];
    const javaFile = path.join(tempDir, `${className}.java`);
    
    // Ensure the code starts with the class declaration (remove any BOM or encoding issues)
    const cleanCode = code.trim().replace(/^\uFEFF/, ''); // Remove BOM if present
    
    // Write Java code to file
    await fs.writeFile(javaFile, cleanCode, 'utf8');
    
    // Compile Java code
    try {
      const compileResult = await execAsync(`javac "${javaFile}"`);
      console.log('Compilation successful');
    } catch (compileError) {
      // Clean up temporary files
      await fs.remove(javaFile);
      console.error('Compilation error:', compileError);
      return res.json({
        success: false,
        output: '',
        error: compileError.stderr || compileError.message || 'Compilation failed'
      });
    }
    
    // Run Java program
    const classFile = path.join(tempDir, `${className}.class`);
    let runResult;
    
    try {
      if (input) {
        // Run with input using spawn for better input handling
        const { spawn } = require('child_process');
        const child = spawn('java', ['-cp', tempDir, className], {
          stdio: ['pipe', 'pipe', 'pipe']
        });
        
        let stdout = '';
        let stderr = '';
        
        child.stdout.on('data', (data) => {
          stdout += data.toString();
        });
        
        child.stderr.on('data', (data) => {
          stderr += data.toString();
        });
        
        // Send input to the process
        if (input) {
          child.stdin.write(input);
        }
        child.stdin.end();
        
        runResult = await new Promise((resolve, reject) => {
          child.on('close', (code) => {
            resolve({ stdout, stderr, code });
          });
          
          child.on('error', reject);
        });
      } else {
        // Run without input
        runResult = await execAsync(`java -cp "${tempDir}" ${className}`);
      }
      
      // Clean up temporary files
      await fs.remove(javaFile);
      await fs.remove(classFile);
      
      res.json({
        success: true,
        output: runResult.stdout || '',
        error: runResult.stderr || ''
      });
      
    } catch (runError) {
      // Clean up temporary files
      await fs.remove(javaFile);
      if (await fs.pathExists(classFile)) {
        await fs.remove(classFile);
      }
      
      res.json({
        success: false,
        output: '',
        error: runError.stderr || runError.message || 'Execution failed'
      });
    }
    
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Save file
app.post('/api/save', async (req, res) => {
  try {
    const { filename, code } = req.body;
    
    if (!filename || !code) {
      return res.status(400).json({ error: 'Filename and code are required' });
    }
    
    const filePath = path.join(filesDir, filename.endsWith('.java') ? filename : `${filename}.java`);
    await fs.writeFile(filePath, code);
    
    res.json({ success: true, message: 'File saved successfully' });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ error: 'Failed to save file' });
  }
});

// Load file
app.get('/api/load/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(filesDir, filename.endsWith('.java') ? filename : `${filename}.java`);
    
    if (!await fs.pathExists(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    const code = await fs.readFile(filePath, 'utf8');
    res.json({ success: true, code });
  } catch (error) {
    console.error('Load error:', error);
    res.status(500).json({ error: 'Failed to load file' });
  }
});

// List saved files
app.get('/api/files', async (req, res) => {
  try {
    const files = await fs.readdir(filesDir);
    const javaFiles = files.filter(file => file.endsWith('.java'));
    res.json({ files: javaFiles });
  } catch (error) {
    console.error('List files error:', error);
    res.status(500).json({ error: 'Failed to list files' });
  }
});

// Delete file
app.delete('/api/files/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(filesDir, filename.endsWith('.java') ? filename : `${filename}.java`);
    
    if (!await fs.pathExists(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    await fs.remove(filePath);
    res.json({ success: true, message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete file' });
  }
});

app.listen(PORT, () => {
  console.log(`Java IDE server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
}); 