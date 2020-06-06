import utils from '../helpers/utils';
import stats from '../helpers/data/data';

const playCard = () => {
  const play = stats.getFun();

  let domString = '';
  domString += `
  <div class = 'card'>
  <h1>Play</h1>
  <h2>Fun: ${play}</h2>
  <button id='superFun'> S U P E R FUN </button> <button id='someFun'> Kinda fun </button>
  </div>
  `;
  utils.printToDom('#play', domString);
};

export default { playCard };
