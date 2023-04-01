const btnCookie = document.querySelector("#btn-another-cookie");
const btnNewCookie = document.querySelector("#btn-another-cookie");
const imgCookieOpened = document.querySelector("#fortune-cookie-img");
const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");
const textFortune = document.querySelector("#text-fortune");
let index = 0;
const textList = [
  "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.",
  "Não viva para que a sua presença seja notada, mas para que a sua falta seja sentida.",
];

const tryAnotherCookie = btnCookie.addEventListener("click", notReload);
const cookieTest = imgCookieOpened.addEventListener("click", toogleScreens);
const nwCookie = btnNewCookie.addEventListener("click", toogleScreens);
const textToogle = imgCookieOpened.addEventListener("click", textValidation);

function notReload(e) {
  e.preventDefault();
}

function toogleScreens() {
  firstScreen.classList.toggle("hide");
  secondScreen.classList.toggle("hide");
}

function textValidation() {
  const currentText = (textFortune.innerText = textList[index]);
  index++;
  if (index >= textList.length) {
    index = 0;
  }
}
