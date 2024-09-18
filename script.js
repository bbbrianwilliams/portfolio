const navbar = document.querySelector("[data-navbar]");
const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");




function handleElementsOnClick(elements, eventType, callbackFunc) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callbackFunc);
  }
}

function handleToggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

handleElementsOnClick(navTogglerElements, 'click', handleToggleNavbar)

