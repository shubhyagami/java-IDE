// Global variables
let editor;
let currentMode = 'save'; // 'save' or 'load'
let currentFilename = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCodeEditor();
    setupEventListeners();
    loadDefaultCode();
});

// Initialize CodeMirror editor
function initializeCodeEditor() {
    const textarea = document.getElementById('codeEditor');
    
    editor = CodeMirror.fromTextArea(textarea, {
        mode: 'text/x-java',
        theme: 'monokai',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: {
            'Ctrl-Space': 'autocomplete',
            'Tab': function(cm) {
                if (cm.somethingSelected()) {
                    cm.indentSelection('add');
                } else {
                    cm.replaceSelection('    ', 'end');
                }
            }
        }
    });

    // Set initial size
    editor.setSize('100%', '100%');
}

// Setup event listeners
function setupEventListeners() {
    // Run button
    document.getElementById('runBtn').addEventListener('click', runCode);
    
    // Save button
    document.getElementById('saveBtn').addEventListener('click', () => {
        currentMode = 'save';
        showFileModal('Save File');
    });
    
    // Load button
    document.getElementById('loadBtn').addEventListener('click', () => {
        currentMode = 'load';
        showFileModal('Load File');
    });
    
    // Clear buttons
    document.getElementById('clearBtn').addEventListener('click', clearEditor);
    document.getElementById('clearInputBtn').addEventListener('click', clearInput);
    document.getElementById('clearOutputBtn').addEventListener('click', clearOutput);
    
    // Theme selector
    document.getElementById('themeSelect').addEventListener('change', changeTheme);
    
    // Modal events
    document.querySelector('.close').addEventListener('click', hideFileModal);
    document.getElementById('modalCancelBtn').addEventListener('click', hideFileModal);
    document.getElementById('modalConfirmBtn').addEventListener('click', handleModalConfirm);
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('fileModal');
        if (event.target === modal) {
            hideFileModal();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 's':
                    e.preventDefault();
                    currentMode = 'save';
                    showFileModal('Save File');
                    break;
                case 'o':
                    e.preventDefault();
                    currentMode = 'load';
                    showFileModal('Load File');
                    break;
                case 'Enter':
                    e.preventDefault();
                    runCode();
                    break;
            }
        }
    });
}

