export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLvl = 100;
    this.playLvl = 100;
    this.sleepLvl = 100;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }


  feed() {
    this.foodLvl = 10;
  }

  play() {
    this.playLvl = 10;
  }

  sleep() {
    this.sleepLvl = 10;
  }
}
