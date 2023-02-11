function signUp(event) {
  event.preventDefault();
  let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
  let input = document.querySelector("#query");
  let city = input.value;
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(weatherApi).then(showTemperature);
}
let form = document.querySelector("#forms");
form.addEventListener("submit", signUp);

function showTemperature(response) {
  console.log(response.data);
  let h2 = document.querySelector("#newYork");
  h2.innerHTML = response.data.name;
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = response.data.main.temp + "℃";
  let feelsLike = document.querySelector("#feels-like");
  feelsLike.innerHTML = response.data.main.feels_like + "℃";
  let maxTemp = document.querySelector("#maximum");
  maxTemp.innerHTML = response.data.main.temp_max + "℃";
  let minTemp = document.querySelector("#minimum");
  minTemp.innerHTML = response.data.main.temp_min + "℃";
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
}
function locationNow(position) {
  let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
  let locationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(locationApi).then(showTemperature);
}
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(locationNow);
}
let button = document.querySelector("#location");
button.addEventListener("click", currentLocation);
