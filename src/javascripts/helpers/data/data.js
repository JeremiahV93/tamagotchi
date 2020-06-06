import random from '../random';

let fullness = random.random50();
let fun = random.random50();
let strength = random.random50();
let energy = random.random50();

const getFullness = () => fullness;
const getFun = () => fun;
const getStrenght = () => strength;
const getEnergy = () => energy;

const healthy = () => {
  if (fullness < 100) {
    fullness += random.random20();
    energy -= Math.floor(random.random20() / 2);
    if (fullness > 100) {
      fullness = 100;
    }
    if (energy < 0) {
      energy = 0;
    }
  }
};

const candy = () => {
  if (fullness !== 0) {
    fullness -= Math.floor(random.random20() / 2);
    fun += Math.floor(random.random20() / 2);
    if (fullness < 0) {
      fullness = 0;
    }
    if (fun > 100) {
      fun = 100;
    }
  }
};


const nap = () => {
  if (energy < 100) {
    energy += random.random20();
    strength -= Math.floor(random.random20() / 2);
    if (energy > 100) {
      energy = 100;
    }
    if (strength < 0) {
      strength = 0;
    }
  }
};

const sleep = () => {
  if (energy < 100) {
    energy += random.random20();
    strength -= Math.floor(random.random20() / 4);
    if (energy > 100) {
      energy = 100;
    }
    if (strength > 0) {
      strength = 0;
    }
  }
};

const subStrength = () => {
  if (strength !== 0) {
    strength -= random.random20();
    fullness -= random.random20();
    if (strength < 0) {
      strength = 0;
    }
    if (fullness < 0) {
      fullness = 0;
    }
  }
};

const addStrength = () => {
  if (strength !== 100) {
    strength += Math.floor(random.random20() / 3);
    fun -= Math.floor(random.random20() / 3);
    if (strength > 100) {
      strength = 100;
    }
    if (fun < 0) {
      fun = 0;
    }
  }
};

const superFun = () => {
  if (fun < 100) {
    fun += random.random20();
    energy -= Math.floor(random.random20() / 4);
    fullness -= Math.floor(random.random20() / 3);
    if (fun > 100) {
      fun = 100;
    }
    if (energy < 0) {
      energy = 0;
    }
    if (fullness < 0) {
      fullness = 0;
    }
  }
};

const someFun = () => {
  if (fun < 100) {
    fun += random.random20();
    energy -= Math.floor(random.random20() / 4);
    if (fun > 100) {
      fun = 100;
    }
    if (energy < 0) {
      energy = 0;
    }
  }
};


export default {
  getFullness,
  getFun,
  getStrenght,
  getEnergy,
  energy,
  healthy,
  candy,
  nap,
  sleep,
  subStrength,
  addStrength,
  superFun,
  someFun,
};
