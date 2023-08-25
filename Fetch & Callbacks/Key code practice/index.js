let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function createAndAppendKeyCode(keyCode) {
    let listItemEl = document.createElement("li");
    listItemEl.classList.add("mt-1");
    listItemEl.textContent = keyCode;
    keyCodeListEl.appendChild(listItemEl);
}

function onKeydown(event) {
    createAndAppendKeyCode(event.keyCode);
}
userInputEl.addEventListener("keydown", onKeydown);

/*
Explanation:
The keyCode property returns the Unicode character code of the key that triggered the on keydown event.

So here we can use event.keyCode to get the Unicode character code of the key that triggered the on keydown event.
*/