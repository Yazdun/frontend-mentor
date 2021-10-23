// -----------------------------------------------------------------------------
// This file contains all application-wide Javascripts.
// -----------------------------------------------------------------------------

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formSubmit = document.getElementById("formSubmit");

// a function to validate email value
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email); // returns boolen
}

// this function gets array of elements which is our input elements,
// and checks if value is empty or not

function alertHandler(elements) {
  elements.forEach((element) => {
    // looping through param
    !element.value // if value is not exists then ...
      ? element.classList.add("alert") // add alert class to the element
      : element.classList.remove("alert"); // but in case there is a value, remove alert class
  });
}

formSubmit.addEventListener("click", (e) => {
  e.preventDefault(); // this prevents page from default action which is refresh

  alertHandler([firstName, lastName, password]); // loops through inputs

  !validateEmail(email.value) // validates email
    ? email.classList.add("alert")
    : email.classList.remove("alert");
});
