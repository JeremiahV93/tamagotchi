import utils from '../helpers/utils';

let play = 50;

const playCard = () => {
  let domString = '';
  domString += `
  <h1>Play</h1>
  <h2>Fun: ${play}</h2>
  <button id='superFun'> S U P E R FUN </button> <button id='someFun'> Kinda fun </button>
  `;
  utils.printToDom('#play', domString);
};

const subStrength = (thing) => {
  let result = thing;
  if (result < 100) {
    result += 2;
    if (result > 100) {
      result = 100;
    }
  }
  play = result;
};

const addStrength = (thing) => {
  let result = thing;
  if (result < 100) {
    result += 50;
    if (result > 100) {
      result = 100;
    }
  }
  play = result;
};

const someEvent = () => {
  subStrength(play);
  playCard();
};

const superEvent = () => {
  addStrength(play);
  playCard();
};


$('body').on('click', '#superFun', superEvent);
$('body').on('click', '#someFun', someEvent);

export default { playCard };
