const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const list = document.querySelector("#ingredients");
// const itemEl = [];

// ingredients.map((ingredient) => {
//   const element = document.createElement("li");
//   element.textContent = ingredient;
//   element.classList.add("item");

//   itemEl.push(element);
//   list.append(element);
// });

const ingredientsEl = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  return ingredientItem;
});
document.querySelector("#ingredients").append(...ingredientsEl);
