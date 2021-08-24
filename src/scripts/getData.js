import { alertUser, removeAlert } from './formErrorControls';

function getDetails(data) {
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  const { temp, pressure, humidity } = data.main;
  const windSpeed = data.wind.speed;

  console.log({
    temp,
    minTemp,
    maxTemp,
    pressure,
    humidity,
    windSpeed,
  });
}

async function getData(city, unit) {
  const units = unit ?? 'metric';
  let data;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e4649cf7308c77156e4448b72e54352a&units=${units}`;
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

export default getData;
