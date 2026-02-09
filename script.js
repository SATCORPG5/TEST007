// Smooth Scroll
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const truck = document.getElementById('truck').value.trim();
  const message = document.getElementById('formMessage');

  if (!name || !phone || !truck) {
    message.textContent = "Please fill in all required fields.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Request sent. We'll contact you shortly.";
  message.style.color = "green";
  e.target.reset();
});

// Optional: Emergency Mode Toggle (simple demo)
const emergencyService = document.querySelector('.highlight');
emergencyService.addEventListener('click', () => {
  alert("Emergency Service Activated! Call us immediately.");
});    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});

// Optional Emergency Mode Toggle
const emergencyMode = () => {
    const callButton = document.querySelector('.call-now');
    callButton.style.background = callButton.style.background === 'red' ? '#ff8c00' : 'red';
    callButton.textContent = callButton.style.background === 'red' ? 'Emergency: Call Now!' : 'Call Now';
};
