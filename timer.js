let totalSeconds = 0;
let interval = null;

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  document.getElementById("timer-display").innerText = formatTime(totalSeconds);
}

function setTime() {
  const input = document.getElementById("timeInput").value;
  const [h, m, s] = input.split(':').map(Number);
  totalSeconds = h * 3600 + m * 60 + (s || 0);
  updateDisplay();
}

function startTimer() {
  if (!interval && totalSeconds > 0) {
    interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
      } else {
        clearInterval(interval);
        interval = null;
        alert("Time's up!");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  totalSeconds = 0;
  updateDisplay();
}

updateDisplay(); // Initialize display
