let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerEl = document.getElementById("groceryListContainer");
groceryListContainerEl.classList.add("grocery-List-container");

let headingEl = document.createElement("h1");
headingEl.classList.add("grocery-List-heading");
headingEl.textContent = "Grocery List";
groceryListContainerEl.appendChild(headingEl);

let listItemContainerEl = document.createElement("ul");
listItemContainerEl.classList.add("list-items-container");
groceryListContainerEl.appendChild(listItemContainerEl);

for (let groceryItem of groceryList) {
    let listItemEl = document.createElement("li")
    listItemEl.textContent = groceryItem;
    listItemContainerEl.appendChild(listItemEl);

}