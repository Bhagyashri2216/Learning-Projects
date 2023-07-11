let profileDetails = {
    imgSrc: "https://img.freepik.com/free-vector/young-woman-field-character-scene_24877-57892.jpg?w=740&t=st=1689100603~exp=1689101203~hmac=6ecdb8e04bdcb00fbd58de7e33647733fc4fca2f912a022682e3426895f4215d",
    name: "BHAGYASHRI FASALE",
    age: 27,
    headline :"Web Developer"

};

let profileContainerEl=document.getElementById("profileContainer");
profileContainerEl.classList.add( "text-center","d-flex", "flex-column", "justify-content-center"  )

//1.accessing img container created in html
let imgContainerEl=document.getElementById("imgContainer");

// created userprofileimg and apened it to imgcontainer 
let imgEl=document.createElement("img");
imgEl.setAttribute("src", profileDetails.imgSrc);
imgEl.classList.add("profile-img");
imgContainerEl.append(imgEl);

//created nameEl and append it to the profileContainerEl
let nameEl = document.createElement("h1");
nameEl.classList.add("profile-name");
nameEl.textContent = profileDetails.name;
profileContainerEl.appendChild(nameEl);

//created ageEl and append it to the profileContainerEl
let ageEl = document.createElement("p");
ageEl.classList.add("age");
ageEl.textContent = "Age " + profileDetails.age;
profileContainerEl.appendChild(ageEl);


//created headlineEl and append it to the profileContainerEl
let headlineEl=document.createElement("p");
headlineEl.classList.add("headline");
headlineEl.textContent=profileDetails.headline;
profileContainerEl.appendChild(headlineEl);



