const body = document.querySelector("body");

const IMG_NUM = 28;

function showingImg(imgNum) {
  const image = new Image();
  image.src = `js/img/${imgNum + 1}.jpg`;
  body.appendChild(image);
  image.classList.add("backgroundImg");
}

const randomNum = function () {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
};
showingImg(randomNum());
