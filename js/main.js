function loadComponent(id, path) {
  return fetch(path)
    .then((response) => {
      if (!response.ok) throw new Error("Component not found: " + path);
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (id === "navbar-placeholder") initMobileMenu();
    })
    .catch((err) => console.error(err));
}

document.addEventListener("DOMContentLoaded", function () {
  const depth = window.location.pathname.split("/").length - 2;
  const prefix = depth > 0 ? "../".repeat(depth) : "./";

  loadComponent("navbar-placeholder", prefix + "components/navbar.html");
  loadComponent("footer-placeholder", prefix + "components/footer.html");
});

function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  const links = menu.querySelectorAll(".mobile-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
}