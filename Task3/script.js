// Navbar shrink on scroll
window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 80) {
        nav.style.padding = '0.5rem 0';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.padding = '1rem 0';
        nav.style.boxShadow = 'none';
    }
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('#mainNav .nav-link');

window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.info-card, .project-card, .fav-card, .about-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
