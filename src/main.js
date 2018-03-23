import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Request } from "../src/request.js";
import { displayResult } from "../src/displayResult.js";
import { displayError } from "../src/displayError.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#getDoctor').click(function() {
      //gets ailment, clears field
      let query = $('#query').val();
      $('#query').val("");
      // puts ailment in request object
      let request = new Request(query, displayResult, displayError);
      // runs display methods
      request.getDoctors(query, displayResult, displayError);
  });

});
