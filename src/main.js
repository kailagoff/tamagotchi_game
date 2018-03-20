import { Tamagotchi } from '../src/js/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getWeather } from './js/weather_api.js';
import { getGif } from './js/giphy_api.js';

$(document).ready(function() {
  getGif();
  $("#name-form").submit(function(event) {
    event.preventDefault();
    $('#giphy').hide();

    const name = $("input#name").val();
    const city = $("input#city").val();
    getWeather(city);

    let newTamagotchi = new Tamagotchi(name);

    $('#show-game').show();
    $('#name-form').hide();

    newTamagotchi.initializeTamagotchi();
    $('.name').text(newTamagotchi.name);
    $('.city').text(city);

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
      $('#playPic').show();
      console.log($('#playPic').show());
      $('.play-level').text(newTamagotchi.playLvl);
    });

    $('#sleep').click(function() {
      newTamagotchi.sleep();
      $('.rest-level').text(newTamagotchi.sleepLvl);
    });
  });
});
