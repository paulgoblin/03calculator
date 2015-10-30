(function app() {
  'use strict';

  let documentReady = () => {
    
    let $disp = $('#display');

    //listen for number click
    $(".num").on('click', (event) => {

      let $e = $(event.target);
      $disp.text($e.data('id'));

    })

  }

  $(documentReady)

})();



