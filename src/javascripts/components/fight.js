import utils from '../helpers/utils';

const strength = 100;

const strengthCard = () => {
  let domString = '';
  domString += `
  <h1>Fight</h1>
  <h2>Strength: ${strength}</h2>
  <button id='runAway'> Run Away (bravely) </button> <button id='fight'> Violence </button>
  `;
  utils.printToDom('#fight', domString);
};

export default { strengthCard };
