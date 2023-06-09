document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('data-target'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
