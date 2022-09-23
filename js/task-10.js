const createEl = document.querySelector('button[data-create]');
const deleteEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input type="number"');
const boxesEl = document.querySelector('#boxes');



const numberOfBoxes = inputEl.value;

console.log(numberOfBoxes);

createEl.addEventListener('click', onCreateBtn(numberOfBoxes));
deleteEl.addEventListener('click', onDestroyBtn);

function onCreateBtn(numberOfBoxes) {
  for (let i = 0; i <= numberOfBoxes; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.backgroundColor = getRandomHexColor();
    boxEl.width = `${30 + i * 10}px`;
    boxEl.height = `${30 + i * 10}px`;
    boxesEl.appendChild(boxEl);
  }
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
