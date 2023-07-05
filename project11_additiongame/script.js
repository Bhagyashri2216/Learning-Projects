let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

let successMessage="Congratulations!! You got it right";
let tryAgainMessage="Please Try Again!";

function restartButtonFunction() {
    let FirstRandomNumber = Math.random() * 100;
    FirstRandomNumber = Math.ceil(FirstRandomNumber);
    firstNumber.textContent = FirstRandomNumber

    let secondRandomNumber = Math.random() * 100;
    secondRandomNumber = Math.ceil(secondRandomNumber);
    secondNumber.textContent = secondRandomNumber
    gameResult.textContent = "";
    userInput.value = "";
}
restartButtonFunction();


function checkButtonFunction() {
    let FirstRandomNumber = parseInt(firstNumber.textContent);
    let secondRandomNumber = parseInt(secondNumber.textContent);
    let input = parseInt(userInput.value);
    let sumOfNumbers = FirstRandomNumber + secondRandomNumber;
    if (sumOfNumbers === input) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = ""

    }

}