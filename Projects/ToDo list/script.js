let todoItemsContainer = document.getElementById("todoItemsContainer");

let addTodoButton = document.getElementById("addTodoButton");
//creating list of items add assigning id to it 
let todoList = [
   {
    text : "Learn Html",
    uniqueNo : 1
   },
   {
    text : "Learn CSS",
    uniqueNo : 2
   },
   {
    text : "Learn JavaScript",
    uniqueNo : 3
   },
   {
    text : "Learn Bootstrap",
    uniqueNo : 4
   },
   {
    text : "Learn React.js",
    uniqueNo : 5
   },
   {
    text : "Learn Node.js",
    uniqueNo : 6
   }
  ];
  let  todosCount = todoList.length
  //as we call this function below defining here to access checkbox element
  function onTodoStatusChange(checkboxId, labelId){
    let checkboxElement =document.getElementById(checkboxId);
    console.log(checkboxElement.checked);
  
    let labelElement=document.getElementById(labelId);

    if (checkboxElement.checked === true){
      labelElement.classList.add("checked");
    }
    else{
      labelElement.classList.remove("checked")
    }
    //or toggle can be used in this case 
    //labelElement.classList.toggle("checked");
  }

 
  function onDeleteTodo(todoId) {
      let todoElement = document.getElementById(todoId);
      todoItemsContainer.removeChild(todoElement);
    
  }
//for each todoitem wehave to reuse below code so to reduce mutltiple use of code we use function
//sending todo as argument here to update corresponding todolist items here
function createAndAppendTodo(todoList) { 
let todoId = "todo"+todoList.uniqueNo;
let checkboxId ="Checkbox"+ todoList.uniqueNo;
let labelId="labelId"+todoList.uniqueNo;
//creating todo element
let todoElement = document.createElement("li"); // list item
todoElement.classList.add("todo-item-container", "d-flex", "flex-row" ); //to add css styleset 
todoElement.id=todoId;
todoItemsContainer.appendChild(todoElement); //adding todo element to toitem container 

//creating checkbox
let inputElement = document.createElement("input"); // create input element
inputElement.type = "checkbox";  //select its type
inputElement.id =  checkboxId; //giving it id
//defining function for event listner allocation 
inputElement.onclick=function(){
  onTodoStatusChange(checkboxId, labelId); //called function
}

inputElement.classList.add("checkbox-input"); // to add css stylesheet
todoElement.appendChild(inputElement); //add checkboxinput to todoelement

//creating lable container 
let labelConatiner = document.createElement("div"); // creating div conatiner for label
labelConatiner.classList.add("d-flex","flex-row","label-container"); //adding styleset
todoElement.appendChild(labelConatiner); //adding label container to todoelement

//creating label element
let labelElement = document.createElement("label");
labelElement.setAttribute("for", checkboxId);
labelElement.id=labelId;  //for attaching label id
labelElement.classList.add("checkbox-label");
labelElement.textContent=todoList.text     ////////////
labelConatiner.appendChild(labelElement);

//creating a delete icon container 
let deleteIconContainer = document.createElement("div"); //creating style
deleteIconContainer.classList.add("delete-icon-container");
labelConatiner.appendChild(deleteIconContainer);

//adding delete icon with i element 
let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
 ///onclick event listner and function calling 
deleteIcon.onclick = function () {
   onDeleteTodo(todoId);
   };
deleteIconContainer.appendChild(deleteIcon);
 }
 //(to call function for ouput 
//  createAndAppendTodo(todoList[0]);
//  createAndAppendTodo(todoList[1]);
//  createAndAppendTodo(todoList[2]);)

//to remove above repeatation of code LOOP -here lopp allow us to excute block of code several times 
for (let eachTodo of todoList){ 
  createAndAppendTodo(eachTodo);
} 

