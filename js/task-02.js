const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

console.log(ingredients);

const newLiEl = document.createElement("li");
newLiEl.textContent = "Potatoes";
newLiEl.classList.add("item");
//console.log(newLiEl);

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.appendChild(newLiEl);
console.log(ingredientsEl);
