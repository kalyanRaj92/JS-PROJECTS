let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});

myFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
});