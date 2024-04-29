let inputBox = document.querySelector('#input-box');
let listContainer = document.querySelector('#list-container');


function addTask(){

    if (inputBox.value === ''){
        alert('Please enter a task');
    }

    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "&#10006";
        li.appendChild(span);   
}
inputBox.value = "";
saveData();
}



listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
}, false);



function saveData(){
    localStorage.setItem("date", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("date");
}

showTasks();