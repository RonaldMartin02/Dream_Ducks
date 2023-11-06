const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar2");
function toggleNav() {
    navbar.classList.toggle("active");
  }
  
  // Add a click event listener to the hamburger icon
  hamburger.addEventListener("click", toggleNav);