function add(a,b) {
    return Math.round((+a + +b) * 1e12) / 1e12;
};

function subtract(a,b) {
    return Math.round((+a - +b) * 1e12) / 1e12;
};

function multiply(a,b) {
    return Math.round((+a * +b) * 1e12) / 1e12;
};

function divide(a,b) {
   return Math.round((+a / +b) * 100) / 100;
};

function operate(a,operator,b) {
    if (operator === "+") return add(a,b);
    if (operator === "-") return subtract(a,b);
    if (operator === "x") return multiply(a,b);
    if (operator === "÷") return divide(a,b);
};

function categorizeString(displayText) {
    if (displayText.textContent.includes("+") ||
        displayText.textContent.includes("-") ||
        displayText.textContent.includes("x") ||
        displayText.textContent.includes("÷")) {
        return displayText.textContent.split(" "); //returns array
    };
};

function isEndingWithOperator(displayText) {
    if (displayText.textContent.endsWith(" + ") ||
        displayText.textContent.endsWith(" - ") ||
        displayText.textContent.endsWith(" x ") ||
        displayText.textContent.endsWith(" ÷ ")) {
        return true
    };
};

function performOperation(displayTop, displayBot, operator) {
    const numArray = displayTop.textContent.split(" ");
    if (numArray[0] != undefined &&
        numArray[1] != undefined &&
        numArray[2] != undefined &&
        numArray[2] != "") { //an empty array is created when the string ends with the split element
        btnEqual.click(); 
    }
    if (displayTop.textContent.endsWith("=")) {
        displayTop.textContent = displayBot.textContent + operator;
    } else if (isEndingWithOperator(displayTop)) {
        displayTop.textContent = displayTop.textContent.slice(0, -3)
        displayTop.textContent += operator;  
    } else displayTop.textContent += operator;
};

function resetDisplay(displayTop, displayBot) {
    if (isEndingWithOperator(displayTop)) displayBot.textContent = "0"; //reset to 0 for removeZeroDefault
    if (displayTop.textContent.endsWith("=")) {
        displayTop.textContent = "";
        displayBot.textContent = "0";
    };
};

function removeZeroDefault(displayText) {
    if (displayText.textContent === "0") displayText.textContent = "";
};

/******** Functions Ends Here ********/

const displayTop = document.querySelector('#display-top > p');
const displayBot = document.querySelector('#display-bot > p');

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    displayTop.textContent = "";
    displayBot.textContent = "0";
});

const btnDelete = document.querySelector('#delete');
btnDelete.addEventListener('click', () => {
    if (displayBot.textContent != "0") {
        displayBot.textContent = displayBot.textContent.slice(0,-1);
        displayTop.textContent = displayTop.textContent.slice(0,-1);
    };
    if (displayBot.textContent === "") {
        displayBot.textContent = "0";
    };
});

const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => {
    performOperation(displayTop, displayBot, " ÷ ");
});

const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => {
    performOperation(displayTop, displayBot, " x ");
});

const btnSubtract = document.querySelector('#subtract');
btnSubtract.addEventListener('click', () => {
    performOperation(displayTop, displayBot, " - ");
});

const btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', () => {
    performOperation(displayTop, displayBot, " + ");
});
 
const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', () => {
    if (displayTop.textContent.includes("=") === false) {
        if (isEndingWithOperator(displayTop)) {
            displayTop.textContent = displayTop.textContent.slice(0, -3)
            displayTop.textContent += " ="; 
        } else {
            displayTop.textContent += " =";
            const numArray = categorizeString(displayTop);
            const result = operate(numArray[0], numArray[1], numArray[2]);
            displayBot.textContent = result;
        }; 
    };
});

const btnDot = document.querySelector('#dot');
btnDot.addEventListener('click', () => {
    if (displayBot.textContent.includes(".") === false) {
        displayBot.textContent += ".";
        if (displayTop.textContent === "") {
            displayTop.textContent += "0."
        } else if (isEndingWithOperator(displayTop)) {
            displayBot.textContent = "0.";
            displayTop.textContent += "0.";
        } else if (displayTop.textContent.endsWith("=")) {
            displayBot.textContent = "0.";
            displayTop.textContent = "0.";
        } else displayTop.textContent += ".";
    } else if (isEndingWithOperator(displayTop)) {
        displayBot.textContent = "0.";
        displayTop.textContent += "0.";
    } else if (displayTop.textContent.endsWith("=")) {
        displayBot.textContent = "0.";
        displayTop.textContent = "0.";
    } 
});

const btnZero = document.querySelector('#zero');
btnZero.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "0";
    removeZeroDefault(displayBot); 
    displayBot.textContent += "0"; 
});

const btnOne = document.querySelector('#one');
btnOne.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "1";
    removeZeroDefault(displayBot); 
    displayBot.textContent += "1"; 
});

const btnTwo = document.querySelector('#two');
btnTwo.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "2";
    removeZeroDefault(displayBot); 
    displayBot.textContent += "2";
});

const btnThree = document.querySelector('#three');
btnThree.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "3";
    removeZeroDefault(displayBot); 
    displayBot.textContent += "3";
});

const btnFour = document.querySelector('#four');
btnFour.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "4";
    removeZeroDefault(displayBot);
    displayBot.textContent += "4";  
});

const btnFive = document.querySelector('#five');
btnFive.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "5";
    removeZeroDefault(displayBot);
    displayBot.textContent += "5"; 
});

const btnSix = document.querySelector('#six');
btnSix.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "6";
    removeZeroDefault(displayBot); 
    displayBot.textContent += "6"; 
});

const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "7";
    removeZeroDefault(displayBot);
    displayBot.textContent += "7"; 
});

const btnEight = document.querySelector('#eight');
btnEight.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "8";
    removeZeroDefault(displayBot);
    displayBot.textContent += "8";  
 });

const btnNine = document.querySelector('#nine');
btnNine.addEventListener('click', () => {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += "9";
    removeZeroDefault(displayBot);
    displayBot.textContent += "9"; 
 });