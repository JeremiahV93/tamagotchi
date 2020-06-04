import '../styles/main.scss';
import eat from './components/eat';
import fight from './components/fight';
import sleep from './components/sleep';
import play from './components/play';

const init = () => {
  eat.eatCard();
  fight.strengthCard();
  sleep.sleepCard();
  play.playCard();
};

init();
