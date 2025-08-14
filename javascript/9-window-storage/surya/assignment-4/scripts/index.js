const countdownInput = document.getElementById('countdown-input');
const startCountdown = document.getElementById('start-countdown');
const countdownDisplay = document.getElementById('countdown-display');
let countdownInterval;


startCountdown.addEventListener('click', () => {
    let timeLeft = Number(countdownInput.value);

    clearInterval(countdownInterval); 
    countdownDisplay.textContent = timeLeft;

    countdownInterval = setInterval(() => {
        timeLeft--;
        countdownDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);
});

const stopwatchDisplay = document.getElementById('stopwatch-display');
const startStopwatch = document.getElementById('start-stopwatch');
const stopStopwatch = document.getElementById('stop-stopwatch');
const resetStopwatch = document.getElementById('reset-stopwatch');

let stopwatchTime = 0;
let stopwatchRunning = false;
let stopwatchTimeout;

function runStopwatch() {
    stopwatchTimeout = setTimeout(() => {
        stopwatchTime++;
        stopwatchDisplay.textContent = stopwatchTime;
        if (stopwatchRunning) runStopwatch(); 
    }, 1000);
}

startStopwatch.addEventListener('click', () => {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        runStopwatch();
    }
});

stopStopwatch.addEventListener('click', () => {
    stopwatchRunning = false;
    clearTimeout(stopwatchTimeout);
});

resetStopwatch.addEventListener('click', () => {
    stopwatchRunning = false;
    clearTimeout(stopwatchTimeout);
    stopwatchTime = 0;
    stopwatchDisplay.textContent = stopwatchTime;
});
