import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { getDoctors } from "../src/doctorLookup.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#getAilment').click(function() {
      let ailment = $('#ailment').val();
      getDoctors(ailment, displayResult, displayError);
  });
});

let displayResult = function(response){
  $('.showDoctorList').text(`${response.data[0].practices[0].location_slug}`);
}

let displayError = function(error){
  $('.errors').text('error');
}
