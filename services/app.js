// Scroll-Triggered Animations
const serviceCards = document.querySelectorAll('.service-card');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  serviceCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
}

// Event Listener for Scrolling
window.addEventListener('scroll', checkVisibility);

// Initialize Scroll-Triggered Animations
document.addEventListener('DOMContentLoaded', checkVisibility);

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Load Dark Mode Preference
(function () {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
  }
})();
