import utils from '../helpers/utils';

let strength = 100;

const strengthCard = () => {
  let domString = '';
  domString += `
  <h1>Fight</h1>
  <h2>Strength: ${strength}</h2>
  <button id='runAway'> Run Away (bravely) </button> <button id='fightBack'> Violence </button>
  `;
  utils.printToDom('#fight', domString);
};

const subStrength = (thing) => {
  let result = thing;
  if (result !== 0) {
    result -= 10;
    if (result < 0) {
      result = 0;
    }
  }
  strength = result;
};

const addStrength = (thing) => {
  let result = thing;
  if (result !== 100) {
    result += 1;
    if (result > 100) {
      result = 100;
    }
  }
  strength = result;
};

const violentEvent = () => {
  subStrength(strength);
  strengthCard();
};

const fleeEvent = () => {
  addStrength(strength);
  strengthCard();
};


$('body').on('click', '#runAway', fleeEvent);
$('body').on('click', '#fightBack', violentEvent);

export default { strengthCard };
