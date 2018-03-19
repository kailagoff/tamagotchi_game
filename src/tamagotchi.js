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
  // refreshGame() {
  //   if (!this.areYouAlive()) {
  //
  //   } else {
  //     $('#food-death').html(this.foodLvl);
  //   }
  // }

  areYouAlive() {
  if (this.foodLvl > 0) {
    return false;
  } else {
    alert ("You let him die. You monster.");
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
