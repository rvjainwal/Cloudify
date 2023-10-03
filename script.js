document.addEventListener("DOMContentLoaded", function () {
    const testimonialsContainer = document.querySelector(".testimonials-container");
    const dots = document.querySelectorAll(".dot");
    
    let touchStartX = 0;
    let touchEndX = 0;
    let currentIndex = 0;
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
    
    testimonialsContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });
    
    testimonialsContainer.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchStartX - touchEndX;
        const minSwipeDistance = 100; // Adjust this value to control the sensitivity
        
        if (swipeDistance > minSwipeDistance) {
            // Swiped to the right (move to the next testimonial)
            slideTestimonials(1);
        } else if (swipeDistance < -minSwipeDistance) {
            // Swiped to the left (move to the previous testimonial)
            slideTestimonials(-1);
        }
    });
    
    // Event listeners for dot indicators
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
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
