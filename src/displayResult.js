import $ from 'jquery';

function displayResult(response) {
    $.each(response.data, function(i){
      $.each(response.data[i].profile, function(key, value){
      console.log(key + " " + value);
      });
    });
    $('.showDoctorName').text(`${response.data[0].profile.first_name} ${response.data[0].profile.last_name}`);
    $('.showDoctorURL').html(`<img src="">`);
  }


export { displayResult };
