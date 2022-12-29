// Initialize variables
const INPUT_STACK = [];
const INPUT2 = [];
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
    let isFirstNumber = true;

    while (INPUT_STACK.length > 0) {
        let element = INPUT_STACK.pop();
        if((element === "add") 
            || (element === "subtract") 
            || (element === "mul") 
            || (element === "div")) {
            operand = element;
        } else {
            isFirstNumber === true
                ? first_number.push(element)
                : second_number.push(element);
        }
    }

    console.log(first_number.reverse().join(''));
    console.log(second_number.reverse().join(''));

    keyOperator(first_number.reverse().join(''), 
                second_number.reverse().join(''),
                operand);

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
    
// If key is equals
function displayResults() {
    displayInput.innerText = "";
    displayResult.innerText = RESULTS;
}

function keyAction(e) {

    console.log(e.target)

    const key = Array.from(e.target.id).slice(4).join('');

    const number = /\d/;

    console.log(number.test(key))

    number.test(key) 
        ? store(key)
        : key === 'decimal' && DECIMAL_FLAG !== true;
        ? decimal()
        : key === 'equals'
        ? getResults()
        : false
        

    // switch (key) {
    //     case number.test(key):
    //         keyNumber(0);
    //         break;
    //     case 'key-1':
    //         keyNumber(1);
    //         break;
    //     case 'key-2':
    //         keyNumber(2);
    //         break;
    //     case 'key-3':
    //         keyNumber(3);
    //         break;
    //     case 'key-4':
    //         keyNumber(4);
    //         break;
    //     case 'key-5':
    //         keyNumber(5);
    //         break;
    //     case 'key-6':
    //         keyNumber(6);
    //         break;
    //     case 'key-7':
    //         keyNumber(7);
    //         break;
    //     case 'key-8':
    //         keyNumber(8);
    //         break;
    //     case 'key-9':
    //         keyNumber(9);
    //         break;
    //     case 'key-DEL':
    //         keyDelAC(false);
    //         break;
    //     case 'key-AC':
    //         keyDelAC(true);
    //         break;
    //     case 'key-mul':
    //         if (OPERATOR_FLAG) {
    //             keyOperator('mul'); 
    //         } else {
    //             OPERATOR_FLAG = true;
    //         }
            
    //         break;
    //     case 'key-div':
    //         if (OPERATOR_FLAG) {
    //             keyOperator('div'); 
    //         } else {
    //             OPERATOR_FLAG = true;
    //         }
    //         break;
    //     case 'key-add':
    //         if (OPERATOR_FLAG) {
    //             keyOperator('add'); 
    //         } else {
    //             OPERATOR_FLAG = true;
    //         }
    //         break;
    //     case 'key-subtract':
    //         if (OPERATOR_FLAG) {
    //             keyOperator('subtract'); 
    //         } else {
    //             OPERATOR_FLAG = true;
    //         }
    //         break;
    //     case 'key-equals':
    //         displayResults();
    //         OPERATOR_FLAG = false;
    //         INPUT.splice(0, INPUT.length);
    //         INPUT2.splice(0, INPUT2.length);

    //         break;
        
    
    //     default:
    //         break;
    // }
    
}
