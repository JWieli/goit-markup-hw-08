const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".mobile-menu__close-button");
const openMenuBtn = document.querySelector(".mobile-menu__open-button");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay0.classList.add("d-none");
});
