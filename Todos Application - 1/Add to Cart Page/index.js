let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let cartItemsContainerEl = document.getElementById("cartItemsContainer");
let btnEl = document.getElementById("addBtn");

btnEl.onclick = function() {
    let cartItemText = cartItemTextInputEl.value;

    let cartItemEl = document.createElement('li');
    cartItemEl.textContent = cartItemText;

    cartItemTextInputEl.value = "";
    cartItemsContainerEl.appendChild(cartItemEl);
}

/*function onAddCartItem() {
    let cartItemText = cartItemTextInputEl.value;

    let cartItemEl = document.createElement('li');
    cartItemEl.textContent = cartItemText;

    cartItemTextInputEl.value = "";
    cartItemsContainerEl.appendChild(cartItemEl);
}*/