/* intro js and variable */
// console.log("Hello Universe,Thank you!!!");          //Hello Universe,Thank you!!!

// let message="Hi universe";
// console.log(message)               // Hi universe

// let msg;
// msg="Hi universe"
// console.log(msg)                  //Hi universe

//let msg1;
 //console.log(msg1)               //undefined (printing variable without value)

 //how to link html to css and html to js in vs code 
//<link rel="stylesheet" href="./style.css">  //(to link html to css write it above document in html below meta tag)
//<script src="script.js"></script>  //(to link js htmlto js write this link at bottom end of body tag)


/* DOM and Even manipulation */


 function switchOff(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent="Switched Off";
    document.getElementById("offSwitch").style.backgroundColor="#cbd2d9";
    document.getElementById("onSwitch").style.backgroundColor="#22c55e";

 }

 function switchOn(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent="Switched On";
    document.getElementById("offSwitch").style.backgroundColor="#e12d39";
    document.getElementById("onSwitch").style.backgroundColor="#cbd2d9";

 }