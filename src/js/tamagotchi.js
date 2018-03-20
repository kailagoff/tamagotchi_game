import $ from 'jquery';

export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLvl = 15;
    this.playLvl = 15;
    this.sleepLvl = 15;
  }

  setFood() {
    setInterval(() => {
        this.foodLvl--;
    }, 1000);
  }

  setPlay() {
    setInterval(() => {
        this.playLvl--;
    }, 3000);
  }

  setSleep() {
    setInterval(() => {
        this.sleepLvl--;
    }, 5000);
  }

  areYouDead() {
    if (this.foodLvl < 0 || this.sleepLvl < 0 || this.playLvl < 0) {
      return true;
    } else {
      return false;
    }
  }

  //new display results
  displayResults() {
    if (!this.areYouDead()) {
      $(".food-level").text(this.foodLvl);
      $(".play-level").text(this.playLvl);
      $(".sleep-level").text(this.sleepLvl);
    } else {
      $('.fail').show();
      $("#death").text();
    }
  }

  refreshView() {
    setInterval(() => {
      this.displayResults();
    }, 1000);
  }

  feed() {
    this.foodLvl += 2;
  }

  play() {
    this.playLvl += 2;
  }

  sleep() {
    this.sleepLvl += 2;
  }

  reset() {
    this.foodLvl = 10;
    this.playLvl = 10;
    this.sleepLvl = 10;

  }
}
