/******** General Functions Starts Here ********/

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

/******** General Functions Ends Here ********/


/******** Button Functions Starts Here ********/

function handleClear() {
    displayTop.textContent = "";
    displayBot.textContent = "0";
};

function handleDelete() {
    if (displayBot.textContent != "0") {
        displayBot.textContent = displayBot.textContent.slice(0,-1);
        displayTop.textContent = displayTop.textContent.slice(0,-1);
    };
    if (displayBot.textContent === "") {
        displayBot.textContent = "0";
    };
};

function handleEqual() {
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
};

function handleDot() {
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
    }; 
};

function handleNumber(displayTop, displayBot, num) {
    resetDisplay(displayTop, displayBot);
    displayTop.textContent += num;
    removeZeroDefault(displayBot); 
    displayBot.textContent += num; 
};

/******** Button Functions Ends Here ********/


/******** Button Click Events Starts Here ********/

const displayTop = document.querySelector('#display-top > p');
const displayBot = document.querySelector('#display-bot > p');

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', handleClear);

const btnDelete = document.querySelector('#delete');
btnDelete.addEventListener('click', handleDelete);

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
btnEqual.addEventListener('click', handleEqual);

const btnDot = document.querySelector('#dot');
btnDot.addEventListener('click', handleDot);

const btnZero = document.querySelector('#zero');
btnZero.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "0");
});

const btnOne = document.querySelector('#one');
btnOne.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "1");
});

const btnTwo = document.querySelector('#two');
btnTwo.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "2");
});

const btnThree = document.querySelector('#three');
btnThree.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "3");
});

const btnFour = document.querySelector('#four');
btnFour.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "4");
});

const btnFive = document.querySelector('#five');
btnFive.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "5");
});

const btnSix = document.querySelector('#six');
btnSix.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "6");
});

const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "7");
});

const btnEight = document.querySelector('#eight');
btnEight.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "8");
});

const btnNine = document.querySelector('#nine');
btnNine.addEventListener('click', () => {
    handleNumber(displayTop, displayBot, "9");
});

/******** Button Click Events Ends Here ********/


/******** Keydown Events Starts Here ********/

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') handleClear();
    if (event.key === 'Delete' || event.key === 'Backspace') handleDelete();
    if (event.key === '/') performOperation(displayTop, displayBot, " ÷ ");
    if (event.key === '*') performOperation(displayTop, displayBot, " x ");
    if (event.key === '-') performOperation(displayTop, displayBot, " - ");
    if (event.key === '+') performOperation(displayTop, displayBot, " + ");
    if (event.key === '=' || event.key === 'Enter') {
        event.preventDefault(); //avoid pressing the focused button
        handleEqual();
    };
    if (event.key === '.') handleDot();
    if (event.key === '0') handleNumber(displayTop, displayBot, "0");
    if (event.key === '1') handleNumber(displayTop, displayBot, "1");
    if (event.key === '2') handleNumber(displayTop, displayBot, "2");
    if (event.key === '3') handleNumber(displayTop, displayBot, "3");
    if (event.key === '4') handleNumber(displayTop, displayBot, "4");
    if (event.key === '5') handleNumber(displayTop, displayBot, "5");
    if (event.key === '6') handleNumber(displayTop, displayBot, "6");
    if (event.key === '7') handleNumber(displayTop, displayBot, "7");
    if (event.key === '8') handleNumber(displayTop, displayBot, "8");
    if (event.key === '9') handleNumber(displayTop, displayBot, "9");
});

/******** Keydown Events Starts Here ********/