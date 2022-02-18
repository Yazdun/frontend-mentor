const input = document.getElementById("input");
const formSubmit = document.getElementById("formSubmit");
const error = document.getElementById("error");
const formSuccess = document.getElementById("formSuccess");
const formBody = document.getElementById("formBody");

let isTouched = false;
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email); // returns boolen
}

formSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  isTouched = true;

  switch (validateEmail(input.value)) {
    case true:
      error.classList.remove("show");
      formBody.classList.add("form__body__hide");
      formSuccess.classList.add("form__success__active");
      break;
    case false:
      error.classList.add("show");
      break;
    default:
      break;
  }
});

input.addEventListener("input", (e) => {
  isTouched && !validateEmail(e.target.value)
    ? error.classList.add("show")
    : error.classList.remove("show");
});
