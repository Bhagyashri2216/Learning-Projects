// // 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// // give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait 
// // for the number of years he needs to turn 18.

// let age = parseInt(prompt("Enter your age:"));
// let remaining_age= 18-age
// if (age >= 18){
// You are old enough to drive}
// else{ Please wait for the another remaining_age years to start driving
// };

const age = parseInt(prompt("Enter your age"));
age >= 18 ? alert("You are old enough to drive") : alert(`Please wait for another ${18 - age} years to start driving`);