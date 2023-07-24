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
    return num1 / num2;
}

let screen = document.querySelector('#screen');
//Create variable to store first number, operator, second number
let num1 = [];
let operator;
let num2 = [];

//Start event listening on all number buttons
const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === undefined) {
            num1.push(+button.innerText)
            screen.innerText = num1.join('');
        } else {
            num2.push(+button.innerText);
            screen.innerText = num2.join('');
        }
    });
});

//Start event listening on all operator buttons
const operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator !== undefined && num1.length > 0 && num2.length > 0) {
                num1[0] = operate(num1, operator, num2);
                screen.innerText = num1[0];
                num1.splice(1);
                num2 = [];
        } else {
            operator = button.innerText;
        }
    });
});

//Create function operate which will perform operations based on the operator
function operate(num1, operator, num2) {
    num1 = Number(num1.join(''));
    num2 = Number(num2.join(''));
    switch(operator) {
        case '+':
            return addition(num1, num2);

        case '-':
            return subtraction(num1, num2);

        case '*':
            return multiplication(num1, num2);

        case '/':
            return division(num1, num2);
    }
}

//Start event listening on evaluation button
const evaluationButton = document.querySelector('.evaluation');
evaluationButton.addEventListener('click', () => {
    screen.innerText = operate(num1, operator, num2);
    num1 = [];
    num2 = [];
    operator = undefined;
});