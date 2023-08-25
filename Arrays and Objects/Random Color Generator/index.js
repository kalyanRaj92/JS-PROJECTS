let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

// bgContainerElement.style.backgroundColor = bgColorsArray.length;

function onChangeBgColor() {
    let NumberOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * NumberOfBgColors);
    console.log(randomBgColorIndex);

    if (randomBgColorIndex === NumberOfBgColors) {
        randomBgColorIndex = NumberOfBgColors - 1;

    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];

    bgContainerElement.style.backgroundColor = randomBgColor;
}