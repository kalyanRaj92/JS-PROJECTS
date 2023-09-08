let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let headingEl = document.querySelector('h1');
let textEl = document.querySelector('.color-picker-instruction');
let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");


function changeBgColor() {
    let hexColorCode = "#";
    let letters = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length);
        hexColorCode += letters[randomIndex];
        console.log(hexColorCode);
    }
    //console.log(hexColorCode);

    colorPickerContainerElement.style.backgroundColor = hexColorCode;
    selectedColorHexCodeElement.textContent = hexColorCode;
    headingEl.style.color = "#fff";
    textEl.style.color = "#fff";
}