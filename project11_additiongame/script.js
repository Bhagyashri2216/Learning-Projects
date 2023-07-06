let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

let successMessage="Congratulations!! You got it right";//result msg
let tryAgainMessage="Please Try Again!";                  //result msg

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
restartButtonFunction(); // call the function to display the values and to reset userinput values.


function checkButtonFunction() {
    let FirstRandomNumber = parseInt(firstNumber.textContent);
    let secondRandomNumber = parseInt(secondNumber.textContent);
    let input = parseInt(userInput.value);
    let sumOfNumbers = FirstRandomNumber + secondRandomNumber;
    if (sumOfNumbers === input) {
        gameResult.textContent = successMessage;
        gameResult.style.backgroundColor="#028a0f";

    }
    else{
        gameResult.textContent=tryAgainMessage;
        gameResult.style.backgroundColor = "#1e217c";
    }

}