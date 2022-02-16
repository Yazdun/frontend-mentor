const buttons = [
  {
    icon: "./images/icon-document.svg",
  },
  {
    icon: "./images/icon-folder.svg",
  },
  {
    icon: "./images/icon-upload.svg",
  },
];

function func(btn) {
  return `
      <object
          data=${btn.icon}
          type="image/svg+xml"
      ></object>
     `;
}

buttons.forEach((btn) => {
  let Button = document.createElement("button");
  Button.innerHTML = func(btn);
  document.getElementById("btnSection").appendChild(Button);
});
