import { getAdvice, adviceContainer } from "./template.js";

// upon page load call the function instantly
window.addEventListener("load", (e) => {
  getAdvice();
});

adviceContainer.addEventListener("click", (e) => {
  if (e.target.closest(".dice")) {
    // upon clicking the dice button clear the previous advice
    adviceContainer.innerHTML = "";
    // call the function when button is clicked
    getAdvice();
  }
});

// if dice button not clicked change the advice after each 30seconds
const changeAdvice = function () {
  setInterval(() => {
    adviceContainer.innerHTML = "";
    getAdvice();
  }, 30000);
};
changeAdvice();
