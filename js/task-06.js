const inputEl = document.querySelector("#validation-input");
const minLength = inputEl.getAttribute("data-length");

inputEl.addEventListener('blur', onInput);
function onInput(event) {
    const inputValue = event.currentTarget.value;
    inputValue.length === minLength ? inputEl.classList.add("valid") : inputEl.classList.add("invalid");
}
