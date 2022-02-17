const navLinks = [
  {
    title: "features",
    url: "#",
  },
  {
    title: "team",
    url: "#",
  },
  {
    title: "sign in",
    url: "#",
  },
];

const renderLink = (link) => {
  return `<a href=${link.url}>${link.title}</a>`;
};

navLinks.forEach((link) => {
  let ListItem = document.createElement("li");
  ListItem.innerHTML = renderLink(link);
  document.getElementById("navigation").appendChild(ListItem);
});
