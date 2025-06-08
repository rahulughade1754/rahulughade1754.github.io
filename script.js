// Enable smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌙 Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 15px';
toggleButton.style.background = '#198754';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '8px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000';

document.body.appendChild(toggleButton);

// Apply dark mode class
function applyDarkMode(enable) {
  if (enable) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
}

// Toggle on button click
toggleButton.addEventListener('click', () => {
  const dark = document.body.classList.contains('dark-mode');
  applyDarkMode(!dark);
});

// Apply saved mode on load
document.addEventListener('DOMContentLoaded', () => {
  const dark = localStorage.getItem('darkMode') === 'true';
  applyDarkMode(dark);
});
