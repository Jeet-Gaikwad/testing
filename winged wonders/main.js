
// !(function($) {
//   "use strict";

//   // Hero typed
//   if ($('.typed').length) {
//     var typed_strings = $(".typed").data('typed-items');
//     typed_strings = typed_strings.split(',')
//     new Typed('.typed', {
//       strings: typed_strings,
//       loop: true,
//       typeSpeed: 100,
//       backSpeed: 50,
//       backDelay: 2000
//     });
//   }  
// })(jQuery);
// Select elements from the DOM
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// Toggle mobile menu
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Submit contact form data
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Send form data to server using fetch() or XMLHttpRequest()
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData); // For testing purposes
  // Reset form inputs
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
