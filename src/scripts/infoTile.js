import '../styles/infoTile.css';

function loadInfoTile() {
  const infoTile = document.createElement('div');
  infoTile.id = 'info-tile';

  const weatherDetails = document.createElement('div');
  weatherDetails.id = 'additional-weather-details';

  const weatherDetailsList = ['pressure', 'humidity', 'windspeed'];

  for (let i = 0; i < weatherDetailsList.length; i += 1) {
    const weatherDetailDiv = document.createElement('div');
    weatherDetailDiv.classList.add('weather-detail');

    const weatherDetailValue = document.createElement('span');
    weatherDetailValue.innerText = '23';
    const weatherDetailName = document.createElement('span');
    weatherDetailName.id = weatherDetailsList[i];
    weatherDetailName.innerText = weatherDetailsList[i];

    weatherDetailDiv.append(weatherDetailValue, weatherDetailName);
    weatherDetails.append(weatherDetailDiv);
  }

  infoTile.append(weatherDetails);

  // adding to the section
  const section = document.querySelector('section');
  section.append(infoTile);
}

export default loadInfoTile;
