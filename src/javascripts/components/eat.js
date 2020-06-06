import utils from '../helpers/utils';
// import data from '../helpers/data/data';

let eat = 100;

const eatCard = () => {
  let domString = '';
  domString += `
  <h1>Eat</h1>
  <h2>Fullness: ${eat}</h2>
  <button id='healthyMeal'> Healthy Meal </button> <button id='candy'> Candy </button>
  `;
  utils.printToDom('#eat', domString);
};

const subAttribute = (thing) => {
  let result = thing;
  if (result !== 0) {
    result -= 3;
    if (result < 0) {
      result = 0;
    }
  }
  eat = result;
};

const addAttribute = (thing) => {
  let result = thing;
  if (result < 100) {
    result += 10;
    if (result > 100) {
      result = 100;
    }
  }
  eat = result;
};

const candyEvent = () => {
  subAttribute(eat);
  eatCard();
};

const healthyEvent = () => {
  addAttribute(eat);
  eatCard();
};


$('body').on('click', '#healthyMeal', healthyEvent);
$('body').on('click', '#candy', candyEvent);

export default { eatCard, eat };
