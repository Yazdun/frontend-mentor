// -----------------------------------------------------------------------------
// This file contains all application-wide Javascripts.
// -----------------------------------------------------------------------------

// Javascript codes which handles alert states
var buttons = document.getElementsByClassName("btn");
var alert = document.getElementById("alert");
var closeAlert = document.getElementById("closeAlert");

const classHandler = (className) => {
  let classNames = ["hide", "active"];

  const filteredClassNames = classNames.filter((el) => {
    return el !== className;
  });

  alert.classList.add(className);
  alert.classList.remove(filteredClassNames[0]);
};

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    classHandler("active");
    alert.ariaLive = true;
  });
}

closeAlert.addEventListener("click", () => {
  classHandler("hide");
  alert.ariaLive = false;
  console.log(alert.ariaLive);
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    // pass
  } else {
    classHandler("hide");
    alert.ariaLive = false;
  }
});

// Javascript codes which handles animation on scroll
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// Javascript codes which handles theme states
const themeToggler = document.getElementById("themeToggler");

let darkModeState = false;

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

if (useDark && !localStorage.getItem("dark-mode")) {
  setDarkModeLocalStorage(true);
}

function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

toggleDarkMode(localStorage.getItem("dark-mode") == "true");

useDark.addListener((evt) => toggleDarkMode(evt.matches));

themeToggler.addEventListener("click", () => {
  darkModeState = !darkModeState;
  themeToggler.ariaPressed = darkModeState;
  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
});