//defining that onclick fun that we called 
function onAddTodo(){
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;
  if (userInputValue === ""){
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount+1;
  let newTodo ={
    text: userInputValue,
    uniqueNo:todosCount
  }
  createAndAppendTodo(newTodo);
  userInputElement.value="";
}



//event listener for button
addTodoButton.onclick=function(){
  onAddTodo(); 
}

 



































// let todoItemsContainer = document.getElementById("todoItemsContainer");
// let addTodoButton = document.getElementById("addTodoButton");
// let saveTodoButton = document.getElementById("saveTodoButton");

// function getTodoListFromLocalStorage() {
//   let stringifiedTodoList = localStorage.getItem("todoList");
//   let parsedTodoList = JSON.parse(stringifiedTodoList);
//   if (parsedTodoList === null) {
//     return [];
//   } else {
//     return parsedTodoList;
//   }
// }

// let todoList = getTodoListFromLocalStorage();
// let todosCount = todoList.length;

// saveTodoButton.onclick = function() {
//   localStorage.setItem("todoList", JSON.stringify(todoList));
// };

// function onAddTodo() {
//   let userInputElement = document.getElementById("todoUserInput");
//   let userInputValue = userInputElement.value;

//   if (userInputValue === "") {
//     alert("Enter Valid Text");
//     return;
//   }

//   todosCount = todosCount + 1;

//   let newTodo = {
//     text: userInputValue,
//     uniqueNo: todosCount,
//     isChecked: false
//   };
//   todoList.push(newTodo);
//   createAndAppendTodo(newTodo);
//   userInputElement.value = "";
// }

// addTodoButton.onclick = function() {
//   onAddTodo();
// };

// function onTodoStatusChange(checkboxId, labelId, todoId) {
//   let checkboxElement = document.getElementById(checkboxId);
//   let labelElement = document.getElementById(labelId);
//   labelElement.classList.toggle("checked");

//   let todoObjectIndex = todoList.findIndex(function(eachTodo) {
//     let eachTodoId = "todo" + eachTodo.uniqueNo;

//     if (eachTodoId === todoId) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   let todoObject = todoList[todoObjectIndex];

//   if(todoObject.isChecked === true){
//     todoObject.isChecked = false;
//   } else {
//     todoObject.isChecked = true;
//   }

// }

// function onDeleteTodo(todoId) {
//   let todoElement = document.getElementById(todoId);
//   todoItemsContainer.removeChild(todoElement);

//   let deleteElementIndex = todoList.findIndex(function(eachTodo) {
//     let eachTodoId = "todo" + eachTodo.uniqueNo;
//     if (eachTodoId === todoId) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   todoList.splice(deleteElementIndex, 1);
// }

// function createAndAppendTodo(todo) {
//   let todoId = "todo" + todo.uniqueNo;
//   let checkboxId = "checkbox" + todo.uniqueNo;
//   let labelId = "label" + todo.uniqueNo;

//   let todoElement = document.createElement("li");
//   todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
//   todoElement.id = todoId;
//   todoItemsContainer.appendChild(todoElement);

//   let inputElement = document.createElement("input");
//   inputElement.type = "checkbox";  
//   inputElement.id = checkboxId;
//   inputElement.checked = todo.isChecked;
   
//   inputElement.onclick = function () {
//     onTodoStatusChange(checkboxId, labelId, todoId);
//   };

//   inputElement.classList.add("checkbox-input");
//   todoElement.appendChild(inputElement);

//   let labelContainer = document.createElement("div");
//   labelContainer.classList.add("label-container", "d-flex", "flex-row");
//   todoElement.appendChild(labelContainer);

//   let labelElement = document.createElement("label");
//   labelElement.setAttribute("for", checkboxId);
//   labelElement.id = labelId;
//   labelElement.classList.add("checkbox-label");
//   labelElement.textContent = todo.text;
//   if (todo.isChecked === true) {
//     labelElement.classList.add("checked");
//   }
//   labelContainer.appendChild(labelElement);

//   let deleteIconContainer = document.createElement("div");
//   deleteIconContainer.classList.add("delete-icon-container");
//   labelContainer.appendChild(deleteIconContainer);

//   let deleteIcon = document.createElement("i");
//   deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

//   deleteIcon.onclick = function () {
//     onDeleteTodo(todoId);
//   };

//   deleteIconContainer.appendChild(deleteIcon);
// }

// for (let todo of todoList) {
//   createAndAppendTodo(todo);
// }