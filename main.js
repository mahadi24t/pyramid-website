const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const productBtn = document.getElementById("product-btn");
const productLinks = document.getElementById("product-links");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  // Close product panel if main menu is opened
  productLinks.classList.remove("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

productBtn.addEventListener("click", (e) => {
  productLinks.classList.toggle("open");
  // Close main menu if product panel is opened
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line"); // Reset main menu icon
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

productLinks.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') { // Only close if an anchor tag is clicked
        productLinks.classList.remove("open");
    }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__container a", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
          alert("Please fill in all fields.");
          return;
      }

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".footer__form form");
  const emailInput = form.querySelector("input");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      const email = emailInput.value.trim();

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      alert("Thank you for subscribing! You'll receive the latest updates soon.");
      form.reset();
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});