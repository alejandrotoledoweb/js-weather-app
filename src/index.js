// Dom Create Elements

const cityName = document.querySelector('.city');
const weatherCondition = document.querySelector('.weatherCondition');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feelsLike');
const max = document.querySelector('.tempMax');
const humidity = document.querySelector('.humidty');
const deg = document.querySelector('.deg');
const input = document.querySelector('.searchBar');
const submit = document.querySelector('.add');
const slider = document.querySelector('.toggleF');
const img = document.querySelector('.weatherImage');

// Build page with API data

const buildPage = (place, t, feels, desc, humid, m) => {
  desc = desc.charAt(0).toUpperCase() + desc.slice(1);
  cityName.textContent = place;
  weatherCondition.textContent = desc;
  temp.textContent = Math.round(t);
  feelsLike.textContent = `Feels like: ${Math.round(feels)}°`;
  max.textContent = `Today's high: ${Math.round(m)}°`;
  humidity.textContent = `Humidty: ${humid}%`;
};


// Add image gifs
const getSticker = async (search) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/stickers/translate?api_key=qitI9CMnXX08n6UFhJJoChiA9ZKbAl53&s=${search}`, { mode: 'cors' });
    const sticker = await response.json();
    img.src = sticker.data.images.fixed_height.url;
  } catch (error) {
    console.log(error);
  }
};

const getWeather = async (location) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=152cc205914892c50d14a4f1206b5222`, { mode: 'cors' });
  const data = await response.json();
  const { name } = data;
  const temperature = data.main.temp;
  const image = data.main.feels_like;
  const desc = data.weather[0].description;
  const hum = data.main.humidity;
  const maxTemp = data.main.temp_max;
  buildPage(name, temperature, image, desc, hum, maxTemp);
  getSticker(image);
};

// Checkbox for temperature units
const checkState = (x) => {
  if (slider.checked === true) {
    x = 'imperial';
  }
  if (slider.checked === false) {
    x = 'metric';
  }
  return x;
};

// Toggle to change Degree units
const changeDef = async () => {
  if (slider.checked === true) {
    deg.textContent = '°F';
  } else if (slider.checked === false) {
    deg.textContent = '°C';
  }
};

getWeather('Quito');

const toggleFarenheight = async () => {
  const location = cityName.textContent;
  const unit = checkState();
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=d3038b3303b62168dd448fbeb4531d41`, { mode: 'cors' });
  const data = await response.json();
  const { name } = data;
  const temperature = data.main.temp;
  const image = data.main.feels_like;
  const desc = data.weather[0].description;
  const hum = data.main.humidity;
  const maxTemp = data.main.temp_max;
  getSticker(image);
  buildPage(name, temperature, image, desc, hum, maxTemp);
  changeDef();
};

// Event Listeners

submit.addEventListener('click', () => {
  getWeather(input.value);
});

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit.click();
  }
});

input.addEventListener('click', () => {
  input.value = '';
});

slider.addEventListener('click', () => {
  toggleFarenheight();
});