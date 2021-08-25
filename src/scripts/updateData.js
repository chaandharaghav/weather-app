function findDate() {
  const today = new Date();
  return today.toUTCString().slice(0, -12);
}

function updateData(data) {
  const cityName = document.querySelector('#city-name');
  const date = document.querySelector('#date');
  const weatherStatus = document.querySelector('#weather-status');
  const temp = document.querySelector('#temp');
  const minTemp = document.querySelector('#min-temp');
  const maxTemp = document.querySelector('#max-temp');
  const pressure = document.querySelector('#pressure');
  const humidity = document.querySelector('#humidity');
  const windSpeed = document.querySelector('#wind-speed');

  temp.innerText = `${data.temp}\xB0c`;
  minTemp.innerText = `${data.minTemp}\xB0c`;
  maxTemp.innerText = `${data.maxTemp}\xB0c`;
  pressure.innerText = `${data.pressure} hPa`;
  humidity.innerText = `${data.humidity}%`;
  windSpeed.innerText = `${data.windSpeed}m/s`;
  cityName.innerText = data.cityName;
  weatherStatus.innerText = data.weatherStatus;

  date.innerText = findDate();
}

export default updateData;
