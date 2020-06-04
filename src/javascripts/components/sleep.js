import utils from '../helpers/utils';

const sleep = 100;

const sleepCard = () => {
  let domString = '';
  domString += `
  <h1>Sleep</h1>
  <h2>tiredness: ${sleep}</h2>
  <button id='runAway'> Run Away (bravely) </button> <button id='fight'> Violence </button>
  `;
  utils.printToDom('#sleep', domString);
};

export default { sleepCard };
