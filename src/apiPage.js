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

