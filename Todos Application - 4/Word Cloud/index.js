let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

let errorMsg = "Please enter a word";

function createAndAppendToWordCloud(word) {

    let randomFontSize = Math.ceil(Math.random() * 40) + "px"; //Generate random font size
    let wordEl = document.createElement("span");

    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;  //Add generated font size to the HTML word element
    wordEl.classList.add("m-3");
    wordsContainerEl.appendChild(wordEl);

}

for (let word of wordCloud) {
    createAndAppendToWordCloud(word);
}

function onAddWordToWordCloud() {

    let userEnteredWord = userInputEl.value;
    if (userEnteredWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createAndAppendToWordCloud(userEnteredWord);
    } else {
        errorMsgEl.textContent = errorMsg;
    }
}
/*
Explanation:
We have provided 40 in order to get the output close to the given layout in the description. We can give any number other than 40.

You can observe the difference by providing any number greater than 40.
*/