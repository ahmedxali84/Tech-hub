// DOM Elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const footer = document.querySelector('footer');
const heroTitle = document.querySelector('.hero h1');

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  saveDarkModePreference(isDarkMode);
});

// Save Dark Mode Preference in Local Storage
function saveDarkModePreference(isDarkMode) {
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Load Dark Mode Preference on Page Load
(function loadDarkModePreference() {
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
  }
})();

// Update Footer Year Dynamically
(function updateFooterYear() {
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} TechHub. All rights reserved.`;
})();

// Typing Animation for Hero Title
const typingText = 'About TechHub';
let typingIndex = 0;

function typeEffect() {
  if (typingIndex < typingText.length) {
    heroTitle.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 100); // Adjust typing speed (ms)
  } else {
    // Blink effect after typing finishes
    setInterval(() => {
      heroTitle.classList.toggle('blink-cursor');
    }, 500);
  }
}

// Add Blink Cursor Effect
heroTitle.classList.add('blink-cursor');
typeEffect(); // Start Typing Animation
