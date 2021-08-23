function getDetails(data) {
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  const { temp, pressure, humidity } = data.main;
  const windSpeed = data.wind.speed;

  return {
    temp,
    minTemp,
    maxTemp,
    pressure,
    humidity,
    windSpeed,
  };
}

async function getData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e4649cf7308c77156e4448b72e54352a`;
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return getDetails(data);
}

export default getData;
