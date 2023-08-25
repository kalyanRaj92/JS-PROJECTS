let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let headingEl = document.getElementById("recipeTitle");
headingEl.textContent = recipeObj.title;

let imgContainerEl = document.getElementById("imageContainer");
let imgEl = document.getElementById("img");
imgEl.setAttribute("src", recipeObj.imgSrc);
imgEl.classList.add("w-100");
imgContainerEl.appendChild(imgEl);

let ingredientListContainerEl = document.getElementById("ingredientListContainer");
let ingredientList = recipeObj.ingredients;

for (let ingredient of ingredientList) {
    let ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("ingredient");
    ingredientListContainerEl.appendChild(ingredientEl);
}