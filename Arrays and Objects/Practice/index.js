let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";

let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);

let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading and Add Styles";
containerElement.appendChild(btnElement);

btnElement.onclick = function(){
  h1Element.textContent = "4.0 Technologies";
  h1Element.classList.add("heading");
};

let removeStylesBtnElement = document.createElement("button");
removeStylesBtnElement.textContent = "Remove Styles";
containerElement.appendChild(removeStylesBtnElement);

removeStylesBtnElement.onclick = function(){
  h1Element.classList.remove("heading");
};