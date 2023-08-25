let setIntervalBtnEl = document.getElementById("setIntervalBtn");
let clearIntervalBtnEl = document.getElementById("clearIntervalBtn");

let uniqueId = null;

setIntervalBtnEl.onclick = function() {
  let counter = 0;
  uniqueId = setInterval(function() {
    console.log(counter);
    counter = counter + 1;
  }, 1000);
};

clearIntervalBtnEl.onclick = function() {
  clearInterval(uniqueId);
  console.log("Interval cleared");
};