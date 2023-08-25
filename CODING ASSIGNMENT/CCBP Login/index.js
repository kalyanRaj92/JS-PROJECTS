let myForm = document.getElementById('myForm');
let resultMsg = document.getElementById('resultMsg');

let nameEl = document.getElementById('name');
let nameErrMsg = document.getElementById('nameErrMsg');

let passwordEl = document.getElementById('password');
let passwordErrMsg = document.getElementById('passwordErrMsg');

nameEl.addEventListener('blur', function() {
    if (event.target.value === "") {
        nameErrMsg.textContent = 'Required*';
    } else {
        nameErrMsg.textContent = '';
    }
});

passwordEl.addEventListener('blur', function() {
    if (event.target.value === "") {
        passwordErrMsg.textContent = 'Required*';
    } else {
        passwordErrMsg.textContent = '';
    }
});

function validateFormData() {
    if (nameEl.value === "") {
        nameErrMsg.textContent = 'Required*';
    }
    if (passwordEl.value === "") {
        passwordErrMsg.textContent = 'Required*';
    }
}

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    validateFormData();
    if (nameEl.value !== "" && passwordEl.value !== "") {
        resultMsg.textContent = 'Login Success';
    } else {
        resultMsg.textContent = 'Fill in the required details';
    }
});