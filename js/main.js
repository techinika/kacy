document.addEventListener("DOMContentLoaded", function () {
  // 1. Load the Navbar
  fetch("../components/navbar.html")
    .then((response) => {
      if (!response.ok) throw new Error("Navbar not found");
      return response.text();
    })
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      initMobileMenu();
    })
    .catch((err) => console.error(err));

  fetch("../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
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
