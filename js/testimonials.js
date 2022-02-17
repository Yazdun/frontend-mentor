const testimonials = [
  {
    image: "./images/icon-access-anywhere.svg",
    title: "Access your files, anywhere",
    desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    image: "./images/icon-security.svg",
    title: "Security you can trust",
    desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    image: "./images/icon-collaboration.svg",
    title: "Real-time collaboration",
    desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    image: "./images/icon-any-file.svg",
    title: "Store any type of file",
    desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const renderTestimonials = (item) => {
  return `
    <img src=${item.image} role="presentation" />
    <h2>${item.title}</h2>
    <p>${item.desc}</p>
    `;
};

testimonials.forEach((item) => {
  let Article = document.createElement("article");
  Article.innerHTML = renderTestimonials(item);
  document.getElementById("testimonials").appendChild(Article);
});
