let subscribeFormEl = document.getElementById("subscribeForm");

subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});