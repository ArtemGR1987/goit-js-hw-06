"use strict";

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const inputTextEl = () => {
  if (inputEl.value.length > 0) {
    outputEl.textContent = inputEl.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", inputTextEl);
