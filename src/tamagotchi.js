export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLvl = 100;
    this.playLvl = 100;
    this.sleepLvl = 100;
  }

  setHunger() {
    setInterval(() => {
      this.foodLvl -= 10;
    }, 1000);
  }

  areYouAlive() {
    if ((this.foodLvl > 0) || (this.playLvl > 0) || (this.sleepLvl > 0)) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLvl += 10;
  }

  play() {
    this.playLvl = 10;
  }

  sleep() {
    this.sleepLvl = 10;
  }

  reset() {
    this.foodLvl = 100;
    this.playLvl = 100;
    this.sleepLvl = 100;
  }
}
