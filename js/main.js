function loadComponent(id, file) {
  fetch(file)
    .then((response) => {
      if (response.ok) return response.text();
      throw new Error("Component not found");
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

window.onload = () => {
  loadComponent("navbar-placeholder", "../components/navbar.html");
  loadComponent("footer-placeholder", "../components/footer.html");
};