// Load default Java code
function loadDefaultCode() {
    const defaultCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Example: Calculate sum of numbers
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        System.out.println("Sum of numbers from 1 to 10: " + sum);
    }
}`;
    
    editor.setValue(defaultCode);
}

// Run Java code
async function runCode() {
    const code = editor.getValue();
    const input = document.getElementById('inputArea').value;
    
    if (!code.trim()) {
        showOutput('Please enter some Java code to run.', 'error');
        return;
    }
    
    // Show loading overlay
    showLoading(true);
    
    try {
        const response = await fetch('/api/run', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code, input })
        });
        
        const result = await response.json();
        
        if (result.success) {
            let output = result.output;
            if (result.error) {
                output += '\n\nWarnings/Errors:\n' + result.error;
            }
            showOutput(output, 'success');
        } else {
            // Show compilation errors in a clear format
            const errorMessage = result.error || 'Compilation failed';
            showOutput('Compilation Error:\n' + errorMessage, 'error');
        }
    } catch (error) {
        console.error('Error running code:', error);
        showOutput('An error occurred while running the code. Please try again.', 'error');
    } finally {
        showLoading(false);
    }
}

// Show output in the output area
function showOutput(content, type = 'success') {
    const outputArea = document.getElementById('outputArea');
    
    if (type === 'error') {
        outputArea.innerHTML = `<div class="error-message">${content}</div>`;
    } else {
        outputArea.innerHTML = `<pre>${content}</pre>`;
    }
}

// Clear editor
function clearEditor() {
    if (confirm('Are you sure you want to clear the editor?')) {
        editor.setValue('');
    }
}

// Clear input
function clearInput() {
    document.getElementById('inputArea').value = '';
}

// Clear output
function clearOutput() {
    const outputArea = document.getElementById('outputArea');
    outputArea.innerHTML = `
        <div class="output-placeholder">
            <i class="fas fa-play-circle"></i>
            <p>Click "Run" to execute your Java code</p>
        </div>
    `;
}

// Change editor theme
function changeTheme() {
    const theme = document.getElementById('themeSelect').value;
    editor.setOption('theme', theme);
}

// Show file modal
function showFileModal(title) {
    const modal = document.getElementById('fileModal');
    const modalTitle = document.getElementById('modalTitle');
    const saveForm = document.getElementById('saveForm');
    const fileList = document.getElementById('fileList');
    const modalConfirmBtn = document.getElementById('modalConfirmBtn');
    
    modalTitle.textContent = title;
    
    if (currentMode === 'save') {
        saveForm.style.display = 'block';
        fileList.style.display = 'none';
        modalConfirmBtn.textContent = 'Save';
        document.getElementById('filename').value = '';
    } else {
        saveForm.style.display = 'none';
        fileList.style.display = 'block';
        modalConfirmBtn.textContent = 'Load';
        loadFileList();
    }
    
    modal.style.display = 'block';
}

// Hide file modal
function hideFileModal() {
    document.getElementById('fileModal').style.display = 'none';
}

// Handle modal confirm button
async function handleModalConfirm() {
    if (currentMode === 'save') {
        await saveFile();
    } else {
        // Load functionality is handled by individual file buttons
        hideFileModal();
    }
}

// Save file
async function saveFile() {
    const filename = document.getElementById('filename').value.trim();
    const code = editor.getValue();
    
    if (!filename) {
        alert('Please enter a filename');
        return;
    }
    
    if (!code.trim()) {
        alert('Please enter some code to save');
        return;
    }
    
    try {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filename, code })
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('File saved successfully!');
            hideFileModal();
        } else {
            alert('Error saving file: ' + result.error);
        }
    } catch (error) {
        console.error('Error saving file:', error);
        alert('An error occurred while saving the file');
    }
}

// Load file list
async function loadFileList() {
    try {
        const response = await fetch('/api/files');
        const result = await response.json();
        
        const filesContainer = document.getElementById('filesContainer');
        
        if (result.files.length === 0) {
            filesContainer.innerHTML = '<p>No saved files found.</p>';
            return;
        }
        
        filesContainer.innerHTML = result.files.map(filename => `
            <div class="file-item">
                <span>${filename}</span>
                <div class="file-actions">
                    <button class="load-file" onclick="loadFile('${filename}')">Load</button>
                    <button class="delete-file" onclick="deleteFile('${filename}')">Delete</button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading file list:', error);
        document.getElementById('filesContainer').innerHTML = '<p>Error loading files.</p>';
    }
}

// Load specific file
async function loadFile(filename) {
    try {
        const response = await fetch(`/api/load/${filename}`);
        const result = await response.json();
        
        if (result.success) {
            editor.setValue(result.code);
            hideFileModal();
            showOutput(`File "${filename}" loaded successfully!`, 'success');
        } else {
            alert('Error loading file: ' + result.error);
        }
    } catch (error) {
        console.error('Error loading file:', error);
        alert('An error occurred while loading the file');
    }
}

// Delete file
async function deleteFile(filename) {
    if (!confirm(`Are you sure you want to delete "${filename}"?`)) {
        return;
    }
    
    try {
        const response = await fetch(`/api/files/${filename}`, {
            method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
            loadFileList(); // Refresh the file list
        } else {
            alert('Error deleting file: ' + result.error);
        }
    } catch (error) {
        console.error('Error deleting file:', error);
        alert('An error occurred while deleting the file');
    }
}

// Show/hide loading overlay
function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = show ? 'block' : 'none';
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Auto-resize editor on window resize
window.addEventListener('resize', () => {
    if (editor) {
        editor.refresh();
    }
}); 