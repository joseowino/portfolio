// ===============================
// Joseph Owino Portfolio Script
// ===============================

// DOM Elements
const burgerMenu = document.getElementById("burger-menu");
const navigation = document.getElementById("navigation");
const scrollUpBtn = document.getElementById("scroll-up");
const header = document.getElementById("heading");

// ===============================
// Mobile Menu Toggle
// ===============================
burgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("show");
  burgerMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("show");
    burgerMenu.classList.remove("active");
  });
});

// ===============================
// Scroll Behavior
// ===============================

// Change navbar style when scrolled
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("background-color");
  } else {
    header.classList.remove("background-color");
  }

  // Show scroll-up button after scrolling
  if (window.scrollY > 300) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

// ===============================
// Scroll to Top
// ===============================
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===============================
// Contact Form Placeholder Logic
// ===============================
// (Optional: placeholder for backend integration)
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    // Extract values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Simulate success feedback
    alert("Thank you, " + name + "! Your message has been sent successfully.");

    // Reset form fields
    contactForm.reset();
  });
}

// ===============================
// Accessibility & UX Enhancements
// ===============================

// Keyboard navigation for burger menu
burgerMenu.addEventListener("keyup", e => {
  if (e.key === "Enter" || e.key === " ") {
    burgerMenu.click();
  }
});

// Close menu when clicking outside
window.addEventListener("click", e => {
  if (!navigation.contains(e.target) && !burgerMenu.contains(e.target)) {
    navigation.classList.remove("show");
    burgerMenu.classList.remove("active");
  }
});
