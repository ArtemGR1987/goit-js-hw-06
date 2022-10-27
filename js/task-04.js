"use strict";
const incrementBtnEl = document.querySelector(`[data-action="increment"]`);
const decrementBtnEl = document.querySelector(`[data-action="decrement"]`);
const spunEl = document.querySelector(`#value`);
let counterValue = 0;

incrementBtnEl.addEventListener(`click`, () => {
  counterValue += 1;
  spunEl.textContent = counterValue;
});

decrementBtnEl.addEventListener(`click`, () => {
  counterValue -= 1;
  spunEl.textContent = counterValue;
});
