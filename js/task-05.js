const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");
const emptyInput = outputEl.textContent;
console.log(emptyInput);
inputEl.addEventListener("change", onInputChange);
function onInputChange(event) {
    const inputValue = event.currentTarget.value;
    if (inputValue !== '') {
        outputEl.textContent = inputValue;
    } 
    return emptyInput;
}