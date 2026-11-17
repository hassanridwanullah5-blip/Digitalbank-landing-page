const menuToggle = document.querySelector(".menu-toggle");
const pageLinks = document.querySelector("#pageLinks");
const menuIcon = menuToggle.querySelector("img");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  pageLinks.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuIcon.src = isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg";
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

pageLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

window.matchMedia("(min-width: 701px)").addEventListener("change", (event) => {
  if (event.matches) {
    setMenuOpen(false);
  }
});
