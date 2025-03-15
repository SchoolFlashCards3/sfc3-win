// Password Check Function
function checkCode() {
    var code = document.getElementById("codeInput").value;
    if (code === "98598") {
        document.getElementById("protectedContent").style.display = "block"; // Show content
        document.getElementById("codeForm").style.display = "none"; // Hide password form
    } else {
        alert("Incorrect code. Please try again.");
    }
    return false; // Prevent form submission
}

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

// Handle file upload
const fileInput = document.getElementById('file-input');
const textEditor = document.getElementById('text-editor');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (event) => {
            textEditor.value = event.target.result;
        };
        reader.readAsText(file);
    } else {
        alert('Please upload a valid .txt file.');
    }
});

// Save Text File Function
function saveTextFile() {
    const textEditor = document.getElementById('text-editor');
    const text = textEditor.value;

    if (text.trim() === '') {
        alert('The text area is empty. Please enter some text before saving.');
        return;
    }

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
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

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL (e.g., https://example.com)');
        return;
    }

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
    const formattedHours = hours % 12 || 12;
    clock.textContent = `${formattedHours}:${minutes} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

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

// Right-click context menu
const contextMenu = document.getElementById('context-menu');
const wallpaperInput = document.getElementById('wallpaper-input');

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.top = `${e.clientY}px`;
});

document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
});

// Change Wallpaper
function changeWallpaper() {
    wallpaperInput.click();
}

wallpaperInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            document.body.style.backgroundImage = `url('${event.target.result}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file);
    }
});

// Reset Wallpaper
function resetWallpaper() {
    document.body.style.backgroundImage = 'url("https://www.wallpaperhub.app/_next/image?url=https%3A%2F%2Fcdn.wallpaperhub.app%2Fcloudcache%2Fe%2F6%2F7%2F3%2F1%2F4%2Fe6731493cd50103e3561288c33a6a589c9bf67ab.jpg&w=384&q=75")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}

// Snake Game Variables
let canvas = document.getElementById('snake-canvas');
let ctx = canvas.getContext('2d');
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = 'right';
let gameOver = false;
let score = 0;
const restartButton = document.getElementById('restart-button');

// Load high score from localStorage
let highScore = localStorage.getItem('snakeHighScore') || 0;

// Display high score and current score
const scoreDisplay = document.createElement('div');
scoreDisplay.id = 'score-display';
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.bottom = '30px'; // Adjusted to move up slightly
scoreDisplay.style.left = '10px';
scoreDisplay.style.color = 'black'; // Changed text color to black
scoreDisplay.style.fontFamily = 'MS Sans Serif, sans-serif';
scoreDisplay.style.fontSize = '16px';
scoreDisplay.textContent = `Current Score: ${score} | High Score: ${highScore}`;
document.getElementById('snake-window').appendChild(scoreDisplay);

// Snake Game Functions
function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
}

function moveSnake() {
    if (gameOver) return;

    let head = { x: snake[0].x, y: snake[0].y };
    if (direction === 'right') head.x++;
    if (direction === 'left') head.x--;
    if (direction === 'up') head.y--;
    if (direction === 'down') head.y++;

    if (head.x < 0 || head.x >= canvas.width / 20 || head.y < 0 || head.y >= canvas.height / 20 || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver = true;
        restartButton.style.display = 'block';

        // Update high score if current score is higher
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('snakeHighScore', highScore);
            scoreDisplay.textContent = `Current Score: ${score} | High Score: ${highScore}`;
        }
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        placeFood();
        score++; // Increase score when food is eaten
        scoreDisplay.textContent = `Current Score: ${score} | High Score: ${highScore}`;
    } else {
        snake.pop();
    }

    drawSnake();
}

function placeFood() {
    food.x = Math.floor(Math.random() * (canvas.width / 20));
    food.y = Math.floor(Math.random() * (canvas.height / 20));
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
});

function gameLoop() {
    if (!gameOver) {
        moveSnake();
        setTimeout(gameLoop, 100);
    }
}

function openSnake() {
    const snakeWindow = document.getElementById('snake-window');
    snakeWindow.style.display = 'block';
    restartButton.style.display = 'none';
    restartSnake();
}

function closeSnake() {
    const snakeWindow = document.getElementById('snake-window');
    snakeWindow.style.display = 'none';
    gameOver = true;
}

function restartSnake() {
    gameOver = false;
    snake = [{ x: 10, y: 10 }];
    direction = 'right';
    score = 0; // Reset score
    placeFood();
    restartButton.style.display = 'none';
    scoreDisplay.textContent = `Current Score: ${score} | High Score: ${highScore}`;
    drawSnake();
    gameLoop();
}

// Initialize the game when the window loads
window.onload = () => {
    canvas.width = 400;
    canvas.height = 400;
    drawSnake();
};
