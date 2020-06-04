import utils from '../helpers/utils';

const play = 100;

const playCard = () => {
  let domString = '';
  domString += `
  <h1>Play</h1>
  <h2>Fun: ${play}</h2>
  <button id='runAway'> Run Away (bravely) </button> <button id='fight'> Violence </button>
  `;
  utils.printToDom('#play', domString);
};

export default { playCard };
