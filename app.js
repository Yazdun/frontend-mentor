const buttons = [
  {
    icon: "./images/icon-document.svg",
    alt: "document",
  },
  {
    icon: "./images/icon-folder.svg",
    alt: "folder",
  },
  {
    icon: "./images/icon-upload.svg",
    alt: "upload",
  },
];

function func(item) {
  return `<img src=${item.icon} alt=${item.alt} />`;
}

buttons.forEach((btn) => {
  let Button = document.createElement("button");
  Button.innerHTML = func(btn);
  document.getElementById("btnSection").appendChild(Button);
});
