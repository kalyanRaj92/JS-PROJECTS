let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];

let skillListContainerEl = document.getElementById("skillListContainer");

function onMarkSkill(labelId) {
let labelEl = document.getElementById(labelId);
labelEl.classList.toggle('selected');
}

function createAndAppendSkill(skill) {
let checkboxId = 'checkbox' + skill.uniqueNo;
let labelId = 'label' + skill.uniqueNo;

let skillEl = document.createElement('li');
skillEl.classList.add('p-1');
skillListContainerEl.appendChild(skillEl);
//console.log(skillEl);

let checkBoxEl = document.createElement('input');
checkBoxEl.type = 'checkbox';
checkBoxEl.id = checkboxId;
skillEl.appendChild(checkBoxEl);

checkBoxEl.onclick = function() {
    onMarkSkill(labelId);
};

let labelEl = document.createElement('label');
labelEl.setAttribute('for', checkboxId);
labelEl.textContent = skill.skillName;
labelEl.id = labelId;
labelEl.classList.add('checkbox-label');
skillEl.appendChild(labelEl);
}

for (let skill of skillList) {
createAndAppendSkill(skill);
}