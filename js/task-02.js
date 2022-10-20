const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const createEl = ingredients.map((element) => {
  const ingredientsItemsEl = document.createElement("li");
  ingredientsItemsEl.classList.add("item");
  ingredientsItemsEl.textContent = element;

  return ingredientsItemsEl;
});

ingredientsEl.append(...createEl);
