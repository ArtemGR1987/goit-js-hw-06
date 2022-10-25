"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const pass = event.target.elements.password.value;

  if (!email || !pass) {
    return alert("Заполните, пожалуйста, все поля");
  }

  const Obj = { email, pass };
  console.log(Obj);
  form.reset();
}
