import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Request } from "../src/request.js";
import { displayResult } from "../src/displayResult.js";
import { displayError } from "../src/displayError.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#getDoctor').click(function() {
      let query = $('#query').val();
      $('#query').val("");
      let request = new Request(query, displayResult, displayError);
      request.getDoctors(query, displayResult, displayError);
  });
});
