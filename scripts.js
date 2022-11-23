// Initialize variables
const INPUT = [];
const INPUT2 = [];
let RESULTS;
let OPERATOR_FLAG = false;

// Check if a key is pressed
const keys = document.querySelector('.keys').addEventListener('click', keyAction);


// If a key is pressed, take action


// If key is a number
function keyNumber(number) {

    if (OPERATOR_FLAG == false) {
        if (INPUT.length < 9) {
            INPUT.push(number);
        
            const displayNumber = INPUT.join("");
            document.querySelector('.input p:nth-of-type(2)').innerText = displayNumber;  
        }
    } else if (OPERATOR_FLAG == true) {
        if (INPUT2.length < 9) {
            INPUT2.push(number);
        
            const displayNumber = INPUT2.join("");
            document.querySelector('.input p:nth-of-type(2)').innerText = displayNumber;  
        }
    }
}


    // If key is a decimal or sign


 // If key is DEL or AC
function keyDelAC(status) {
    
    if (OPERATOR_FLAG == false) {
        status ? INPUT.splice(0, INPUT.length) : INPUT.pop();
        const displayNumber = INPUT.join("");
        document.querySelector('.input p:nth-of-type(2)').innerText = displayNumber;
    } else if (OPERATOR_FLAG == true) {
        status ? INPUT2.splice(0, INPUT2.length) : INPUT2.pop();
        const displayNumber = INPUT2.join("");
        document.querySelector('.input p:nth-of-type(2)').innerText = displayNumber;
    }
    
    
}

// If key is an operator ( *, / , + , - )
function keyOperator(operator) {
    let num1, num2;

    switch (operator) {
        case 'mul':
            num1 = Number(INPUT.join(""));
            num2 = Number(INPUT2.join(""));

            RESULTS = num1 * num2;

            break;
        case 'div':
            num1 = Number(INPUT.join(""));
            num2 = Number(INPUT2.join(""));

            RESULTS = num1 / num2;

            break;
        case 'add':
            num1 = Number(INPUT.join(""));
            num2 = Number(INPUT2.join(""));

            RESULTS = num1 + num2;

            break;
        case 'subtract':
            num1 = Number(INPUT.join(""));
            num2 = Number(INPUT2.join(""));

            RESULTS = num1 - num2;

            break;
    
        default:
            break;
    }
}
    
// If key is equals
function displayResults() {
    document.querySelector('.input p:nth-of-type(2)').innerText = "";
    document.querySelector('.results p:nth-of-type(2)').innerText = RESULTS;
}

function keyAction(e) {

    console.log(e.target)

    switch (e.target.id) {
        case 'key-0':
            keyNumber(0);
            break;
        case 'key-1':
            keyNumber(1);
            break;
        case 'key-2':
            keyNumber(2);
            break;
        case 'key-3':
            keyNumber(3);
            break;
        case 'key-4':
            keyNumber(4);
            break;
        case 'key-5':
            keyNumber(5);
            break;
        case 'key-6':
            keyNumber(6);
            break;
        case 'key-7':
            keyNumber(7);
            break;
        case 'key-8':
            keyNumber(8);
            break;
        case 'key-9':
            keyNumber(9);
            break;
        case 'key-DEL':
            keyDelAC(false);
            break;
        case 'key-AC':
            keyDelAC(true);
            break;
        case 'key-mul':
            if (OPERATOR_FLAG) {
                keyOperator('mul'); 
            } else {
                OPERATOR_FLAG = true;
            }
            
            break;
        case 'key-div':
            if (OPERATOR_FLAG) {
                keyOperator('div'); 
            } else {
                OPERATOR_FLAG = true;
            }
            break;
        case 'key-add':
            if (OPERATOR_FLAG) {
                keyOperator('add'); 
            } else {
                OPERATOR_FLAG = true;
            }
            break;
        case 'key-subtract':
            if (OPERATOR_FLAG) {
                keyOperator('subtract'); 
            } else {
                OPERATOR_FLAG = true;
            }
            break;
        case 'key-equals':
            displayResults();
            OPERATOR_FLAG = false;
            INPUT.splice(0, INPUT.length);
            INPUT2.splice(0, INPUT2.length);

            break;
        
    
        default:
            break;
    }
    
}
