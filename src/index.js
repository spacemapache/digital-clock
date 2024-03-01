function updateClock() {
  let now = new Date();
  const hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  const minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").textContent = timeString;
}

updateClock();

// update seconds

setInterval(updateClock, 1000);
