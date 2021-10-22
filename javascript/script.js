const form = document.forms.notification;
const email = document.getElementById("email");
const alert = document.getElementById("alert");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", emailValidation);

// function to validate email on submit
function emailValidation(e) {
  e.preventDefault();

  let emailValue = email.value;
  const validEmail = validateEmail(emailValue); //validate email

  if (!validEmail) {
    // if not valid return error
    form.classList.remove("alert--success");
    form.classList.add("alert--error");
    alert.innerText = "Please provide a valid emaill address";
    return;
  } else {
    // if valid retrun success message
    form.classList.remove("alert--error");
    form.classList.add("alert--success");
    alert.innerText = "You will be notified !";
    return;
  }
}

function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email); // returns boolen
}
