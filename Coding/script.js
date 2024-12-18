// JavaScript for sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollUpBar = document.querySelector('.scroll-up-bar');

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 0);

    // Scroll-up bar
    if (window.scrollY > 100) { // Change 100 to the scroll position where you want the bar to appear
        scrollUpBar.classList.add('show');
    } else {
        scrollUpBar.classList.remove('show');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
