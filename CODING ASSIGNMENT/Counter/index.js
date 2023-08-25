let counterValueEl = document.getElementById("counterValue");

let count = null;

function updateCounter() {
  counterValueEl.textContent = count;
}

function onIncrement() {
    let previouscounter = parseInt(counterValueEl.textContent);
    console.log(previouscounter);
    
    if (previouscounter % 2 === 0) {
        count = previouscounter + 5;
    } else{
        count = previouscounter + 10;
    }
     updateCounter();
}

function onDecrement() {
    let previouscounter = parseInt(counterValueEl.textContent);
    console.log(previouscounter);

    if (previouscounter % 2 === 0) {
        count = previouscounter - 2;
    } else {
        count = previouscounter - 1;
    }
     updateCounter();
}

function onReset() {
    counterValueEl.textContent = 0;
}

/*
Achieve the given functionality using JS.

When the HTML button element with the id decreaseBtn is clicked,
If the count is odd then decrease the counter value by -1 as shown in the image.
If the count is even then decrease the counter value by -2 as shown in the image.

When the HTML button element with the id increaseBtn is clicked,
If the count is odd then increase the counter value by 10 as shown in the image.
If the count is even then increase the counter value by 5 as shown in the image.

When the HTML button element with the id resetBtn is clicked,
Set counter value as 0.
*/