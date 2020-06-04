import utils from '../helpers/utils';

const play = 50;

const playCard = () => {
  let domString = '';
  domString += `
  <h1>Play</h1>
  <h2>Fun: ${play}</h2>
  <button id='hardWorkout'> Hard Workout (bravely) </button> <button id='lightWorkout'> Light Workout </button>
  `;
  utils.printToDom('#play', domString);
};

export default { playCard };
