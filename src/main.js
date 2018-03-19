import { Tamagotchi } from '../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#name-form").submit(function(event) {
    event.preventDefault();

    let name = $("input#name").val();
    let newTamagotchi = new Tamagotchi(name);
    // newTamagotchi.areYouAlive();

    $('#show-game').show();
    $('.name').text(newTamagotchi.name);
    $('.food-level').text(newTamagotchi.foodLvl);
    $('.rest-level').text(newTamagotchi.sleepLvl);
    $('.play-level').text(newTamagotchi.playLvl);


  $('#feed').click(function() {
    newTamagotchi.setHunger();
    newTamagotchi.feed();
    console.log(newTamagotchi.foodLvl);
  });

  $('#sleep').click(function(event) {
    event.preventDefault();

  });

  $('#sleep').click(function(event) {
    event.preventDefault();

  });
});
});
