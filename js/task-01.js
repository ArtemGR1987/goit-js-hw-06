"use strict";

const liItemEl = document.querySelectorAll(".item");
console.log(`Number of categories : ${liItemEl.length}`);

const allDataEl = liItemEl.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
