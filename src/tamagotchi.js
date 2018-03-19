import $ from 'jquery';

export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLvl = 100;
    this.playLvl = 100;
    this.sleepLvl = 100;
  }

  initializeTamagotchi() {
    setInterval(() => {
      this.foodLvl -= 10;
      this.playLvl -= 1;
      this.sleepLvl -= 1;
    }, 1000);
  }

  // pause() {
  //   let foodLvl = this.foodLvl;
  //   var intId = initializeTamagotchi(foodLvl, 1000);
  // }
  //
  areYouDead() {
    if (this.foodLvl > 0) {
      return false;
    } else {
      return true;
    }
  }

  refreshGame() {
    if (!this.areYouDead()) {
      setInterval(function() {
      $('.food-level').text(this.foodLvl);
      $('.rest-level').text(this.sleepLvl);
      $('.play-level').text(this.playLvl);
      }, 1000);
    } else {
      $('.fail').show();
      $('#food-death').text(this.foodLvl);
    }
  }


  feed() {
    this.foodLvl += 10;
  }

  play() {
    this.playLvl += 10;
  }

  sleep() {
    this.sleepLvl += 10;
  }


  reset() {
    this.foodLvl = 100;
    this.playLvl = 100;
    this.sleepLvl = 100;
  }
}
