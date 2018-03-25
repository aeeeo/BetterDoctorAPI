import $ from 'jquery';
import { displayResult } from "../src/displayResult.js";
import { displayError } from "../src/displayError.js";

export class Request {
  constructor(query, displayResult, displayError) {
    this.query = query;
    this.displayResult = displayResult;
    this.displayError = displayError;
  }

  getDoctors(query){
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.5231%2C-122.679%2C100&user_location=45.5231%2C-122.679&sort=best-match-desc&skip=0&limit=10&user_key=` + process.env.exports.apiKey).then(function(response){
      displayResult(response);
    }).fail(function(error) {
      displayError(error);
    });
  }
}
