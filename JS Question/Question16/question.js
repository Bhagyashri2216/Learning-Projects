// 16. Check if the season is Autumn, Winter, Spring or Summer.If the user input is:
// - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer 

function season(month) {
    if (month == "September" || month == "October" || month == "November") {
        return `Wow you are in Autumn season`
    } else if (month == "December" || month == "January" || month == "February") {
        return `Take out your warm cloths you are in Winter season`
    } else if (month == "March" || month == "April" || month == "May") {
        return `Awesome you are in Spring season`
    } else if (month == "June" || month == "July" || month == "August") {
        return `Hot weather outside you are in Summer`
    } else {
        return "Invalid input entered.";
    }
}

let whichSeason = season("March");
console.log(whichSeason);