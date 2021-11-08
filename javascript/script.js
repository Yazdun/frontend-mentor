// -----------------------------------------------------------------------------
// This file contains all application-wide Javascripts.
// -----------------------------------------------------------------------------

var buttons = document.getElementsByClassName("btn");
var alert = document.getElementById("alert");
var closeAlert = document.getElementById("closeAlert");

for (var i = 0; i < buttons.length; i++) {
  console.log(buttons[i].classList);
  buttons[i].addEventListener("click", () => {
    alert.classList.remove("hide");
    alert.classList.add("active");
  });
}

closeAlert.addEventListener("click", () => {
  alert.classList.remove("active");
  alert.classList.add("hide");
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    // pass
  } else {
    alert.classList.remove("active");
    alert.classList.add("hide");
  }
});
