import '../styles/mainTile.css';

function loadMainTile() {
  const mainTile = document.createElement('div');
  mainTile.id = 'main-tile';

  const cityName = document.createElement('h2');
  cityName.id = 'city-name';

  const date = document.createElement('p');
  date.id = 'date';

  const temp = document.createElement('span');
  temp.id = 'temp';

  const weatherStatus = document.createElement('p');
  weatherStatus.id = 'weather-status';

  const tempDiv = document.createElement('div');
  tempDiv.id = 'temp-div';

  const minTemp = document.createElement('span');
  minTemp.id = 'min-temp';
  const slashSpan = document.createElement('span');
  slashSpan.innerText = ' / ';
  const maxTemp = document.createElement('span');
  maxTemp.id = 'max-temp';

  // temp for styles
  cityName.innerText = 'Coimbatore';
  date.innerText = 'Sunday, February 4, 2021';
  temp.innerText = '23\xB0c';
  weatherStatus.innerText = 'Cloudy';
  minTemp.innerText = '23\xB0c';
  maxTemp.innerText = '23\xB0c';

  tempDiv.append(minTemp, slashSpan, maxTemp);
  mainTile.append(cityName, date, temp, weatherStatus, tempDiv);

  // appending to section
  const section = document.querySelector('section');
  section.append(mainTile);
}

export default loadMainTile;
