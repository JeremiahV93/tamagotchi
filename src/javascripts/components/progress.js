import stats from '../helpers/data/data';
import utils from '../helpers/utils';

const overall = (stats.getFullness + stats.play + stats.strength + stats.sleep) / 4;

const progressBar = () => {
  const domString = `
  <progress value='${overall}' max='100'>${overall}</progress>
  `;
  console.error(overall);
  utils.printToDom('#progress', domString);
};

export default { progressBar };
