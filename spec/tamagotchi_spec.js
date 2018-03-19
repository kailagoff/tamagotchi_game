import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let yochi = new Tamagotchi("Yochi");

  beforeEach(function() {
    jasmine.clock().install();
    yochi.setHunger();
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


});
