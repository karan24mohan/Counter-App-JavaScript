//Creating a variable counter and initialzing its value as 0.

let counter = 0;
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');
let countervalue = document.getElementById('counter');

//Created a function that will be increasing the value of counter when user will click on + button.
function incrementvalue() {
    counter += 1;
    countervalue.innerHTML = counter;
}

//Created a function that will be decreasing the value of counter when user will click on - button.
function decrementvalue() {
    counter -= 1;
    countervalue.innerHTML = counter;
}

//Created a function that will reset the counter's value to 0 when user will click on reset button.
function resetvalue() {
    counter = 0;
    countervalue.innerHTML = counter;
}