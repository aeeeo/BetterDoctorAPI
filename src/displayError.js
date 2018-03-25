import $ from 'jquery';

function displayError() {
  $('.errors').text('There has been an error processing your request. Please refresh the page and try again. (Error either 400, 401, etc.)');
}

export { displayError };
