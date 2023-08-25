let itemList = [
{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];

let itemListContainerEl = document.getElementById("itemListContainer");

function onDeleteItem(itemId) {
let itemEl = document.getElementById(itemId);
itemListContainerEl.removeChild(itemEl);
}

function createAndAppendItem(item) {
let itemId = "item" + item.uniqueNo;
let buttonId = "button" + item.uniqueNo;

let itemEl = document.createElement("li");
itemEl.id = itemId;
itemEl.classList.add("ordered-item");
itemEl.textContent = item.itemName;
itemListContainerEl.appendChild(itemEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-danger", "ml-3");
buttonEl.textContent = "Cancel";
buttonEl.id = buttonId;

buttonEl.onclick = function() {
    onDeleteItem(itemId);
};
itemEl.appendChild(buttonEl);
}

for (let item of itemList) {
createAndAppendItem(item);
}