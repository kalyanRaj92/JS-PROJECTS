let userInput = document.getElementById('userInput');
let keydownCounter = document.getElementById('keydownCounter');
let keydownCode = document.getElementById('keydownCode');

userInput.addEventListener('keydown', function() {
    keydownCounter.textContent++;
    keydownCode.textContent = event.keyCode;
});