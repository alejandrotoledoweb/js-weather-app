// Dom Elements

const cityName = document.querySelector(".city");
const weatherCondition = document.querySelector(".weatherCondition");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelsLike");
const max = document.querySelector(".tempMax");
const humidity = document.querySelector(".humidty")
const deg = document.querySelector(".deg");
const input = document.querySelector(".searchBar");
const submit = document.querySelector(".add");
const slider = document.querySelector(".toggleF")
const img = document.querySelector(".weatherImage")

async function getWeather(location) {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=d3038b3303b62168dd448fbeb4531d41', {mode: 'cors'})
  const data = await response.json();
  const a = data.name;
  const b = data.main.temp;
  const c = data.main.feels_like;
  const d = data.weather[0].description;
  const e = data.main.humidity;
  const f = data.main.temp_max;
  buildPage(a, b, c, d, e, f);
  getSticker(d);
}

getWeather("Toronto");

async function toggleFarenheight() {
  let location = cityName.textContent
  let unit = checkState();
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units='+ unit + '&appid=d3038b3303b62168dd448fbeb4531d41', {mode: 'cors'})
  const data = await response.json();
  const a = data.name;
  const b = data.main.temp;
  const c = data.main.feels_like;
  const d = data.weather[0].description;
  const e = data.main.humidity;
  const f = data.main.temp_max;
  getSticker(d);
  buildPage(a, b, c, d, e, f);
  changeDef();
};

// Build page with API data

const buildPage = (place, t, feels, desc, humid, m) => {
  desc = desc.charAt(0).toUpperCase() + desc.slice(1);
  cityName.textContent = place;
  weatherCondition.textContent = desc;
  temp.textContent = Math.round(t);
  feelsLike.textContent = "Feels like: " + Math.round(feels) + "°";
  max.textContent = "Today's high: " + Math.round(m) + "°";
  humidity.textContent = "Humidty: " + humid + "%";
};


// Check Slider for temperature units
const checkState = () => {
  if (slider.checked === true){
    x = "imperial"
    return x;
  } else if (slider.checked === false) {
    x = "metric"
    return x;
  };
};