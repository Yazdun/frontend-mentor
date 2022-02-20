const btn = document.getElementById("btn");
const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const card = document.getElementById("card");
const errorText = document.getElementById("errorText");
const loading = document.getElementById("loading");
const url = "https://api.adviceslip.com/advice";

const hideElement = (element) => (element.style.display = "none");
const showElement = (element) => (element.style.display = "inline-block");

async function getAdvice() {
  card.classList.add("hide");
  showElement(loading);
  try {
    const res = await fetch(url);
    const data = await res.json();
    card.classList.remove("hide");
    hideElement(loading);
    adviceId.textContent = data.slip.id;
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    console.log(error);
    showElement(errorText);
    hideElement(loading);
    hideElement(card);
  }
}

btn.addEventListener("click", getAdvice);
