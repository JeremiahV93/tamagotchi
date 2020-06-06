import utils from '../helpers/utils';

let sleep = 50;

const sleepCard = () => {
  let domString = '';
  domString += `
  <h1>Sleep</h1>
  <h2>Tiredness: ${sleep}</h2>
  <button id='nap'> Nap </button> <button id='sleepytime'> Sleep </button>
  `;
  utils.printToDom('#sleep', domString);
};

const subAttribute = (thing) => {
  let result = thing;
  if (result < 100) {
    result += 50;
    if (result > 100) {
      result = 100;
    }
  }
  sleep = result;
};

const addAttribute = (thing) => {
  let result = thing;
  if (result < 100) {
    result += 60;
    if (result > 100) {
      result = 100;
    }
  }
  sleep = result;
};

const napEvent = () => {
  subAttribute(sleep);
  sleepCard();
};

const sleepEvent = () => {
  addAttribute(sleep);
  sleepCard();
};


$('body').on('click', '#nap', napEvent);
$('body').on('click', '#sleepytime', sleepEvent);

export default { sleepCard };
