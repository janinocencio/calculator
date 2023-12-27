function add(a,b) {
    return +a + +b;
};

function subtract(a,b) {
    return +a - +b;
};

function multiply(a,b) {
    return +a * +b;
};

function divide(a,b) {
   return Math.round((+a/+b)*100)/100
};

function operate(a,operator,b) {
    if (operator === "+") return add(a,b);
    if (operator === "-") return subtract(a,b);
    if (operator === "x") return multiply(a,b);
    if (operator === "÷") return divide(a,b);
};

function categorizeString(displayText) {
    if (displayText.includes("+") === true ||
        displayText.includes("-") === true ||
        displayText.includes("x") === true ||
        displayText.includes("÷") === true) {
        return displayText.split(" "); //returns array
    }
}

const displayTop = document.querySelector('#display-top > p');

const displayBot = document.querySelector('#display-bot > p');

const btnClear = document.querySelector('#clear');

const btnDelete = document.querySelector('#delete');

const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener('click', () => {
   displayTop.textContent += "7"; 
});

const btnEight = document.querySelector('#eight');
btnEight.addEventListener('click', () => {
    displayTop.textContent += "8"; 
 });

const btnNine = document.querySelector('#nine');
btnNine.addEventListener('click', () => {
    displayTop.textContent += "9"; 
 });

const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => {
    displayTop.textContent += " ÷ "; 
 });

const btnFour = document.querySelector('#four');
btnFour.addEventListener('click', () => {
    displayTop.textContent += "4"; 
 });

const btnFive = document.querySelector('#five');
btnFive.addEventListener('click', () => {
    displayTop.textContent += "5"; 
 });

const btnSix = document.querySelector('#six');
btnSix.addEventListener('click', () => {
    displayTop.textContent += "6"; 
 });

const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => {
    displayTop.textContent += " x "; 
 });

const btnOne = document.querySelector('#one');
btnOne.addEventListener('click', () => {
    displayTop.textContent += "1"; 
 });

const btnTwo = document.querySelector('#two');
btnTwo.addEventListener('click', () => {
    displayTop.textContent += "2"; 
 });

const btnThree = document.querySelector('#three');
btnThree.addEventListener('click', () => {
    displayTop.textContent += "3"; 
 });

const btnSubtract = document.querySelector('#subtract');
btnSubtract.addEventListener('click', () => {
    displayTop.textContent += " - "; 
 });

const btnDot = document.querySelector('#dot');
btnDot.addEventListener('click', () => {
    if (displayTop.textContent.includes(".") === false) {
        if (displayTop.textContent === "") {
            displayTop.textContent += "0.";    
        } else displayTop.textContent += ".";
    };     
 });

const btnZero = document.querySelector('#zero');
btnZero.addEventListener('click', () => {
    displayTop.textContent += "0"; 
 });

const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', () => {
    displayTop.textContent += " =";
    let numArray = categorizeString(displayTop.textContent);
    let result = operate(numArray[0], numArray[1], numArray[2]);
    displayBot.textContent = result;
 });

const btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', () => {
    displayTop.textContent += " + "; 
 });