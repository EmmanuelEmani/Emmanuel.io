let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove active class from all links first
            navLinks.forEach(links => links.classList.remove('active'));
            // Add active class to current section's link
            try {
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            } catch (e) {
                // Handle case where section might not have a corresponding nav link
                console.log(`No navigation link found for section: ${id}`);
            }
        }
    });
};

// Initialize Typed.js for the dynamic text
function initializeTypedText() {
    new Typed('.text', {
        strings: [
            'Computer Engineering Student',
            'QA Analyst',
            'Data Analyst',
            'DevOps Engineer',
            'AML/KYC Analyst',
            'Customer Service Representative'
        ],
        typeSpeed: 100,      // Speed of typing
        backSpeed: 50,       // Speed of backspacing
        loop: true,          // Loop the typing animation
        backDelay: 1500      // Delay before backspacing
    });
}

// Ensure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeTypedText);