let itemList = [{
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
let orderedItemsContainerEl = document.getElementById("orderedItemsContainer");
let itemsListContainerEl = document.getElementById("itemsListContainer");

function onDeleteItem(itemId) {
let itemEl = document.getElementById(itemId);
itemsListContainerEl.removeChild(itemEl);
}

function createAndAppendItem(item) {
let itemId = "item" + item.uniqueNo;
let buttonId = "button" + item.uniqueNo;

let itemEl = document.createElement("li");
itemEl.id = itemId;
itemEl.classList.add("order-item");
itemEl.textContent = item.itemName;
itemsListContainerEl.appendChild(itemEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-danger", "ml-4", "mt-2");
buttonEl.textContent = "Cancel";
buttonEl.id = buttonId;

buttonEl.onclick = function() {
    onDeleteItem(itemId);
};
itemEl.appendChild(buttonEl);
}

for (let item of itemList) {
createAndAppendItem(item)
}