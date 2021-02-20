const toDoList = document.querySelector(".js-todo"),
  completeList = document.querySelector(".js-complete");
const toDoForm = document.querySelector(".to-do-form");
const inputToDo = toDoForm.querySelector("input");

const TODOS_LS = "ToDos";
const COMPLETE_LS = "complete";

const toDos = [];
const complete = [];

function saveToDoInLocal() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  localStorage.setItem(COMPLETE_LS, JSON.stringify(complete));
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputToDo.value;
  showingToDo(currentValue);
  showingComplete(currentValue);
  inputToDo.value = "";
}

function deleteToDo() {}
function goToComplete() {}
function showingToDo(text) {
  const list = document.createElement("li");
  const content = document.createElement("span");
  const delBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const newId = toDos.length + 1;
  content.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  completeBtn.innerText = "☑️";
  completeBtn.addEventListener("click", goToComplete);
  list.appendChild(content);
  list.appendChild(delBtn);
  list.appendChild(completeBtn);
  list.id = newId;
  toDoList.appendChild(list);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDoInLocal();
}

function showingComplete(text) {
  const list = document.createElement("li");
  const content = document.createElement("span");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const newId = toDos.length + 1;
  content.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", goToComplete);
  list.appendChild(content);
  list.appendChild(delBtn);
  list.appendChild(backBtn);
  list.id = newId;
  completeList.appendChild(list);
  const completeObj = {
    text: text,
    id: newId,
  };
  complete.push(completeObj);
  saveToDoInLocal();
}

function parsedToDo() {
  const loadedToDo = localStorage.getItem(TODOS_LS);
  const loadedComplete = localStorage.getItem(COMPLETE_LS);
  const parsedToDo = JSON.parse(loadedToDo);
  const parsedComplete = JSON.parse(loadedComplete);
}

parsedToDo();
toDoForm.addEventListener("submit", handleSubmit);
