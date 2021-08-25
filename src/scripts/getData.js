import { alertUser, removeAlert } from './formErrorControls';
import updateData from './updateData';

function getDetails(data) {
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  const { temp, pressure, humidity } = data.main;
  const windSpeed = data.wind.speed;
  const cityName = data.name;
  const weatherStatus = data.weather[0].main;

  updateData({
    temp,
    minTemp,
    maxTemp,
    pressure,
    humidity,
    windSpeed,
    cityName,
    weatherStatus,
  });
}

async function getData(city, unit) {
  const cityName = city ?? 'pollachi';
  const units = unit ?? 'metric';
  let data;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=e4649cf7308c77156e4448b72e54352a&units=${units}`;
    const response = await fetch(url, { mode: 'cors' });
    data = await response.json();

    if (data.cod === 200) {
      getDetails(data);
      removeAlert();
    } else {
      throw new Error('No matching location found');
    }
  } catch (err) {
    alertUser(err);
  }
}

function updateUnit() {
  let unit = null;
  let cityName = null;
  const city = document.querySelector('#city-name');
  cityName = city.innerText;

  const unitSwitcher = document.querySelector('#unit-switch-btn');

  if (unitSwitcher.innerText === 'C') {
    unit = 'metric';
  } else {
    unit = 'imperial';
  }

  getData(cityName, unit);
}

export { getData, updateUnit };
