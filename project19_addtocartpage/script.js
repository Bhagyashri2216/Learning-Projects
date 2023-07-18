let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let cartItemsConatinerEl = document.getElementById("cartItemsConatiner");

function onAddCartItem() {
    let cartItemText = cartItemTextInputEl.value;

    let cartItemEl = document.createElement("li");
    cartItemEl.textContent = cartItemText;

    cartItemsConatinerEl.value = "";
    cartItemsConatinerEl.appendChild(cartItemEl);


}