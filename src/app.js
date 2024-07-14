function weatherApi(response) {
  console.log(response.data.temperature.current);

  let temperature = response.data.temperature.current;
  let condition = response.data.condition.description;
  let humidity = response.data.temperature.humidity;
  let windSpeed = response.data.wind.speed;

  let temp = document.querySelector(".temp");
  let descriptionElement = document.querySelector(".description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  temp.innerHTML = ` ${Math.round(temperature)}`;
  descriptionElement.innerHTML = condition;
  humidityElement.innerHTML = humidity;
  windElement.innerHTML = windSpeed;
  timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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
