import $ from 'jquery';

function displayResult(response) {
  let doctorArray = []
  if (response.data.length > 0) {
    $.each(response.data, function(i){
      doctorArray.push(response.data[i]);
    });
    for (var i = 0; i < doctorArray.length; i++) {
      let name = doctorArray[i].profile.first_name + " " + doctorArray[i].profile.last_name;
      let image = '<img src="' + doctorArray[i].profile.image_url + '" style="float:left">';
      let bio = doctorArray[i].profile.bio;
      let acceptsNewPatients = doctorArray[i].practices[0].accepts_new_patients;
      let yesNo = (acceptsNewPatients) ? "Accepting Patients" : "Not accepting patients";
      let address = name + '<br>' + doctorArray[i].practices[0].visit_address.street + '<br>' + doctorArray[i].practices[0].visit_address.city + ", " + doctorArray[i].practices[0].visit_address.state + " " + doctorArray[i].practices[0].visit_address.zip;
      let phone = doctorArray[i].practices[0].phones[0].number.match(/\d{3}(?=\d{2,3})|\d+/g).join("-");
      let specialty = 'Specialty: ' + doctorArray[i].specialties[0].name;

      $('.errors').empty();
      $('.showDoctor').append($('<div/>', { id: 'showDoctor' + i, class: 'doctor'}))
      $('#showDoctor'+i).html('<h1>' + name + '</h1>' + '<p>' + specialty + '</p>' + image + '<p>' + bio + '</p><p>' + yesNo + '</p><p>' + address + '</p><p>' + phone + '</p>' + '</p>');
    }
  } else {
    $('.doctor').remove();
    $('.errors').html('<p>No Doctors Match Your Search Criteria. Please Try Again</p>');
  }
}

export { displayResult };
