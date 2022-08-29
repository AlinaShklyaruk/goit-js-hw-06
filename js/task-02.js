const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//const ingredientsEl = document.createElement("li");
//ingredients.forEach(function (ingredient) {
//  ingredientsEl.textContent = ingredient;
//
//});
//console.log(ingredient);
const elements = [];
const ingredientsList = document.querySelector("#ingredients");
const addIngredients = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = ingredient;
  elements.push(ingredientsEl);
});
ingredientsList.append(...elements);