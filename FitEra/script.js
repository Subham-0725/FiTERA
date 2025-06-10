// Toggle menu
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
}

// Profile Stoarge
window.addEventListener('DOMContentLoaded', (event) => {
  const name = sessionStorage.getItem('name');
  const profileLink = document.getElementById('profileLink');

  if (name) {
      profileLink.textContent = 'Profile (' + name + ')'; 
  }
});