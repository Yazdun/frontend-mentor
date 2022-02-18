const contactInfo = [
  {
    icon: "./images/icon-phone.svg",
    info: +1 - 543 - 123 - 4567,
  },
  {
    icon: "./images/icon-email.svg",
    info: "example@fylo.com",
  },
];

const linksOne = [
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Jobs",
    url: "#",
  },
  {
    title: "Press",
    url: "#",
  },
  {
    title: "Blog",
    url: "#",
  },
];

const linksTwo = [
  {
    title: "Contact Us",
    url: "#",
  },
  {
    title: "Terms",
    url: "#",
  },
  {
    title: "Privacy",
    url: "#",
  },
];

const renderContact = (item) => {
  return ` 
      <img src=${item.icon} role="presentation" alt="" />
      ${item.info}`;
};

const renderLinks = (link) => {
  return `<a href=$${link.url}>${link.title}</a>`;
};

contactInfo.forEach((contact) => {
  let ListItem = document.createElement("li");
  ListItem.innerHTML = renderContact(contact);
  document.getElementById("footerContacts").appendChild(ListItem);
});

linksOne.forEach((link) => {
  let ListItem = document.createElement("li");
  ListItem.innerHTML = renderLinks(link);
  document.getElementById("linksOne").appendChild(ListItem);
});

linksTwo.forEach((link) => {
  let ListItem = document.createElement("li");
  ListItem.innerHTML = renderLinks(link);
  document.getElementById("linksTwo").appendChild(ListItem);
});
