let inputElement = document.getElementById("inputElement");
let signInElementText =document.getElementById("signInText");


function signIn(){
    let inputValue=inputElement.value ;
    let verifyText="Hello "+inputValue+", verifying your account..!";
    signInElementText.textContent=verifyText;

}


