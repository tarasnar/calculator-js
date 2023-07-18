//Create function for addition, subtraction, multiplication and division
function addition(num1, num2) {
    console.log(num1 + num2);
}

function subtraction(num1, num2) {
    console.log(num1 - num2);
}

function multiplication(num1, num2) {
    console.log(num1 * num2);
}

function division(num1, num2) {
    console.log(num1 / num2);
}
//Create variable for first number, operator and second number
let num1;
let operator;
let num2;
const numberButtons =
    document.querySelectorAll('.numbers').forEach(button => {
    button.addEventListener('click', () => {
        num1 = +button.innerText;
    });
});
const operatorButtons =
    document.querySelectorAll('.operators').forEach(button => {
    button.addEventListener('click', () => operator = button.innerText);
});
//Create function operate which will perform operations on these three variables
function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            console.log(addition(num1, num2));
            break;

        case '-':
            console.log(subtraction(num1, num2));
            break;

        case '*':
            console.log(multiplication(num1, num2));
            break;

        case '/':
            console.log(division(num1, num2));
            break;
    }
}
const evaluationButton = document.querySelector
('.evaluation').addEventListener('click',
    () => operate(num1, operator, num2));