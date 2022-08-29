const categoryList = document.querySelectorAll(".item");
const message = `Number of categories: ${categoryList.length}`;
console.log(message);

[...categoryList].forEach(function (element, index) {
    const categoryTitle = element.querySelector("h2");
    const categoryItems = element.querySelectorAll("li");
    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryItems.length}`);
});

