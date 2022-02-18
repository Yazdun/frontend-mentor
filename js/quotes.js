const quotes = [
  {
    desc: " Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.",
    image: "./images/profile-1.jpg",
    name: "Satish Patel",
    position: "Founder & CEO, Huddle",
  },
  {
    desc: " Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: "./images/profile-2.jpg",
    name: "Bruce McKenzie",
    position: "Founder & CEO, Huddle",
  },
  {
    desc: " Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: "./images/profile-3.jpg",
    name: "Iva Boyd",
    position: "Founder & CEO, Huddle",
  },
];

const renderQuote = (quote) => {
  return `
      <p>${quote.desc}</p>
      <div class="card__info">
        <img src=${quote.image} alt="${quote.name}" />
        <p>${quote.name}<span>${quote.position}</span></p>
      </div>
      `;
};

quotes.forEach((quote) => {
  let Card = document.createElement("div");
  Card.className = "card";
  Card.innerHTML = renderQuote(quote);
  document.getElementById("quotes").appendChild(Card);
});
