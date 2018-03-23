import $ from 'jquery';

function displayError(error) {
    $('.errors').text('There has been an error with your request. Please refresh the page and try again.');
  }

export { displayError };
