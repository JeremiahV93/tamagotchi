import utils from '../helpers/utils';

const sleep = 50;

const sleepCard = () => {
  let domString = '';
  domString += `
  <h1>Sleep</h1>
  <h2>Tiredness: ${sleep}</h2>
  <button id='nap'> Nap (bravely) </button> <button id='Sleep'> Sleep </button>
  `;
  utils.printToDom('#sleep', domString);
};

export default { sleepCard };
