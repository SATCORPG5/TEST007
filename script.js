// Smooth Scroll for Navigation
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const truck = form.truck.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !truck || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!email.includes('@')) {
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
