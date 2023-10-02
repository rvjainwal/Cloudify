
document.addEventListener("DOMContentLoaded", function () {
    const testimonialsContainer = document.querySelector(".testimonials-container");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;
    const testimonialWidth = testimonialsContainer.querySelector(".testimonial").offsetWidth;

    function updateSliderIndicator() {
        dots.forEach((dot, index) => {
            if (index === currentIndex ) {
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
            currentIndex = index * 1; // Multiply by 2 for two testimonials per slide
            testimonialsContainer.scrollLeft = currentIndex * testimonialWidth;
            updateSliderIndicator();
        });
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
