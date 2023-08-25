let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [
    {
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let valuesToStringify = [bikes, person, todos]; //Store all the values in a array

let jsonContainerEl = document.getElementById("jsonContainer");

//In this function we create <div> and <span> elements and apply stringfiedValue as textContent to span element.
function createAndAppendValue(stringifiedValue) {
    let valueContainerEl = document.createElement("div");
    valueContainerEl.classList.add("value-container");
    jsonContainerEl.appendChild(valueContainerEl);

    let valueEl = document.createElement("span");
    valueEl.textContent = stringifiedValue;
    valueEl.classList.add("value");
    valueContainerEl.appendChild(valueEl);
}

//In convertToJSONString() we stringify the value and call createAndAppendValue()
function convertToJSONString(value) {
    let stringifiedValue = JSON.stringify(value);
    createAndAppendValue(stringifiedValue);
}

//Iterate it over all the values 
for (let value of valuesToStringify) {  //Iterating over each element(value) of valuesToStringify
    convertToJSONString(value);
}