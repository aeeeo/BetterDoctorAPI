import $ from 'jquery';

function displayResult(response) {
  let doctorArray = []
  console.log(response.data.length);
  if (response.data.length > 0) {
    $.each(response.data, function(i){
      doctorArray.push(response.data[i].profile);
    });
    for (var i = 0; i < doctorArray.length; i++) {
      $('.errors').empty();
      $('.showDoctor').append($('<div/>', { id: 'showDoctor' + i, class: 'doctor'}))
      $('#showDoctor'+i).html('<h1>' + doctorArray[i].first_name + " " + doctorArray[i].last_name + '</h1>' + '<img src="' + doctorArray[i].image_url + '">');
    }
  } else {
    $('.doctor').remove();
    $('.errors').html('<p>No Doctors Match Your Search Criteria, please try again</p>');
  }
}

export { displayResult };
