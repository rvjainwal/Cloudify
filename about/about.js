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

