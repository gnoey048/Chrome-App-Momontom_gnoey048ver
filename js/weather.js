const API_KEY = "5577280eefb29c3ade8a6729db0a9be0";
const COORDS = "coords";
const weather = document.querySelector(".weather-box");

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric `
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const feelLike = json.main.feels_like;
      const place = json.name;
      weather.innerHTML = `온도: ${temperature}°C, 체감온도: ${feelLike}°C, ${place}`;
    });
}

function saveCoords(text) {
  localStorage.setItem(COORDS, JSON.stringify(text));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsobj = {
    latitude,
    longitude,
  };
  saveCoords(coordsobj);
  getWeather(latitude, longitude);
}

function handleGeoFail() {
  console.log("Can't access Geo Location.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadCoords() {
  const currentCoords = localStorage.getItem(COORDS);
  if (currentCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}
loadCoords();
