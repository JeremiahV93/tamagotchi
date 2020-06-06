import utils from '../helpers/utils';
import stats from '../helpers/data/data';

const strengthCard = () => {
  const strength = stats.getStrenght();

  let domString = '';
  domString += `
  <h1>Fight</h1>
  <h2>Strength: ${strength}</h2>
  <button id='runAway'> Run Away (bravely) </button> <button id='fightBack'> Violence </button>
  `;
  utils.printToDom('#fight', domString);
};


export default { strengthCard };
