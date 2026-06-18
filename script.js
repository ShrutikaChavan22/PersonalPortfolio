// Smooth scrolling for navbar links
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Active navbar link while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-link');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active-link');
    }
  });
});

// Contact form submit
const form = document.querySelector('.contact__form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="mail"]').value;
  const message = form.querySelector('textarea').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  alert(`Thank you, ${name}! Your message has been received.`);

  form.reset();
});
