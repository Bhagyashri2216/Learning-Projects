let stopLightEl = document.getElementById("stopLight");
let stopButtonEl= document.getElementById("stopButton");
let readyLightEl = document.getElementById("readyLight");
let readyButtonEl = document.getElementById("readyButton");
let goLightEl = document.getElementById("goLight");
let goButtonEl = document.getElementById("goButton");


function Buttonstop(){
    stopLightEl.style.backgroundColor = "#cf1124"
    stopButtonEl.style.backgroundColor = "#cf1124";

    readyLightEl.style.backgroundColor ="#4b5069";
    readyButtonEl.style.backgroundColor ="#1f1d41";

    goLightEl.style.backgroundColor="#4b5069";
    ggoButtonEl.style.backgroundColor="#1f1d41";

}

function Buttonready(){
    readyLightEl.style.backgroundColor ="#f7c948"
    readyButtonEl.style.backgroundColor ="#f7c948"

    stopLightEl.style.backgroundColor ="#4b5069";
    stopButtonEl.style.backgroundColor ="#1f1d41";

    goLightEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor="#1f1d41";
    
    
}

function Buttongo(){
    goLightEl.style.backgroundColor = "#199473";
    goLightEl.style.backgroundColor = "#199473" ;

    stopLightEl.style.backgroundColor ="#4b5069";
    stopButtonEl.style.backgroundColor ="#1f1d41";

    readyLightEl.style.backgroundColor ="#4b5069";
    readyButtonEl.style.backgroundColor ="#1f1d41";
    
}