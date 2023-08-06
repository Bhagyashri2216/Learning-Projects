let searchInputEl = document.getElementById("searchInput");
let searchResultEl = document.getElementById("searchResult");
let message = document.getElementById("message");
let headingEl = document.getElementById("h1");
let spinnerEl =document.getElementById("spinner");
function appendSearchResults(search_results){
    if(search_results.length<1){
    message.textContent = "No results found";
    searchResultEl.textContent="";
    headingEl.textContent="";
    }else {
    searchResultEl.textContent="";
    message.textContent="";
    headingEl.textContent="Popular Books";
    searchResultEl.appendChild(headingEl);
    for(let eachItem of search_results){
        let title = eachItem.title;
        let image = eachItem.imageLink
        let author = eachItem.author;
        let imageEl = document.createElement("img");
        let textEl = document.createElement("p")
        imageEl.setAttribute("src", image);
        textEl.textContent = author;
        searchResultEl.appendChild(imageEl);
        searchResultEl.appendChild(textEl);
        console.log(eachItem)
      }
    }
}

searchInputEl.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        spinnerEl.classList.toggle("d-none");

        let searchInputValue = searchInputEl.value;
        let url ="https://apis.ccbp.in/book-store?title=india" + searchInputValue;
        let options ={
            method : "GET"

        };
        fetch(url,options)
        .then(function(respose){
            return respose.json();
        })
        .then(function(jsonData){
            let{
                search_results
             }=jsonData;
             appendSearchResults(search_results);
             spinnerEl.classList.toggle("d-none");
             });
    }
});

