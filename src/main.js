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

    console.log(name);
    $('#show-game').show();
    $('.name').text(newTamagotchi.name);

  });

  $('#feed').click(function(event) {
    event.preventDefault();

  });

  $('#sleep').click(function(event) {
    event.preventDefault();

  });

  $('#sleep').click(function(event) {
    event.preventDefault();

  });
});
