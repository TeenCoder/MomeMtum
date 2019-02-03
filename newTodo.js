const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    toDoUl = document.querySelector("ul");

const toDoDiv = document.querySelector(".todo-div"),
    toDoBt = document.querySelector(".todo-button");

const TODO_LS = "toDos";

let toDos = [];

function handleToDoBtClick(){
    console.log("clicked");
    toDoDiv.classList.toggle("dis-div");
    toDoList.classList.toggle("dis-div")
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodos();
}

function prgsBtnHandle(event){
    const btn = event.target;
    const li = btn.parentNode;
    li.classList.add("words");
    li.classList.toggle("on-progress");
}

function saveTodos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const prgsBtn = document.createElement("button");
    const newId = toDos.length + 1
    delBtn.innerText = "❌"
    prgsBtn.innerText = "➡"
    delBtn.addEventListener("click", deleteToDo);
    prgsBtn.addEventListener("click", prgsBtnHandle);
    span.innerText = `${text}    `
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(prgsBtn);
    li.id = newId;
    toDoList.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveTodos();
    console.log(toDos);
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(toDos.length);
    if (toDos.length > 7){
        alert("Todolist Overloaded!");
        toDoInput.value = "";
        toDoInput.placeholder = "todolist overloaded";
    } else {
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }
};

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    };
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    toDoBt.addEventListener("click", handleToDoBtClick);
}

init();