const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Open or close the mobile menu.
menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );
});

// Close the menu after clicking a navigation link.
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});

// Display the current year.
document.querySelector("#year").textContent =
  new Date().getFullYear();