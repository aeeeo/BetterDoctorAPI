import $ from 'jquery';

function displayResult(response) {
    $('.showDoctorName').text(`${response.data[0].profile.first_name} ${response.data[0].profile.last_name}`);
    $('.showDoctorURL').html(`<img src="${response.data[0].profile.image_url}">`);
  }


export { displayResult };
