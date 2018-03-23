import $ from 'jquery';

function getDoctors(ailment, displayResult, displayError) {

$.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=45.5127%2C-122.679%2C100&user_location=45.5231%2C-122.679&skip=0&limit=10&user_key=71ffa702d4c2ebddbf54e7eba21a2d16`).then(function(response){
      let doctorList = [];
      // $.each(response, function(data.practices.first_name, value){
        displayResult(response);
      // })
      }).fail(function(error) {
        displayError(error);
      });
}
export { getDoctors };
