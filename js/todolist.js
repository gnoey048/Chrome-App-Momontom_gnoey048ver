const toDoList = document.querySelector(".js-todo");
const toDoForm = document.querySelector(".to-do-form");
const inputToDo = toDoForm.querySelector("input");

const TODOS_LS = "ToDos";

let toDos = [];

function saveToDoInLocal() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputToDo.value;
  showingToDo(currentValue);
  inputToDo.value = "";
}

function deleteToDo() {
  const targetLi = this.parentNode;
  toDoList.removeChild(targetLi);
  const cleanToDos = toDos.filter(function (todo) {
    return todo.id !== parseInt(targetLi.id);
  });
  toDos = cleanToDos;
  saveToDoInLocal();
}

function showingToDo(text) {
  const list = document.createElement("li");
  const content = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  content.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  list.appendChild(content);
  list.appendChild(delBtn);
  list.id = newId;
  list.classList.add("js-toDoList");
  toDoList.appendChild(list);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDoInLocal();
}

function parsedToDo() {
  const loadedToDo = localStorage.getItem(TODOS_LS);
  if (loadedToDo !== null) {
    const parsedToDo = JSON.parse(loadedToDo);
    parsedToDo.forEach((el) => {
      showingToDo(el.text);
    });
  }
}

function init() {
  parsedToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
