// Initialize variables
const INPUT_STACK = [];
let RESULTS;
let OPERATOR_FLAG = false;
let DECIMAL_FLAG = false;

const displayInput = document.getElementById('display-input');
const displayResult = document.getElementById('display-result');


// Check if a key is pressed
const keys = document.querySelector('.keys').addEventListener('click', keyAction);




function clearInputDisplay() {
    displayInput.innerHTML = "";
}

function clearResultsDisplay() {
    displayResult.innerHTML = "";
}

// If key is a decimal
function decimal() {
    INPUT_STACK.push('.');
    DECIMAL_FLAG = true;
}

function getResults() {
    let first_number = [];
    let second_number = [];
    let operand;
    let isFirstNumber = false;

    while (INPUT_STACK.length > 0) {
        let element = INPUT_STACK.pop();
        console.log(element)
        if((element === "add") 
            || (element === "subtract") 
            || (element === "mul") 
            || (element === "div")) {
            operand = element;
            isFirstNumber = true;
        } else {
            isFirstNumber === true
                ? first_number.push(element)
                : second_number.push(element);
        }
    }

 
    console.log(first_number)
    console.log(second_number)
    let num1 = parseFloat(first_number.reverse().join(''));
    let num2 = parseFloat(second_number.reverse().join('')); 
    console.log(`1st num: ${num1}`);
    console.log(`2nd num: ${num2}`);
    keyOperator(operand, num1, num2);
    displayResults();

}

function resetFlags() {
    OPERATOR_FLAG = false;
    DECIMAL_FLAG = false;
}

// If key is a number
function store(key) {
    INPUT_STACK.push(key)
}


    // If key is a decimal or sign


 // If key is DEL or AC
function keyDelAC(status) {
    
    if (OPERATOR_FLAG == false) {
        status ? INPUT.splice(0, INPUT.length) : INPUT.pop();
        const displayNumber = INPUT.join("");
        displayInput.innerText = displayNumber;
    } else if (OPERATOR_FLAG == true) {
        status ? INPUT2.splice(0, INPUT2.length) : INPUT2.pop();
        const displayNumber = INPUT2.join("");
        displayInput.innerText = displayNumber;
    }
    
}

// If key is an operator ( *, / , + , - )
function keyOperator(operator, num1, num2) {

    switch (operator) {
        case 'mul':

            RESULTS = num1 * num2;

            break;
        case 'div':

            RESULTS = num1 / num2;

            break;
        case 'add':

            RESULTS = num1 + num2;

            break;
        case 'subtract':

            RESULTS = num1 - num2;

            break;
    
        default:
            break;
    }
}
    
function print(key) {
    if((key === "add") 
            || (key === "subtract") 
            || (key === "mul") 
            || (key === "div")
            || (key === "equals")
            || (key === "sign")
            ) {
        displayInput.innerText = "";
    } else {
        if(key === 'decimal') displayInput.innerText += '.';
        else displayInput.innerText += key;
    }
}

// If key is equals
function displayResults() {
    displayInput.innerText = "";
    displayResult.innerText = RESULTS;
}

function keyAction(e) {
    const key = Array.from(e.target.id).slice(4).join('');

    console.log(`key: ${key}`)


    key === 'equals'
        ? getResults()
        : key === 'decimal' && DECIMAL_FLAG !== true
        ? decimal()
        : key !== ''
        ? store(key)
        : console.log('skip');

    if((key === "add") 
        || (key === "subtract") 
        || (key === "mul") 
        || (key === "div")
        ) DECIMAL_FLAG = false;

    print(key);
}
