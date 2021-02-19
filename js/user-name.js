const nameForm = document.querySelector(".js-name-form");
const nameInput = nameForm.querySelector("input");
const greetingText = document.querySelector(".js-hello");

const USER_NAME = "user";

function showingName() {}

function loadUserName() {
  const currentUser = localStorage.getItem(USER_NAME);
  if (currentUser === null) {
    // 이름을 get해서 로컬에 저장시키기
  } else {
    showingName();
  }
}
