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
      this.playLvl -= 5;
      this.sleepLvl -= 7;
    }, 1000);
  }

  // pause() {
  //   let foodLvl = this.foodLvl;
  //   var intId = initializeTamagotchi(foodLvl, 1000);
  // }
  //
  areYouDead() {
    if (this.foodLvl < 0 || this.sleepLvl < 0 || this.playLvl < 0) {
      return true;
    } else {
      return false;
    }
  }

  // refreshGame() {
  //   let count;
  //   if (!this.areYouDead()) {
  //     count = setInterval(function() {
  //     $('.food-level').text(this.foodLvl);
  //     $('.rest-level').text(this.sleepLvl);
  //     $('.play-level').text(this.playLvl);
  //     }, 1000);
  //   } else {
  //     $('.fail').show();
  //     $('#death').text();
  //     clearInterval(count);
  //   }
  // }

  // my attempt at refreshGame
  refreshGame() {
    let count;
    let newTamagotchi = new Tamagotchi;
      count = setInterval(() => {
      if (this.foodLvl != 0) {
        return newTamagotchi.areYouDead();
    } else {
      $('.fail').show();
      $('#death').text();
      clearInterval(count);
    }
  })
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
