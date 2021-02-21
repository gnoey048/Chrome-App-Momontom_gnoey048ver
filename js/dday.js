const D_DAY = document.querySelector(".d-day");

function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const ddayTime = xmasDay - today;
  const days = Math.floor(ddayTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (ddayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((ddayTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ddayTime % (1000 * 60)) / 1000);
  D_DAY.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m `;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
