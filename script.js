function initGameSquare() {
  var square = $('.square');

  square.click(clickSquare);

  function clickSquare() {
    var squareSelect = $(this);
    squareSelect.off('click');
    $.ajax({
      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',
      success: function(data, state) {
        var success = data['success'];
        var value = data['response'];


        console.log(value);

        if (success == true) {
          if (value <= 5) {
            // squareSelect.removeClass('yellow green');
            squareSelect.addClass('yellow');

            // squareSelect.find('h3').text('');
            squareSelect.find('h3').append(value);
          } else if (value > 5) {
            // squareSelect.removeClass('green yellow');
            squareSelect.addClass('green');

            // squareSelect.find('h3').text('');
            squareSelect.find('h3').append(value);
          }


        } else {
          console.log('error');
        }
      },

      error: function(request, state, error) {
        console.log('request', request);
        console.log('state', state);
        console.log('error', error);
      }

    });
  }

}









$(document).ready(function() {
  initGameSquare();
});
