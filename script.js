const screen = document.querySelector('#calc-screen');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const evaluationButton = document.querySelector('.evaluation');
const clearButton = document.querySelector('.clear');
const percentButton = document.querySelector('#percent');

//Create variables to store first number, operator, second number
let num1 = [];
let operator;
let num2 = [];

//Create functions for addition, subtraction, multiplication and division
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        clear();
        return 'hell no';
    }
}

//Function that decides to which element to append to
function decideInput(element, button) {
    if (button.innerText === '+/-') {
        if (findPlusMinus(element) !== '-') {
            element.unshift('-');
            updateScreen(element);
        } else {
            element.shift();
            updateScreen(element);
        }
    } else if (button.innerText !== '0' && element[0] === '0') {
        if (button.innerText === '.') {
            if (findDot(element) !== '.') {
                element.push(button.innerText);
                updateScreen(element);
            }
        } else if (findDot(element) !== '.') {
            element.splice(0);
            element.push(button.innerText);
            updateScreen(element);
        } else {
            element.push(button.innerText);
            updateScreen(element);
        }
    } else if (button.innerText === '0') {
        if (element[0] !== '0' || findDot(element) === '.') {
            element.push(button.innerText);
            updateScreen(element);
        }
    } else {
        element.push(button.innerText);
        updateScreen(element);
    }
}

//Function that performs operations based on the operator
function operate(num1, operator, num2) {
    num1 = Number(num1.join(''));
    num2 = Number(num2.join(''));
    switch(operator) {
        case '+':
            return String(addition(num1, num2));

        case '-':
            return String(subtraction(num1, num2));

        case '*':
            return String(multiplication(num1, num2));

        case '/':
            return String(division(num1, num2));
    }
}

function findPlusMinus(element) {
    return element.find(element => element === '-');
}

//Function which checks element for a dot
function findDot(element) {
    return element.find(element => element === '.');
}

//Function to update screen
function updateScreen(element) {
    screen.innerText = element.join('');
}

//Function to empty variables and start over
function clear() {
    num1 = [];
    num2 = [];
    operator = undefined;
}

function evaluate() {
    num1 = [operate(num1, operator, num2)];
    updateScreen(num1);
    num2 = [];
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === undefined || num1.length < 1) {
            decideInput(num1, button);
        } else {
            decideInput(num2, button);
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator !== undefined && num1.length > 0 && num2.length > 0) {
            evaluate();
            operator = button.innerText;
        } else {
            operator = button.innerText;
        }
    });
});

percentButton.addEventListener('click', () => {
    let percentage;
    if (screen.innerText === num1.join('')) {
        percentage = Number(num1.join('') / 100);
        num1.splice(0);
        num1.push(percentage);
        updateScreen(num1);
    } else if (screen.innerText === num2.join('')) {
        percentage = Number(num2.join('') / 100);
        num2.splice(0);
        num2.push(percentage);
        updateScreen(num2);
    }
})

evaluationButton.addEventListener('click', () => {
    evaluate();
    clear();
});

clearButton.addEventListener('click', () => {
    clear();
    updateScreen(num1);
});

//Make dem round