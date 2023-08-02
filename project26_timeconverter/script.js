let convertBtnEl = document.getElementById("convertBtn");

convertBtnEl.addEventListener("click", function getSeconds(){
    let hoursInputEl =parseInt(document.getElementById("hoursInput").value)
    let minuteInputEl = parseInt(document.getElementById("minutesInput").value);
    let seconds=((hoursInputEl)*60+ minuteInputEl)*60

    let errmsgEl=document.getElementById("errorMsg")
    let showSeconds=document.getElementById("timeInSeconds")

    if (isNaN(hoursInputEl) || isNaN(minuteInputEl)){
        errmsgEl.textContent="Please Enter any value";
        errmsgEl.style.color=#f7faf5;
    }else{
        showSeconds.textContent=seconds;
        showSeconds.style.color=#ffffff;
    }

})