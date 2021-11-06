// -----------------------------------------------------------------------------
// This file contains all application-wide Javascripts.
// -----------------------------------------------------------------------------

const btnSubmit = document.getElementById("btnSubmit");
const frmSubmit = document.getElementById("submitForm");
const frmAlert = document.getElementById("alert");
const txtAlert = document.getElementById("txtAlert");
const emailInput = document.getElementById("emailInput");
const closeAlert = document.getElementById("closeAlert");

// This function recieves two params :
// form => the form that we are going to use function on
// className => class name that we want to add to the form

function classHandler(form, className) {
  // here is all classnames that our form is using,
  // we want to add param class to the form and remove the rest of them from the form
  let classNames = ["success", "error", "neutral"];

  // Filter classNames array and remove param class, so the other two remains
  // and then we can remove them
  const filteredClassNames = classNames.filter((el) => {
    return el !== className;
  });

  // add param class to the form
  form.classList.add(className);

  // remove the rest of them from the form
  filteredClassNames.map((classNameToRemove) => {
    form.classList.remove(classNameToRemove);
  });
}

// alertHandler is a function which handles all our alert states for us
// It recieves 5 params in order to do the job
// form => our form which we want to handle it's alerts
// element => element which we want to add our alert text to it
// successText => text for our successful alert
// errorText => text for our error alert
// neutralText => text for our neutral alert
function alertHandler(form, element, successText, errorText, neutralText) {
  this.form = form;
  this.element = element;
  this.successText = successText;
  this.neutralText = neutralText;
  let count = 0; //we use this for error func to count how many times user has entered invalid email

  // success func
  this.success = function () {
    classHandler(form, "success");
    element.innerText = successText;
    count = 0; //if email is valid then reset the error count
  };
  // error func
  this.error = function () {
    classHandler(form, "error");
    count >= 2
      ? (element.innerText = "Correct email format : test@fem.io") // If user has entered wrong email more than twice show them correct format
      : (element.innerText = errorText); // if email is invalid show error text
    count += 1;
  };
  // neutral func
  this.neutral = function () {
    classHandler(form, "neutral");
    element.innerText = neutralText;
  };
  // clear all classes func
  this.clear = function () {
    form.classList.remove("success", "neutral", "error");
  };
}

// a function to validate emails
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

// saves submitted emails so user cant submit a email twice
let submittedEmails = [];

// creating new instance of alertHandler object
let alert = new alertHandler(
  frmAlert,
  txtAlert,
  "Thanks for the submission !",
  "This email is not valid !",
  "This email is already submitted !"
);

// function to validate form on submit
function submitForm() {
  if (submittedEmails.includes(emailInput.value)) {
    alert.neutral(); // if email already exists then we show the user that they cant submit a email twice
  } else {
    const validEmail = validateEmail(emailInput.value);
    if (validEmail) {
      alert.success();
      submittedEmails.push(emailInput.value);
    } else if (!validEmail) {
      alert.error();
    }
  }
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  submitForm();
});

closeAlert.addEventListener("click", () => {
  alert.clear();
});

// handle submit on pressing enter on keyboard
document.onkeydown = function () {
  if (window.event.keyCode == "13") {
    submitForm();
  }
};
