let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let ingredientList=recipeObj.ingredients;

let headingE1 = document.getElementById("recipeTitleHeadinhg");
headingE1.textContent=recipeObj.title;

let imgContainerEl=document.getElementById("imageConatiner");
let imageEl=document.getElementById("img");
imageEl.setAttribute("src",recipeObj.imgSrc);
imageEl.classList.add("w-100");
imgContainerEl.appendChild(imageEl)


let ingredientListConatinerEl = document.getElementById("ingredientsListContainer");

for (let ingredient of ingredientList) {
    let ingredientEl = document.createElement("li");
    ingredientEl.textContent= ingredient;
    ingredientEl.classList.add("ingredient");
    ingredientListConatinerEl.appendChild(ingredientEl);

}



