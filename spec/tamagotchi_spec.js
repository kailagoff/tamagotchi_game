import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let yochi = new Tamagotchi("Yochi");

  beforeEach(function() {
    jasmine.clock().install();
    yochi.setHunger();
    yochi.setExercise();
    yochi.setRest();
    yochi.reset();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name, food level, play level, and sleep level when it is created', function() {
    expect(yochi.name).toEqual('Yochi');
    expect(yochi.foodLvl).toEqual(100);
    expect(yochi.playLvl).toEqual(100);
    expect(yochi.sleepLvl).toEqual(100);
  });

  it('should have a food level of 70 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(yochi.foodLvl).toEqual(70);
  });

  it('should have a food level of 60 after 4001 milliseconds', function() {
    jasmine.clock().tick(4001);
    expect(yochi.foodLvl).toEqual(60);
  });

  it('should let user know if their Tamagotchi is alive or not', function () {
    yochi.foodLvl = 0;
    yochi.playLvl = 0;
    yochi.sleepLvl = 0;
    expect(yochi.areYouAlive()).toEqual(true);
  });

  it('should have a food level of 70 after 4 seconds once the user feeds the tamagotchi', function() {
    jasmine.clock().tick(4001);
    yochi.feed();
    expect(yochi.foodLvl).toEqual(70);
  });

  it('should have a play level of 70 after 4 seconds once the user plays with the tamagotchi', function() {
    jasmine.clock().tick(4001);
    yochi.play();
    expect(yochi.playLvl).toEqual(70);
  });

  it('should have a rest level of 70 after 4 seconds once the user rests the tamagotchi', function() {
    jasmine.clock().tick(4001);
    yochi.sleep();
    expect(yochi.sleepLvl).toEqual(70);
  });

  it('should have a sleep level of 50 after 5001 milliseconds', function() {
    jasmine.clock().tick(5001);
    expect(yochi.sleepLvl).toEqual(50);
  });

});
