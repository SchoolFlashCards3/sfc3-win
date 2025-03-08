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
