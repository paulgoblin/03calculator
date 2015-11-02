'use strict';

let $disp = $('#display');
let prevDisp = 0;
let operator = 'equal';
let overwrite = true;

let init = () => {

  //EVENT LISTENERS
  $(".num").click(printNumber);
  $(".decimal").click(printDecimal);
  $(".equal").click(equalOp);
  $(".AC").click(allClear);
  $(".sign").click(toggleSign);
  $(".percent").click(makePercent)
  $(".add").click(addOp)
  $(".subtract").click(subtractOp)
  $(".multiply").click(multiplyOp)
  $(".divide").click(divideOp)
  $(".equal").click(equalOp)

}

let printNumber = (e) => {
  let digit = $(e.target).data('id')

  if (overwrite) {
    clearDisp();
    overwrite = false
  }

  addDigit(digit);
  $disp.data('id',parseFloat($disp.data('id')))
  displayData();

}

let printDecimal = () => {
  if (overwrite) {
    clearDisp();
    overwrite = false
  }
  //add decimal if there isn't one already
  if ( $disp.text().indexOf('.') === -1 ) {
    addDigit('.');
    displayData();
  }

}

let addOp = () => {
  evaluate();
  operator = 'add';
  $disp.data('id', 0);
}

let subtractOp = () => {
  evaluate();
  operator = 'subtract';
  $disp.data('id', 0);
}

let multiplyOp = () => {
  evaluate();
  operator = 'multiply';
  $disp.data('id', 1);
}

let divideOp = () => {
  evaluate();
  operator = 'divide';
  $disp.data('id', 1);
}

let equalOp = () => {
  evaluate(); 
}

let allClear = () => {
  clearDisp();
  prevDisp = 0;
  operator = 'equal'
}

let toggleSign = () => {
  $disp.data('id',$disp.data('id')*-1);
  displayData();
}

let makePercent = ()=> {
  $disp.data('id',$disp.data('id')*0.01);
  displayData();
}


// //FUNCTIONS

// adds a digit str to the display data
let addDigit = (digit) => {
  let dispStr = "" + $disp.data('id') + digit;
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
    case 'equal':
      prevDisp = currentDisp;
      break;
    case 'add':
      prevDisp += currentDisp;
      break;
    case 'subtract':
      prevDisp -=  currentDisp;
      break;
    case 'multiply':
      prevDisp *= currentDisp;
      break;
    case 'divide':
      prevDisp /= currentDisp;
      break;
  }

  $disp.text(prevDisp)

  overwrite = true;

}



$(document).ready(init)



