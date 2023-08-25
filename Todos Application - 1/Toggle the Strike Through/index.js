let checkBoxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");
let checkboxId = "checkbox";
let labelId = "checkboxLabel";

function onCheckboxStatusChange(checkboxId, labelId) {
    checkboxLabelEl.classList.toggle("strike-through");
}

let checkboxInputEl = document.createElement("input");
checkboxInputEl.type = "checkbox";
checkboxInputEl.id = checkboxId;

checkboxInputEl.onclick = function() {
    onCheckboxStatusChange(checkboxId, labelId);
};
checkBoxWithLabelContainerEl.appendChild(checkboxInputEl);

let checkboxLabelEl = document.createElement("label");
checkboxLabelEl.classList.add("checkbox-label");
checkboxLabelEl.setAttribute("for", checkboxId);
checkboxLabelEl.id = labelId;
checkboxLabelEl.textContent = "I am a label";
checkBoxWithLabelContainerEl.appendChild(checkboxLabelEl);