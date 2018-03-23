import $ from 'jquery';

export class GetDoctors {
  constructor(ailment, displayResult, displayError) {
    this.ailment = ailment;
    this.displayResult = displayResult;
    this.displayError = displayError;
  }
doIt(ailment, displayResult, displayError){
$.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=45.5127%2C-122.679%2C100&user_location=45.5231%2C-122.679&skip=0&limit=10&user_key=71ffa702d4c2ebddbf54e7eba21a2d16`).then(function(response){
        displayResult(response);
      }).fail(function(error) {
        displayError(error);
      });
}
}
