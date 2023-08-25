let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerEl = document.getElementById("groceryListContainer");
groceryListContainerEl.classList.add("grocery-list-container");

let headingEl = document.createElement("h1");
headingEl.classList.add("grocery-list-heading");
headingEl.textContent = "Grocery List";
groceryListContainerEl.appendChild(headingEl);

let listItemsContainerEl = document.createElement("ul");
listItemsContainerEl.classList.add("list-items-container");
groceryListContainerEl.appendChild(listItemsContainerEl);

for (let groceryItem of groceryList) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = groceryItem;
    listItemsContainerEl.appendChild(listItemEl);
}