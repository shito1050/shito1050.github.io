const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".side-nav a");

function openMenu() {
  menuButton.classList.add("is-open");
  sidebar.classList.add("is-open");
  overlay.classList.add("is-open");
  menuButton.setAttribute("aria-label", "メニューを閉じる");
}

function closeMenu() {
  menuButton.classList.remove("is-open");
  sidebar.classList.remove("is-open");
  overlay.classList.remove("is-open");
  menuButton.setAttribute("aria-label", "メニューを開く");
}

function toggleMenu() {
  if (sidebar.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});
