const createEl = document.querySelector('button[data-create]');
const deleteEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');




createEl.addEventListener('click', () => onCreateBtn(inputEl.value));
deleteEl.addEventListener('click', onDestroyBtn);

function onCreateBtn(numberOfBoxes) {
  for (let i = 1; i <= numberOfBoxes; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${20 + i * 10}px`;
    boxEl.style.height = `${20 + i * 10}px`;
    boxesEl.appendChild(boxEl);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onDestroyBtn() {
  boxesEl.innerHTML = '';
}
