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

    $('#show-game').show();
    $('#name-form').hide();

    newTamagotchi.initializeTamagotchi();
    $('.name').text(newTamagotchi.name);

    setInterval(function() {
    newTamagotchi.refreshGame();
    $('.food-level').text(newTamagotchi.foodLvl);
    $('.rest-level').text(newTamagotchi.sleepLvl);
    $('.play-level').text(newTamagotchi.playLvl);
    }, 1000);


    $('#feed').click(function() {
      newTamagotchi.feed();
      $('.food-level').text(newTamagotchi.foodLvl);
    });

    $('#play').click(function() {
      newTamagotchi.play();
      $('.play-level').text(newTamagotchi.playLvl);
    });

    $('#sleep').click(function() {
      newTamagotchi.sleep();
      $('.rest-level').text(newTamagotchi.sleepLvl);
    });
  });
});
