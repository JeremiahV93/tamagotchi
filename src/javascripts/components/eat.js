import utils from '../helpers/utils';
import stats from '../helpers/data/data';

const eatCard = () => {
  const fullnessStat = stats.getFullness();

  let domString = '';
  domString += `
  <h1>Eat</h1>
  <h2>Fullness: ${fullnessStat}</h2>
  <button id='healthyMeal'> Healthy Meal </button> <button id='candy'> Candy </button>
  `;
  utils.printToDom('#eat', domString);
};

export default { eatCard };
