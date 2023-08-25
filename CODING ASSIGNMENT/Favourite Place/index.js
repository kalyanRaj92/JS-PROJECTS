let myFormEl = document.getElementById("myForm");

let firstCity = document.getElementById("input1");
let secondCity = document.getElementById("input2");
let thirdCity = document.getElementById("input3");

let result = document.getElementById('result');
let seclectedCity = null;

firstCity.addEventListener("change", function(event) {
    seclectedCity = event.target.value;
    console.log(seclectedCity);
});

secondCity.addEventListener("change", function(event) {
    seclectedCity = event.target.value;
    console.log(seclectedCity);
});

thirdCity.addEventListener("change", function(event) {
    seclectedCity = event.target.value;
    console.log(seclectedCity);
});

myFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (seclectedCity === firstCity.value) {
        result.textContent = "Your favourite place is : " + firstCity.value;
    } else if (seclectedCity === secondCity.value) {
        result.textContent = "Your favourite place is : " + secondCity.value;
    } else if (seclectedCity === thirdCity.value) {
        result.textContent = "Your favourite place is : " + thirdCity.value;
    }
});