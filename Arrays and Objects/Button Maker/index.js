let bgColorInputEle = document.getElementById('bgColorInput');
let fontColorInputEle = document.getElementById('fontColorInput');
let fontSizeInputEle = document.getElementById('fontSizeInput');
let fontWeightInputEle = document.getElementById('fontWeightInput');
let paddingInputEle = document.getElementById('paddingInput');
let borderRadiusInput = document.getElementById('borderRadiusInput');
let customButtonEle = document.getElementById('customButton');

function onApplyProperties() {
    let bgColorValue = bgColorInputEle.value;
    let fontColorValue = fontColorInputEle.value;
    let fontSizeValue = fontSizeInputEle.value;
    let fontWeightValue = fontWeightInputEle.value;
    let paddingValue = paddingInputEle.value;
    let borderRadiusValue = borderRadiusInput.value;

    customButtonEle.style.backgroundColor = bgColorValue;
    customButtonEle.style.color = fontColorValue;
    customButtonEle.style.fontSize = fontSizeValue;
    customButtonEle.style.fontWeight = fontWeightValue;
    customButtonEle.style.padding = paddingValue;
    customButtonEle.style.borderRadius = borderRadiusValue;
}