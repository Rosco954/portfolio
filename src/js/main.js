const navLinks = document.querySelectorAll(".nav-link");

console.log(navLinks);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");
  });
});
