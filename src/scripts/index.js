import getData from './getData';

const cityData = getData('delhi');
cityData.then((data) => console.log(data));
