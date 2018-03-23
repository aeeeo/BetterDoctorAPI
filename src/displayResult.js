import $ from 'jquery';

function displayResult(response) {
  let doctorArray = []
    $.each(response.data, function(i){
      doctorArray.push(response.data[i].profile);
    });
    console.log(doctorArray[0].slug);

    for (var i = 0; i < doctorArray.length; i++) {
      $('.showDoctor').append($('<div/>', { id: 'showDoctor' + i }))
      $('#showDoctor'+i).html('<img src="' + doctorArray[i].image_url + '">');
      console.log(doctorArray[i].image_url)
    }
    $('.showDoctorName').text(`${response.data[0].profile.first_name} ${response.data[0].profile.last_name}`);
    $('.showDoctorURL').html(`<img src="">`);
  }


export { displayResult };
