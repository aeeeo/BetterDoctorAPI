import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { getDoctor } from "../src/doctorLookup.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#getAilment').click(function() {
      let ailment = $('#ailment').val();
      $('#location').val("");
      getDoctor(ailment, displayResult, displayError);
  });
});

let displayResult = function(response, ){
  $('.showDoctor').text(``);
}

let displayError = function(error){
  $('.errors').text('');
}
