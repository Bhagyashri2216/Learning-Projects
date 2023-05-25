// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const d = new Date();
console.log(d);//2023-05-25T17:09:55.057Z

//     - What is the year today?
let year = d.getFullYear();
console.log(year);//2023

//     - What is the month today as a number?
let month = d.getMonth();
console.log(month); //4

//     - What is the date today?
let date=d.getDate();
console.log(date);//25

//     - What is the day today as a number?
let day=d.getDay();
console.log(day);//4

//     - What is the hours now?
let hour=d.getHours();
console.log(hour);//22 

//     - What is the minutes now?
let minutes=d.getMinutes();
console.log(minutes);// 43


//- Find out the numbers of seconds elapsed from January 1, 1970 to now.

const miliSecondsElapsed = d.getTime(); // getTime() method will return milliseconds elapsed from Jan 1, 1970
const secondsElapsed = miliSecondsElapsed / 1000;
console.log(`Number of  seconds elapsed from Jan 1, 1970 are ${secondsElapsed}`);
//Number of  seconds elapsed from Jan 1, 1970 are 1685035016.576
 













