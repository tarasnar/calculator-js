//Make the buttons output desired numbers
const numbersButtons = document.querySelectorAll('.numbers');

let number = [];
numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
        number.push(+button.innerText);
    });
});
//Create functions for calculating addition, substraction, multiplication, division