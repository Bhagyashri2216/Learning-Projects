let checkboxWithLabelContainerEl = document.getElementById("checkboxWithLabelContainer");

checkboxWithLabelContainerEl.classList.add("text-center", "p-5");

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "checkbox";
checkboxWithLabelContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "Click Me!"
labelEl.classList.add("ml-2");
labelEl.id = "checkboxLabel"
checkboxWithLabelContainerEl.appendChild(labelEl);