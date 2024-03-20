let timerInterval;
let startTime;
let elapsedTime = 0;
let running = false;

const timerDisplay = document.getElementById("timer");
const ripple = document.getElementById("ripple");
const guide = document.getElementById("guide");

function startTimer() {
  running = true;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 1000);
  ripple.classList.add("active");
  guide.style.display = "none";
}

function pauseTimer() {
  running = false;
  clearInterval(timerInterval);
  ripple.classList.remove("active");
}

function updateTimer() {
  if (running) {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    timerDisplay.textContent = formattedTime;
  }
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}
timerDisplay.addEventListener("click", function () {
  if (running) {
    pauseTimer();
  } else {
    startTimer();
  }
});
timerDisplay.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  pauseTimer();
  timerDisplay.textContent = "00:00:00";
  elapsedTime = 0;
});
