const navbar = document.querySelector("[data-navbar]");
const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const themeBtn = document.querySelector("#theme-btn");
const body = document.querySelector("body");
const sectionText = document.querySelectorAll(".section-text");
const getAllDividers = document.querySelectorAll(".divider");
const labelText = document.querySelectorAll(".label-text");

function handleElementsOnClick(elements, eventType, callbackFunc) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callbackFunc);
  }
}

function handleToggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

handleElementsOnClick(navTogglerElements, "click", handleToggleNavbar);

themeBtn.addEventListener("click", () => {
  if (body.getAttribute("class") === "blue") {
    body.classList.remove("blue");
    body.classList.add("black");

    getAllDividers.forEach((item) => {
      item.removeAttribute("data-theme", "blue");
      item.setAttribute("data-theme", "black");
    });

    sectionText.forEach((item) => {
      item.setAttribute("data-theme", "black");
    });
  } else if (body.getAttribute("class") === "black") {
    body.classList.remove("black");
    body.classList.add("blue");

    getAllDividers.forEach((item) => {
      item.removeAttribute("data-theme", "black");
      item.setAttribute("data-theme", "blue");
    });

    sectionText.forEach((item) => {
      item.removeAttribute("data-theme", "black");
      item.setAttribute("data-theme", "blue");
    });
  }
});
