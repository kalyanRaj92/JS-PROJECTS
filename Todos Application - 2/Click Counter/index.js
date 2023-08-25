let counterValueEl = document.getElementById("counterValue");

// We are gtting the value of clickCount from localstorge
let clickCount = localStorage.getItem("clickCount"); 

if (clickCount === null) {
    counterValueEl.textContent = 0; //If localStorage doesnot have a value in it, we are dispalying 0

} else {
    counterValueEl.textContent = clickCount; //If local storage has some value, we are displaying that value
}

function onIncrementCount() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1; //we are getting the displayed value  and incrementing it.

    localStorage.setItem("clickCount", updatedCounterValue);  //We are updating the clickCount value in the local storgae
    counterValueEl.textContent = updatedCounterValue; //We are displaying the updated value
}



// let btnEl = document.getElementById("incrementBtn");

// btnEl.onclick = function() {
//     let previousCounterValue = counterValueEl.textContent;
//     let updatedCounterValue = parseInt(previousCounterValue) + 1;

//     localStorage.setItem("clickCount", updatedCounterValue);
//     counterValueEl.textContent = updatedCounterValue;
// }