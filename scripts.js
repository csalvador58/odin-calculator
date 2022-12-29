// Initialize variables
const INPUT_STACK = [];
let RESULTS;
let OPERATOR_FLAG = false;
let DECIMAL_FLAG = false;
let SIGN_FLAG = false;

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
    if (DECIMAL_FLAG !== true) {
        INPUT_STACK.push('.');
        DECIMAL_FLAG = true;
    }
}

function getResults() {
    let first_number = [];
    let second_number = [];
    let operand;
    let isFirstNumber = true;
    let isNumFloat = false;

    INPUT_STACK.reverse();

    while (INPUT_STACK.length > 0) {
        let element = INPUT_STACK.pop();
        
        if((element === "add") 
            || (element === "subtract") 
            || (element === "mul") 
            || (element === "div")) {

            if(! isFirstNumber) {
                let num1, num2;

                if (isNumFloat) {
                    num1 = parseFloat(first_number.join(''));
                    num2 = parseFloat(second_number.join('')); 
                } else {
                    num1 = parseInt(first_number.join(''));
                    num2 = parseInt(second_number.join('')); 
                }
                keyOperator(operand, num1, num2);
                console.log(`Results: ${RESULTS}`)
                first_number = []; 
                second_number = [];
                first_number.push(RESULTS);
                operand = element;
                
            } else {
                operand = element;
                isFirstNumber = false;
            }
        } else {
            if (element === '.') isNumFloat = true;

            isFirstNumber === true
                ? first_number.push(element)
                : second_number.push(element);
        }
    }


    console.log(first_number)
    console.log(second_number)

    let num1, num2;

    if (isNumFloat) {
        num1 = parseFloat(first_number.join(''));
        num2 = parseFloat(second_number.join('')); 
    } else {
        num1 = parseInt(first_number.join(''));
        num2 = parseInt(second_number.join('')); 
    }

    console.log(`1st num: ${num1}`);
    console.log(`2nd num: ${num2}`);
    keyOperator(operand, num1, num2);
    displayResults();
}

function handleSign() {
    if (SIGN_FLAG === false) {
        let tempStore = [];
        for (let i = displayInput.innerText.length - 1; i > 0; i--) {
            tempStore.push(INPUT_STACK.pop());
        }
        INPUT_STACK.push('-');
        INPUT_STACK.push(...tempStore.reverse());
        SIGN_FLAG = true;
    }
}

function resetFlags() {
    OPERATOR_FLAG = false;
    DECIMAL_FLAG = false;
    SIGN_FLAG = false;
}

function store(key) {
    INPUT_STACK.push(key)
}

function deleteKey(status) {
    
    if (displayInput.innerText > 0) {
        if(status === 'DEL') {
            INPUT_STACK.pop();
        } else {
            INPUT_STACK.length = 0;
        }
    }
    
}

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
            || (key === "AC")
    ) {
        displayInput.innerText = "";
        displayResult.innerText = "";
    } else if (key === 'decimal') { 
        if (DECIMAL_FLAG === false) displayInput.innerText += '.';
    } else if (key === 'sign') { 
        if (SIGN_FLAG === false) {
            let text = Array.from(displayInput.innerText);
            text.unshift('-');
            displayInput.innerText = text.join('');
        }
    } else if (key === "DEL") {
        let input = Array.from(displayInput.innerText);
        input.pop();
        displayInput.innerText = input.join('');
    } else {
        displayInput.innerText += key;
    }
}

function displayResults() {
    displayInput.innerText = "";
    displayResult.innerText = RESULTS;
    
}

function keyAction(e) {
    const key = Array.from(e.target.id).slice(4).join('');

    console.log(`key: ${key}`)

    if (displayInput.innerHTML === '') {
        if((key === "add") 
            || (key === "subtract") 
            || (key === "mul") 
            || (key === "div")
            || (key === "equals")
        ) {
            alert('Please input a number.');
            return;
        }
    }

    print(key);

    key === 'equals'
        ? getResults()
        : key === 'decimal'
        ? decimal()
        : key === 'DEL' || key === 'AC'
        ? deleteKey(key)
        : key === 'sign'
        ? handleSign()
        : key !== ''
        ? store(key)
        : console.log('skip');

    if((key === "add") 
        || (key === "subtract") 
        || (key === "mul") 
        || (key === "div")
        ) {
            DECIMAL_FLAG = false;
            SIGN_FLAG = false;
        }

    console.log(INPUT_STACK)
}
