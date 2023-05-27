// 15. Write a program which can give grades to students according to theirs scores:
//     - 90 - 100, A
//     - 70 - 89, B
//     - 60 - 69, C
//     - 50 - 59, D
//     - 0 - 49, F 

let score = 85;

console.log("Your score is " + score); //Your score is 85

if (score > 90 && score< 100) {
    console.log(`Your Grade is A`);
}
else if (score > 70 && score <89) {
    console.log("Your grade is B"); //Your grade is B
}
else if (score > 60 && score < 69) {
    console.log("Your grade is C");
}
else if (score > 50 && score < 59) {
    console.log("Your grade is D");
}
else if (score > 0 && score < 49) {
    console.log("Dear you are FAIL");
}
else{
    console.log("Your score is not between 0 to 100");
}

