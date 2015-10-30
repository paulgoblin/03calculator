(function app() {
  'use strict';

  let documentReady = () => {
    
    let $disp = $('#display');
    let operatorDict = {add:1, subt:2, mult:3, divi:4};
    //operation is comprized of an [operator, operand]
    let oldDisp = 0;
    let operator = 0;
    let overwrite = false;

    //EVENT LISTENERS

    //listen for number
    $(".num").on('click', (event) => {

      if (overwrite) {
        clearDisp();
        overwrite = false
      }
      //add digits
      addDigit($(event.target).data('id'));
      //parse string to float
      $disp.data('id',parseFloat($disp.data('id')))
      //print to display
      displayData();


    })

    //listen for decimal
    $(".decimal").on('click', (event) => {

      if (overwrite) {
        clearDisp();
        overwrite = false
      }

      //add decimal if there isn't one already
      if ( $disp.text().indexOf('.') === -1 ) {
        addDigit($(event.target).data('id'));
        displayData();
      }

    })

    //listen for equals
    $(".equals").on('click', (event) => {

      // evaluate 
      let answer = evaluate();
      $disp.text(answer);
      oldDisp = answer;
      overwrite = true;


    }) 

    //listen for addition
    $(".add").on('click', (event) => {

      let answer = evaluate();
      oldDisp=$disp.text()
      $disp.text(answer);
      oldDisp = $disp.data('id');
      operator = 1;
      overwrite = true;
    })

    //listen for subtraction
    $(".minus").on('click', (event) => {

      let answer = evaluate();
      oldDisp=$disp.text()
      $disp.text(answer);
      oldDisp = $disp.data('id');
      operator = 2;
      overwrite = true;
    })

    //listen for multiplication
    $(".multiply").on('click', (event) => {

      let answer = evaluate();
      oldDisp=$disp.text()
      $disp.text(answer);
      oldDisp = $disp.data('id');
      operator = 3;
      overwrite = true;
    })

    //listen for division
    $(".add").on('click', (event) => {

      let answer = evaluate();
      oldDisp=$disp.text()
      $disp.text(answer);
      oldDisp = $disp.data('id');
      operator = 4;
      overwrite = true;
    })



    //listen for clear
    $(".AC").on('click', (event) => {
      clearDisp();
      oldDisp = 0;
    })

    //listen for negative
    $(".neg").on('click', (event) => {
      $disp.data('id',$disp.data('id')*-1);
      displayData();
    })

    //listen for percent
    $(".percent").on('click', (event) => {
      $disp.data('id',$disp.data('id')*0.01);
      displayData();
    })


    //FUNCTIONS

    // adds a digit str to the display
    let addDigit = (digit) => {
      let dispStr = [$disp.data('id'), digit].join('');
      $disp.data('id',dispStr);
    } 

    // put disp data into inner text
    let displayData = () => {
      $disp.text($disp.data('id'))
    }

    //clear display
    let clearDisp = () => {
      $disp.data('id','0')
      $disp.text('0')
    }

    //evaluate
    let evaluate = () => {
      let currentDisp = $disp.data('id');

      switch ( operator ) {
        case 0:
          console.log('case 0!')
          break;
        case 1:
          return currentDisp + oldDisp;
          break;
        case 2:
          return oldDisp - currentDisp;
          break;
        case 3:
          return oldDisp * currentDisp;
          break;
        case 4:
          return oldDisp / currentDisp;
          break;

      }



      console.log(currentDisp)
    }

  }

  $(documentReady)

})();



