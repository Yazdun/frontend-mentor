// -----------------------------------------------------------------------------
// This file contains all application-wide Javascripts.
// -----------------------------------------------------------------------------

import data from "./data.js";

data.forEach((element) => {
  //Create the element using the createElement method.
  var accordionItem = document.createElement("div");

  //Set its unique ID.
  accordionItem.id = element.id;
  accordionItem.className = "accordion__item";
  //   accordionItem.className = "active";

  //Add content to the DIV
  accordionItem.innerHTML = `
    <div class="accordion__item--title">
        <p class="accordion__item--question">
            ${element.question}
        </p>
        <img
            src="./images/icon-arrow-down.svg"
            alt="arrow icon"
            class="accordion__item--icon"
        />
    </div>
    <p class="accordion__item--answer">
        ${element.answer}
    </p>  
  `;

  //Finally, append the element to the accordion
  document.getElementById("accordion").appendChild(accordionItem);
});

function panelHandler(panels, currentPanel) {
  this.panels = panels;
  this.currentPanel = currentPanel;

  this.closeAllOpenedPanel = function () {
    this.panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  };

  this.openCurrentPanel = function () {
    this.currentPanel.classList.add("active");
  };

  this.closeCurrentPanel = function () {
    this.currentPanel.classList.remove("active");
  };
}

const accordionPanels = document.querySelectorAll(".accordion__item");

accordionPanels.forEach((element) => {
  let handler = new panelHandler(accordionPanels, element);

  element.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      return handler.closeCurrentPanel();
    }
    handler.closeAllOpenedPanel();
    handler.openCurrentPanel(element);
  });
});
