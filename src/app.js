function weatherApi(response) {
  console.log(response.data.temperature.current);
  let temperature = response.data.temperature.current;
  let temp = document.querySelector(".temp");
  temp.innerHTML = ` ${Math.round(temperature)}`;
}

function cityWeather(city) {
  let apiKey = "8e33cb0do4fat4cdc645a4c9297b9a5b";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(weatherApi);
  console.log(apiUrl);
}

function cityName(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let h1City = document.querySelector("h1");
  h1City.textContent = city.value;
  cityWeather(city.value);
}

let formInput = document.querySelector("#input");
formInput.addEventListener("submit", cityName);
