import '../styles/main.scss';
import eat from './components/eat';
import fight from './components/fight';
import sleep from './components/sleep';
import play from './components/play';
import click from './components/clickEvents';
// import bar from './components/progress';

const init = () => {
  eat.eatCard();
  fight.strengthCard();
  sleep.sleepCard();
  play.playCard();
  click.clickEvents();
  // bar.progressBar();
};

init();
