let clearBtnEl = document.getElementById("clearBtn");
let counterValue = document.getElementById("counterValue");

let counter = 0;

let counterTimer = function() {
    counter = counter + 1;
    counterValue.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

// Write your code here
clearBtnEl.onclick = function() {
    clearInterval(intervalId);
    counterValue.textContent = 'Interval cleared';
};

// let intervalId = setInterval(function() {
//     counter = counter + 1;
//     counterValue.textContent = counter;
// }, 1000);