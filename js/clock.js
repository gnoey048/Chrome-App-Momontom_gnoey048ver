const clock = document.querySelector("h1");
const dayInfo = document.querySelector(".js-date");

function getTime() {
  const time = new Date();
  const week = new Array("Sun", "Mon", "Tue", "Wen", "Thur", "Fri", "Sat");
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  dayInfo.innerText = `${year}.${month < 10 ? `0${month}` : month}.${
    date < 10 ? `0${date}` : date
  }, ${week[time.getDay()]} `;
}

getTime();
setInterval(getTime, 1000);
