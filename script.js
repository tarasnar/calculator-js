//Create functions for addition, subtraction, multiplication and division
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

//Create variable to store first number, operator, second number
let num1;
let operator;
let num2;

//Start event listening on all number buttons
const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 === undefined) {
            num1 = +button.innerText;
        } else if (num2 === undefined) {
            num2 = +button.innerText;
        }
    });
});

//Start event listening on all operator buttons
const operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === undefined) {
            operator = button.innerText;
        } else {}
    });
});

//Create function operate which will perform operations based on the operator
function operate(num1, operator, num2) {
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
    operate(num1, operator, num2);
    num1 = operator = num2 = undefined;
});

//Write a logic to store more than a single number in a variable
    //Make an array to store the numbers entered until operator pressed
    //then fill the array for a second number until operator or = is pressed
//Write a logic so that the previous result is stored for next operation
    //When one of the buttons for result is pressed
    // put the number in a separate variable which then use in operations
