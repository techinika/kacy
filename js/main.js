function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(isOpen));
    menuIcon.classList.toggle("hidden", isOpen);
    closeIcon.classList.toggle("hidden", !isOpen);
  });

  const links = menu.querySelectorAll(".mobile-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
});
