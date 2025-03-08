// Toggle Start Menu
const startButton = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');

startButton.addEventListener('click', () => {
    if (startMenu.style.display === 'block') {
        startMenu.style.display = 'none';
    } else {
        startMenu.style.display = 'block';
    }
});

// Close Start Menu when clicking outside
document.addEventListener('click', (event) => {
    if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
        startMenu.style.display = 'none';
    }
});

// Text Editor Functions
function openTextEditor() {
    const textEditorWindow = document.getElementById('text-editor-window');
    textEditorWindow.style.display = 'block';
}

function closeTextEditor() {
    const textEditorWindow = document.getElementById('text-editor-window');
    textEditorWindow.style.display = 'none';
}

// About Window Functions
function openAboutWindow() {
    const aboutWindow = document.getElementById('about-window');
    aboutWindow.style.display = 'block';
}

function closeAboutWindow() {
    const aboutWindow = document.getElementById('about-window');
    aboutWindow.style.display = 'none';
}

// Browser Functions
function openBrowser() {
    const browserWindow = document.getElementById('browser-window');
    browserWindow.style.display = 'block';
}

function closeBrowser() {
    const browserWindow = document.getElementById('browser-window');
    browserWindow.style.display = 'none';
}

function loadWebsite() {
    const addressBar = document.getElementById('address-bar');
    const url = addressBar.value.trim();

    // Ensure the URL starts with http:// or https://
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL (e.g., https://example.com)');
        return;
    }

    // Open the URL in a new tab
    window.open(url, '_blank');
}

// Calculator Functions
function openCalculator() {
    const calculatorWindow = document.getElementById('calculator-window');
    calculatorWindow.style.display = 'block';
}

function closeCalculator() {
    const calculatorWindow = document.getElementById('calculator-window');
    calculatorWindow.style.display = 'none';
}

function appendToDisplay(value) {
    const display = document.getElementById('calculator-display');
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    const display = document.getElementById('calculator-display');
    display.textContent = '0';
}

function calculateResult() {
    const display = document.getElementById('calculator-display');
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

// Clock Function
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    clock.textContent = `${formattedHours}:${minutes} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the time immediately

// Draggable Windows
let activeWindow = null;
let offsetX = 0, offsetY = 0;

document.querySelectorAll('.window').forEach(window => {
    const titleBar = window.querySelector('.title-bar');

    titleBar.addEventListener('mousedown', (e) => {
        activeWindow = window;
        offsetX = e.clientX - window.offsetLeft;
        offsetY = e.clientY - window.offsetTop;
    });
});

document.addEventListener('mousemove', (e) => {
    if (activeWindow) {
        activeWindow.style.left = `${e.clientX - offsetX}px`;
        activeWindow.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    activeWindow = null;
});
