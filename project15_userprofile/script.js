let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "BHAGYASHRI FASALE",
    age: 27
};

let profileContainerEl=document.getElementById("profileContainer");
profileContainerEl.classList.add("d-flex", "text-center", "flex-column", "justify-content-center"  )

//1.accessing img container created in html
let imgContainerEl=document.getElementById("imgContainer");

// created userprofileimg and apened it to imgcontainer 
let imgEl=document.createElement("img");
imgEl.setAttribute("src", profileDetails.imgSrc);
imgEl.classList.add("profile-img");
imgContainerEl.append(imgEl);

let nameEl = document.createElement("h1");
nameEl.classList.add("profile-name");
nameEl.textContent = profileDetails.name;
profileContainerEl.appendChild(nameEl);

let ageEl = document.createElement("p");
ageEl.classList.add("age");
ageEl.textContent = "Age: " + profileDetails.age;
profileContainerEl.appendChild(ageEl);