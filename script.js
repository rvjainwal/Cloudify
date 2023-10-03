document.addEventListener("DOMContentLoaded", function () {
  const testimonialsContainer = document.querySelector(".testimonials-container");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;
  const testimonialWidth = testimonialsContainer.querySelector(".testimonial").offsetWidth;

  function updateSliderIndicator() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }

  function slideTestimonials(direction) {
    currentIndex += direction;
    currentIndex = Math.min(Math.max(currentIndex, 0), testimonialsContainer.childElementCount - 1); // Ensure index stays within bounds
    testimonialsContainer.scrollLeft = currentIndex * testimonialWidth;
    updateSliderIndicator();
  }

  // Event listeners for slide buttons
  prevButton.addEventListener("click", () => slideTestimonials(-1));
  nextButton.addEventListener("click", () => slideTestimonials(1));

  // Event listeners for dot indicators
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index * 1; // Multiply by 1 for one testimonial per slide
      testimonialsContainer.scrollLeft = currentIndex * testimonialWidth;
      updateSliderIndicator();
    });
  });

  // Touch event handling
  testimonialsContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  testimonialsContainer.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    currentIndex = Math.min(Math.max(currentIndex + (diffX > 0 ? 1 : -1), 0), testimonialsContainer.childElementCount - 1);
    testimonialsContainer.scrollLeft = currentIndex * testimonialWidth;
    startX = currentX;
    updateSliderIndicator();
    e.preventDefault();
  });

  testimonialsContainer.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Initial slider indicator update
  updateSliderIndicator();
});

window.addEventListener("scroll", function () {
            const cloud = document.querySelector(".cloud");
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            cloud.style.transform = `translateX(${scrollX * 0.5}px) translateY(${scrollY * 0.5}px)`;
});

// JavaScript to toggle the mobile menu
const mobileMenuIcon = document.getElementById('mobileMenuIcon');
const mobileNavContainer = document.getElementById('mobileNavContainer');
const closeButton = document.getElementById('closeButton');

mobileMenuIcon.addEventListener('click', () => {
  mobileNavContainer.classList.add('active');
});

closeButton.addEventListener('click', () => {
  mobileNavContainer.classList.remove('active');
});

// Close the mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!mobileNavContainer.contains(e.target) && e.target !== mobileMenuIcon) {
    mobileNavContainer.classList.remove('active');
  }
});
