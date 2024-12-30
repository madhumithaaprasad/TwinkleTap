// script.js
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#e9b8c9"; // Darker pink when scrolled
    } else {
        navbar.style.backgroundColor = "#f8d7e8"; // Default light pink
    }
});
