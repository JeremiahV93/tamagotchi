import funCard from './play';
import eatCard from './eat';
import sleepCard from './sleep';
import fightCard from './fight';
import stats from '../helpers/data/data';

const candyEvent = () => {
  stats.candy();
  eatCard.eatCard();
  funCard.playCard();
};

const healthyEvent = () => {
  stats.healthy();
  eatCard.eatCard();
  sleepCard.sleepCard();
};

const violentEvent = () => {
  stats.subStrength();
  fightCard.strengthCard();
  eatCard.eatCard();
};

const fleeEvent = () => {
  stats.addStrength();
  fightCard.strengthCard();
  funCard.playCard();
};
const napEvent = () => {
  stats.nap();
  sleepCard.sleepCard();
  fightCard.strengthCard();
};

const sleepEvent = () => {
  stats.sleep();
  sleepCard.sleepCard();
  fightCard.strengthCard();
};

const someEvent = () => {
  stats.superFun();
  funCard.playCard();
};

const superEvent = () => {
  stats.someFun();
  funCard.playCard();
  sleepCard.sleepCard();
};

const clickEvents = () => {
  $('body').on('click', '#healthyMeal', healthyEvent);
  $('body').on('click', '#candy', candyEvent);
  $('body').on('click', '#runAway', fleeEvent);
  $('body').on('click', '#fightBack', violentEvent);
  $('body').on('click', '#nap', napEvent);
  $('body').on('click', '#sleepytime', sleepEvent);
  $('body').on('click', '#superFun', superEvent);
  $('body').on('click', '#someFun', someEvent);
};

export default { clickEvents };
