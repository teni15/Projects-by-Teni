const futureDate = new Date('March 1, 2024 11:30:00');

const days = document.querySelector('#days .Day');
const hours = document.querySelector('#hours .Hour');
const minutes = document.querySelector('#minutes .Min');
const seconds = document.querySelector('#seconds .Sec');

function updateCountdown() {
  const now = new Date();
  const diffInMs = futureDate - now;

  // Calculate days, hours, minutes, and seconds
  const daysLeft = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((diffInMs % (1000 * 60)) / 1000);

  // Format days, hours, minutes, and seconds as two-digit numbers
  const formattedDays = String(daysLeft).padStart(2, '0');
  const formattedHours = String(hoursLeft).padStart(2, '0');
  const formattedMinutes = String(minutesLeft).padStart(2, '0');
  const formattedSeconds = String(secondsLeft).padStart(2, '0');

  // Update the HTML elements for days, hours, minutes, and seconds
  days.textContent = formattedDays;
  hours.textContent = formattedHours;
  minutes.textContent = formattedMinutes;
  seconds.textContent = formattedSeconds;
}

// Update the countdown timer every second
setInterval(updateCountdown, 1000);

// Initialize the countdown timer
updateCountdown();