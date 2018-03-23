import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { GetDoctors } from "../src/doctorLookup.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#getAilment').click(function() {
      let ailment = $('#ailment').val();
      let getDoctors = new GetDoctors(ailment, displayResult, displayError);
      getDoctors.doIt(ailment, displayResult, displayError);
  });
});

let displayResult = function(response){
  $('.showDoctorList').text(`${response.data[0].profile.first_name}`);
}

let displayError = function(error){
  $('.errors').text('error');
}
