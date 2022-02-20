const btn = document.getElementById("btn");
const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const card = document.getElementById("card");
const loading = document.getElementById("loading");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  card.classList.add("hide");
  loading.style.display = "inline-block";
  try {
    const res = await fetch(url);
    const data = await res.json();
    card.classList.remove("hide");
    loading.style.display = "none";
    adviceId.textContent = data.slip.id;
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", getAdvice);
