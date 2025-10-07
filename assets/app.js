// ===============================
// Joseph Owino Portfolio Script
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const burgerMenu = document.getElementById("burger-menu");
  const navigation = document.getElementById("navigation");
  const header = document.getElementById("heading");
  const contactForm = document.querySelector(".contact-form");

  // ========== MOBILE MENU TOGGLE & ACCESSIBILITY ==========
  if (burgerMenu && navigation) {
    const toggleMenu = () => {
      navigation.classList.toggle("show");
      burgerMenu.classList.toggle("active");
      // Set ARIA attribute for accessibility
      const isExpanded = navigation.classList.contains("show");
      burgerMenu.setAttribute("aria-expanded", isExpanded);
    };

    burgerMenu.addEventListener("click", toggleMenu);

    burgerMenu.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        toggleMenu();
      }
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("show");
        burgerMenu.classList.remove("active");
        burgerMenu.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    window.addEventListener("click", (e) => {
      if (!navigation.contains(e.target) && !burgerMenu.contains(e.target)) {
        navigation.classList.remove("show");
        burgerMenu.classList.remove("active");
        burgerMenu.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ========== DYNAMIC "SCROLL TO TOP" BUTTON ==========
  const scrollButton = document.createElement("button");
  scrollButton.id = "scroll-up";
  scrollButton.innerHTML = "▲"; // You can use an SVG icon here as well
  scrollButton.className = "scroll-up-btn";
  document.body.appendChild(scrollButton);

  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ========== SCROLL-BASED BEHAVIORS ==========
  const fadeInElements = document.querySelectorAll(".skill-card, .project-card, .about p, .writing li");

  // Initialize fade-in elements
  fadeInElements.forEach(el => {
    el.classList.add('fade-in-element');
  });

  const handleScroll = () => {
    // Navbar background
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll-to-top button visibility
    if (window.scrollY > 400) {
      scrollButton.classList.add("visible");
    } else {
      scrollButton.classList.remove("visible");
    }

    // Fade-in elements on scroll
    const triggerBottom = window.innerHeight * 0.85;
    fadeInElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('revealed');
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run on load

  // ========== CONTACT FORM VALIDATION ==========
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
      }

      // Simulated feedback
      alert(`Thank you, ${name}! Your message has been received.`);
      contactForm.reset();
    });
  }

  // ========== SMOOTH SECTION SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      // Ensure it's a valid internal link and not just "#"
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          // Add a small offset to account for the fixed header height
          const headerOffset = header.offsetHeight;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
