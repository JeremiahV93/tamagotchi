import utils from '../helpers/utils';

const eat = 100;

const eatCard = () => {
  let domString = '';
  domString += `
  <h1>Eat</h1>
  <h2>fullness: ${eat}</h2>
  <button id='healthyMeal'> Healthy Meal </button> <button id='candy'> Candy </button>
  `;
  utils.printToDom('#eat', domString);
};

export default { eatCard };
