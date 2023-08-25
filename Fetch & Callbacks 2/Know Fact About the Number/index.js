let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function getFactOfEnteredNumber(event) {
    if (event.key === "Enter") {
        let userInputVal = userInputEl.value;

        if (userInputVal === "") {
            alert("Enter a Number");
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
        let options = {
            method: "GET"
        };
        spinnerEl.classList.remove("d-none");
        factEl.classList.add("d-none");

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                factEl.classList.remove("d-none");
                spinnerEl.classList.add("d-none");

                let {
                    fact
                } = jsonData;
                factEl.textContent = fact;
            });
    }
}

userInputEl.addEventListener("keyup", getFactOfEnteredNumber);