const nameForm = document.querySelector(".js-name-form");
const nameInput = nameForm.querySelector("input");
const greetingText = document.querySelector(".js-hello");

const USER_NAME = "user";

function saveLocalStorage(text) {
  localStorage.setItem(USER_NAME, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const user = nameInput.value;
  showingName(user);
  saveLocalStorage(user);
}

function showingName(text) {
  nameForm.classList.add("display-none");
  greetingText.classList.remove("display-none");
  greetingText.classList.add("showing");
  greetingText.innerHTML = `Hello, ${text}! Have a nice day!`;
}

function askForName() {
  nameForm.addEventListener("submit", handleSubmit);
}

function loadUserName() {
  const currentUser = localStorage.getItem(USER_NAME);
  if (currentUser === null) {
    askForName();
  } else {
    showingName(currentUser);
  }
}

loadUserName();
