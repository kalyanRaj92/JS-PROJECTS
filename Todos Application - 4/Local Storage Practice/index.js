let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");

//Declaring the key globally
let storageKey = "userInput";

//onclick of the save button we are storing the key to the localStorage
saveBtnEl.onclick = function() {
    let msgVal = msgEl.value;  //Declaring the input value
    //this method adds key and value to localStorage.
    localStorage.setItem(storageKey, msgVal);
};

//onclick of the clear button we are removing the item from the localStorage
clearBtnEl.onclick = function() {
    msgEl.value = ""; //clearing the input value
    //Remove an item by key from localStorage.
    localStorage.removeItem(storageKey);
};

//We get items from localStorage.
let storedUserInputVal = localStorage.getItem(storageKey);

//If the storedUserInputVal is not null then we will get the items from local storage
if (storedUserInputVal !== null) {
    msgEl.value = storedUserInputVal;
} else {
    //Empty string value
    msgEl.value = "";
}