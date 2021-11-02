// -----------------------------------------------------------------------------
// This file contains all application-wide Javascripts.
// -----------------------------------------------------------------------------

const social = document.getElementById("social");
const share = document.getElementById("share");

window.addEventListener("click", (e) => {
  try {
    if (e.target.classList.contains("fa-share")) {
      social.classList.toggle("active");
    } else if (
      e.target.classList.contains("social") ||
      e.target.parentElement.classList.contains("social") ||
      e.target.parentElement.parentElement.classList.contains("social")
    ) {
      return;
    } else {
      social.classList.remove("active");
    }
  } catch (error) {
    social.classList.remove("active");
  }
});
