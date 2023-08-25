let gameResult = document.getElementById("gameResult");
let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

let no_of_guesses = 0;
let guesses_num = [];

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber < 1 || guessedNumber > 100) {
        alert("Please Enter a number Between 1 to 100");
    } else {
        guesses_num.push(guessedNumber);
        no_of_guesses += 1;

        if (guessedNumber > randomNumber) {
            gameResult.textContent = "Your Guess is Too High! Try Again.";
            gameResult.style.backgroundColor = "#1e217c";
            gameResult.style.borderRadius = "10px";
            msg1.textContent = "No. Of Guesses : " + no_of_guesses;
            msg2.textContent = "Guessed Number Are : " + guesses_num;
        } else if (guessedNumber < randomNumber) {
            gameResult.textContent = "Your Guess is Too Low! Try Again.";
            gameResult.style.backgroundColor = "#1e217c";
            gameResult.style.borderRadius = "10px";
            msg1.textContent = "No. Of Guesses : " + no_of_guesses;
            msg2.textContent = "Guessed Number Are : " + guesses_num;
        } else if (guessedNumber === randomNumber) {
            gameResult.textContent = "Congratulations! You got it right.";
            gameResult.style.backgroundColor = "green";
            gameResult.style.borderRadius = "10px";
            msg1.textContent = "The Number was " + randomNumber;
            msg2.textContent = " You guessd it in " + no_of_guesses + " Guesses.";
        } else {
            gameResult.textContent = "Please provide a valid input.";
            gameResult.style.backgroundColor = "#1e217c";
            gameResult.style.borderRadius = "10px";
        }
    }
}

