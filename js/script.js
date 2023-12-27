function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
   return Math.round((a/b)*100)/100
};

function operate(a,operator,b) {
    if (operator === "+") return add(a,b);
    if (operator === "-") return subtract(a,b);
    if (operator === "*") return multiply(a,b);
    if (operator === "/") return divide(a,b);
};


const btnClear = document.querySelector('#clear');

const btnDelete = document.querySelector('#delete');

const btnSeven = document.querySelector('#seven');

const btnEight = document.querySelector('#eight');

const btnSeven = document.querySelector('#nine');

const btnDivide = document.querySelector('#divide');

const btnFour = document.querySelector('#four');

const btnFive = document.querySelector('#five');

const btnSix = document.querySelector('#six');

const btnMultiply = document.querySelector('#multiply');

const btnOne = document.querySelector('#one');

const btnTwo = document.querySelector('#two');

const btnThree = document.querySelector('#three');

const btnSubtract = document.querySelector('#subtract');

const btnDot = document.querySelector('#dot');

const btnZero = document.querySelector('#zero');

const btnEqual = document.querySelector('#equal');

const btnAdd = document.querySelector('#add');