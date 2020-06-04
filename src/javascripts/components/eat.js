import utils from '../helpers/utils';
// import data from '../helpers/data/data';

const eat = 100;

const eatCard = () => {
  let domString = '';
  domString += `
  <h1>Eat</h1>
  <h2>Fullness: ${eat}</h2>
  <button id='healthyMeal'> Healthy Meal </button> <button id='candy'> Candy </button>
  `;
  utils.printToDom('#eat', domString);
};

const subAttribute = (attribute) => {
  if (attribute === 100) {
    console.error('Can not do that');
  }
  // else {
  //   attribute - Number;
  // }
};

const healthyEvent = () => {
  subAttribute(eat);
};

const clickEvents = () => {
  $('.healthyMeal').click(healthyEvent);
};

export default { eatCard, eat, clickEvents };
