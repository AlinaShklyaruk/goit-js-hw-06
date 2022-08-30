const incrementButton = document.querySelector("button[data-action='increment']");
const decrementButton = document.querySelector("button[data-action='decrement']");
const valueEl = document.querySelector("#value");

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

incrementButton.addEventListener("click", function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});
decrementButton.addEventListener("click", function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});