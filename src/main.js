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


  $("#gif").click(function() {
    $.ajax({
       url: `http://api.giphy.com/v1/gifs/search?q=tamagotchi&api_key=25kcM6YQ2iAr9ur8AX7mqTPWdxVJw592`,
       type: 'GET',
       data: {
         format: 'json'
       },
       success: function(response) {
         let reply = response.data[1].images.original.url;
         console.log(reply);
         $('#giphy').html('<img src="' + reply + '">');
       },
       error: function() {
         $('#errors').text("There was an error processing your request. Please try again.")
       }
   });
 });
});
