const COORDS = "coords";

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
  }
}
loadCoords();
