const inputEl = document.querySelector("#validation-input");
const minLength = parseInt(inputEl.getAttribute("data-length"));

inputEl.addEventListener('blur', onInput);

function onInput(event) {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue.length === minLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}