let setTimeoutBtnEl = document.getElementById("setTimeoutBtn");
let clearTimeoutBtnEl = document.getElementById("clearTimeoutBtn");

let uniqueId = null;

setTimeoutBtnEl.onclick = function() {
  uniqueId = setTimeout(function() {
    console.log("Hello");
  }, 2000);
};

clearTimeoutBtnEl.onclick = function(){
    clearTimeout(uniqueId);
    console.log("Time Out");
};