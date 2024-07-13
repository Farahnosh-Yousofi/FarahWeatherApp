function cityName(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let h1City = document.querySelector("h1");
  h1City.textContent = city.value;
}

let formInput = document.querySelector("#input");
formInput.addEventListener("submit", cityName);
