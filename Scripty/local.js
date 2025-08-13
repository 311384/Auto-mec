let h2 = document.querySelector("h2");

function success(pos) {
  console.log(pos.coords.latitude, pos.coords.longitude);
  h2.textContent = `latitude:${pos.coords.latitude}, longitude:${pos.coords.longitude}`;
  var map = L.map("map").setView(
    [pos.coords.latitude, pos.coords.longitude],
    13
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([pos.coords.latitude, pos.coords.longitude])
    .addTo(map)
    .bindPopup("A pretty CSS popup.<br> Easily customizable.")
    .openPopup();
}

function error() {
  console.log(error);
}

let watchId = navigator.geolocation.watchPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 10000,
});

//navigator.geolocation.clearWatch(watchId);
