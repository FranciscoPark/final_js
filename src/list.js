const toDoForm = document.getElementById("js-toDoForm");
const toDoInput = document.querySelector("#js-toDoForm input");
const toDoList = document.getElementById("js-toDoList");

let toDos = [];
const key = "todos";

function saveToDos() {
   localStorage.setItem(key, JSON.stringify(toDos));
 }

function deleteToDo(event) {
    const btn = event.target; 
    const li = btn.parentNode; 
    toDoList.removeChild(li); 
    const cleanToDos = toDos.filter(function(toDo){ 
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;  
    saveToDos();   
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const newId = toDos.length + 1;
    span.innerText = newTodo;

    button.innerText = "🎾";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: newTodo,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
  }

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadTodos() {
    const loadedToDos = localStorage.getItem(key);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();