const buttonEl = document.querySelector('button.change-color');
const colorEl = document.querySelector('span.color');
const bodyEl = document.querySelector('body');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonEl.addEventListener('click', changeColor);

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = `${bodyEl.style.backgroundColor}`;
}