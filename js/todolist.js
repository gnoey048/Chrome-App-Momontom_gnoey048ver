const toDoList = document.querySelector(".js-todo"),
  completeList = document.querySelector(".js-complete");
const toDoForm = document.querySelector(".to-do-form");
const inputToDo = toDoForm.querySelector("input");

const TODOS_LS = "ToDos";

function saveToDoInLocal(text) {
  localStorage.setItem(TODOS_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputToDo.value;
  saveToDoInLocal(currentValue);
}

function showingToDo() {}

toDoForm.addEventListener("submit", handleSubmit);
