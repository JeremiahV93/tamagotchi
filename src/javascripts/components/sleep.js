import utils from '../helpers/utils';
import stats from '../helpers/data/data';

const sleepCard = () => {
  const sleep = stats.getEnergy();

  let domString = '';
  domString += `
  <h1>Sleep</h1>
  <h2>Energy: ${sleep}</h2>
  <button id='nap'> Nap </button> <button id='sleepytime'> Sleep </button>
  `;
  utils.printToDom('#sleep', domString);
};

export default { sleepCard };
