// Contact form submission handler
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you Mirriam, your message has been received!");
});

// Scroll-triggered animations
function revealOnScroll() {
  const reveals = document.querySelectorAll('.fade-in, .slide-up');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Hover animation using JavaScript
document.querySelectorAll('.post').forEach(post => {
  post.addEventListener('mouseenter', () => {
    post.classList.add('hovered');
  });
  post.addEventListener('mouseleave', () => {
    post.classList.remove('hovered');
  });
});

// Typing effect on homepage heading
const heading = document.querySelector(".hero h2");
const fullText = "Explore the World with WanderWise";
let index = 0;

function typeWriter() {
  if (heading && index < fullText.length) {
    heading.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 70);
  }
}

if (heading) {
  heading.textContent = "";
  typeWriter();
}
