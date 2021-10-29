// -----------------------------------------------------------------------------
// This file contains all application-wide Javascripts.
// -----------------------------------------------------------------------------

const button = document.getElementById("themeToggler");

let lightModeState = false;

// Toggles the "dark-mode" class
function toggleLightMode(state) {
  document.documentElement.classList.toggle("light-mode", state);
  lightModeState = state;
}

// Sets localStorage state
function setLightModeLocalStorage(state) {
  localStorage.setItem("light-mode", state);
}

// Initial setting
toggleLightMode(localStorage.getItem("light-mode") == "true");

// Toggles the "dark-mode" class on click and sets localStorage state
button.addEventListener("click", () => {
  lightModeState = !lightModeState;

  toggleLightMode(lightModeState);
  setLightModeLocalStorage(lightModeState);
});
