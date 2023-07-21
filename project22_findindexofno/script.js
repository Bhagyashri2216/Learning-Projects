let numbers = [17, 31, 77, 20, 63];
let userInnputEl = document.getElementById("userInput");
let findBtnEl = document.getElementById("findBtn");
let indexOfNumberEl = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let number = parseInt(userInput.value);
    let numbberIndex = numbers.findIndex(function(eachItem) {
        if (eachItem === number) {
            return true;
        } else {
            return false;
        }
    });

    indexOfNumberEl.textContent = numbberIndex
}