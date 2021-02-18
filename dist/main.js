/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Dom Create Elements\n\nconst cityName = document.querySelector('.city');\nconst weatherCondition = document.querySelector('.weatherCondition');\nconst temp = document.querySelector('.temp');\nconst feelsLike = document.querySelector('.feelsLike');\nconst max = document.querySelector('.tempMax');\nconst humidity = document.querySelector('.humidty');\nconst deg = document.querySelector('.deg');\nconst input = document.querySelector('.searchBar');\nconst submit = document.querySelector('.add');\nconst slider = document.querySelector('.toggleF');\nconst img = document.querySelector('.weatherImage');\n\n// Build page with API data\n\nconst buildPage = (place, t, feels, desc, humid, m) => {\n  desc = desc.charAt(0).toUpperCase() + desc.slice(1);\n  cityName.textContent = place;\n  weatherCondition.textContent = desc;\n  temp.textContent = Math.round(t);\n  feelsLike.textContent = `Feels like: ${Math.round(feels)}°`;\n  max.textContent = `Today's high: ${Math.round(m)}°`;\n  humidity.textContent = `Humidty: ${humid}%`;\n};\n\n\n// Add image gifs\nconst getSticker = async (search) => {\n  try {\n    const response = await fetch(`https://api.giphy.com/v1/stickers/translate?api_key=qitI9CMnXX08n6UFhJJoChiA9ZKbAl53&s=${search}`, { mode: 'cors' });\n    const sticker = await response.json();\n    img.src = sticker.data.images.fixed_height.url;\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nconst getWeather = async (location) => {\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d3038b3303b62168dd448fbeb4531d41`, { mode: 'cors' });\n  const data = await response.json();\n  const { name } = data;\n  const temperature = data.main.temp;\n  const image = data.main.feels_like;\n  const desc = data.weather[0].description;\n  const hum = data.main.humidity;\n  const maxTemp = data.main.temp_max;\n  buildPage(name, temperature, image, desc, hum, maxTemp);\n  getSticker(image);\n}\n\n// Checkbox for temperature units\nconst checkState = (x) => {\n  if (slider.checked === true) {\n    x = 'imperial';\n  }\n  if (slider.checked === false) {\n    x = 'metric';\n  }\n  return x;\n};\n\n// Toggle to change Degree units\nconst changeDef = async () => {\n  if (slider.checked === true) {\n    deg.textContent = '°F';\n  } else if (slider.checked === false) {\n    deg.textContent = '°C';\n  }\n};\n\ngetWeather('Quito');\n\nconst toggleFarenheight = async () => {\n  const location = cityName.textContent;\n  const unit = checkState();\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=d3038b3303b62168dd448fbeb4531d41`, { mode: 'cors' });\n  const data = await response.json();\n  const { name } = data;\n  const temperature = data.main.temp;\n  const image = data.main.feels_like;\n  const desc = data.weather[0].description;\n  const hum = data.main.humidity;\n  const maxTemp = data.main.temp_max;\n  getSticker(image);\n  buildPage(name, temperature, image, desc, hum, maxTemp);\n  changeDef();\n}\n\n// Event Listeners\n\nsubmit.addEventListener('click', () => {\n  getWeather(input.value);\n});\n\ninput.addEventListener('keyup', (e) => {\n  if (e.keyCode === 13) {\n    e.preventDefault();\n    submit.click();\n  }\n});\n\ninput.addEventListener('click', () => {\n  input.value = '';\n});\n\nslider.addEventListener('click', () => {\n  toggleFarenheight();\n});\n\n//# sourceURL=webpack://js-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;