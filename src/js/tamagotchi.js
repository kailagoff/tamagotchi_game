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
      if (this.playLvl >= 1 || this.sleepLvl >= 1 || this.foodLvl >= 1) {
        this.foodLvl -= 10;
        this.playLvl -= 10;
        this.sleepLvl -= 10;
      }
    }, 10000);
  }

  // pause() {
  //   let foodLvl = this.foodLvl;
  //   var intId = initializeTamagotchi(foodLvl, 1000);
  // }
  //
  // areYouDead() {
  //   if (this.foodLvl < 0 || this.sleepLvl < 0 || this.playLvl < 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  //
  // //new display results
  // displayResults() {
  //   if (!this.areYouDead()) {
  //     $()
  //   }
  // }
  // my attempt at refreshGame
  refreshGame() {
    let count;
    // let newTamagotchi = new Tamagotchi;
    count = setInterval(() => {
      if (this.sleepLvl == 0) {
        $('.fail').show();
        $('#death').text();
        clearInterval(count);
      }
    });
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
