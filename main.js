const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const productBtn = document.getElementById("product-btn");
const productLinks = document.getElementById("product-links");

// New elements for header content - make sure to target the specific slide's button/options
const inquireBtnSlide1 = document.getElementById("inquire-btn-slide1"); // Updated ID
const socialChatOptionsSlide1 = document.getElementById("social-chat-options-slide1");


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  // Close product panel if main menu is opened
  productLinks.classList.remove("open");
  // Close social chat options if main menu is opened
  socialChatOptionsSlide1.classList.remove("show"); // Target specific slide's options


  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

productBtn.addEventListener("click", (e) => {
  productLinks.classList.toggle("open");
  // Close main menu if product panel is opened
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line"); // Reset main menu icon
  // Close social chat options if product panel is opened
  socialChatOptionsSlide1.classList.remove("show"); // Target specific slide's options
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

// Event listener for the "Inquire Now" button on Slide 1
inquireBtnSlide1.addEventListener("click", (e) => { // Updated variable name
    socialChatOptionsSlide1.classList.toggle("show");
    // Close any open nav panels when message options are toggled
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
    productLinks.classList.remove("open");
});

// Optional: Close social chat options if clicked outside
document.addEventListener("click", (e) => {
    // Check if the click is outside the inquire button AND outside the social options
    if (!inquireBtnSlide1.contains(e.target) && !socialChatOptionsSlide1.contains(e.target)) {
        socialChatOptionsSlide1.classList.remove("show");
    }
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// New ScrollReveal for the header Swiper (optional)
ScrollReveal().reveal(".header-swiper", {
    ...scrollRevealOption,
    delay: 300,
    interval: 0 // Apply to the whole swiper at once
});


// Initialize the header Swiper
const headerSwiper = new Swiper(".header-swiper", {
    loop: true, // Loop through slides
    autoplay: {
        delay: 5000, // 5 seconds delay between slides
        disableOnInteraction: false, // Continue autoplay even when user interacts
    },
    pagination: {
        el: ".header-pagination", // Use the specific pagination class
        clickable: true, // Allow clicking on dots to navigate
    },
    // Optional: Navigation buttons if you decide to add them
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    effect: "fade", // A smooth fade transition
    fadeEffect: {
        crossFade: true,
    },
});

// Ensure the testimonial swiper is still initialized correctly if it exists elsewhere
// const swiper = new Swiper(".swiper", { // This might conflict if also targeting .header-swiper
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });


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