// Scroll animation for revealing content
window.addEventListener('scroll', reveal);

function reveal() {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Toggle between light and dark mode
const toggleButton = document.querySelector('.dark-mode-btn');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
