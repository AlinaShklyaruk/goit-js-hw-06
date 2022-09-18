const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('span#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    const sizeEl = event.currentTarget.value;
    textEl.style.fontSize = `${sizeEl}px`;
}