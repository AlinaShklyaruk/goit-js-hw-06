const createEl = document.querySelector('data-create');
const deleteEl = document.querySelector('data-destroy');

createEl.addEventListener('click', onCreateBtn);
deleteEl.addEventListener('click', onDestroyBtn);

function onCreateBtn() {
  const boxEl = document.createElement('div');
  boxEl.backgroundColor = getRandomHexColor();


}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
