import RouterHandler from "./modules/router.js";

window.onhashchange = () => {
  setActivePage();
  console.log("changed");
};

function setActivePage() {
  const links = document.querySelectorAll(".header-link");
  links.forEach((link) => {
    const linkPath = link.getAttribute("href");
    const currentPath = window.location.hash;
    if (linkPath == currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

class App {
  constructor() {
    console.log("inside app");
    new RouterHandler();
  }
}

new App();
