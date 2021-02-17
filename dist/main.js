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

eval("// Dom Elements\n\nconst cityName = document.querySelector(\".city\");\nconst weatherCondition = document.querySelector(\".weatherCondition\");\nconst temp = document.querySelector(\".temp\");\nconst feelsLike = document.querySelector(\".feelsLike\");\nconst max = document.querySelector(\".tempMax\");\nconst humidity = document.querySelector(\".humidty\")\nconst deg = document.querySelector(\".deg\");\nconst input = document.querySelector(\".searchBar\");\nconst submit = document.querySelector(\".add\");\nconst slider = document.querySelector(\".toggleF\")\nconst img = document.querySelector(\".weatherImage\")\n\nasync function getWeather(location) {\n  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=d3038b3303b62168dd448fbeb4531d41', {mode: 'cors'})\n  const data = await response.json();\n  const a = data.name;\n  const b = data.main.temp;\n  const c = data.main.feels_like;\n  const d = data.weather[0].description;\n  const e = data.main.humidity;\n  const f = data.main.temp_max;\n  buildPage(a, b, c, d, e, f);\n  getSticker(d);\n}\n\ngetWeather(\"Toronto\");\n\nasync function toggleFarenheight() {\n  let location = cityName.textContent\n  let unit = checkState();\n  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units='+ unit + '&appid=d3038b3303b62168dd448fbeb4531d41', {mode: 'cors'})\n  const data = await response.json();\n  const a = data.name;\n  const b = data.main.temp;\n  const c = data.main.feels_like;\n  const d = data.weather[0].description;\n  const e = data.main.humidity;\n  const f = data.main.temp_max;\n  getSticker(d);\n  buildPage(a, b, c, d, e, f);\n  changeDef();\n};\n\n\n\n//# sourceURL=webpack://js-weather-app/./src/index.js?");

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