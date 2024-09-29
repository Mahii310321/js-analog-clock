const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

function updateTime() {
  // *get current time and calculate degree for clock hands
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hrToDeg = (date.getHours() / 12) * 360;
  console.log(secToDeg);

  // *   rotate the clock hands to approprtate degree
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

setInterval(updateTime, 1000);

updateTime();
