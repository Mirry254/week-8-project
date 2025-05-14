// Enhanced form handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Show success message
  alert(`Thank you ${name}, your message has been received!`);
  this.reset();
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.post, .destination').forEach(el => {
  observer.observe(el);
});

// Dynamic navbar background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(44, 62, 80, 0.95)';
    nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    nav.style.background = 'rgba(44, 62, 80, 0.8)';
    nav.style.boxShadow = 'none';
  }
});

// Typing effect for hero heading
const heroHeading = document.querySelector('.hero h2');
if (heroHeading && heroHeading.dataset.typed !== 'true') {
  const text = heroHeading.textContent;
  heroHeading.textContent = '';
  heroHeading.dataset.typed = 'true';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroHeading.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };
  typeWriter();
}
