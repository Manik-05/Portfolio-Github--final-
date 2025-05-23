// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const darkModeText = document.getElementById('dark-mode-text');

    // Function to set theme
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            darkModeIcon.classList.replace('fa-moon', 'fa-sun');
            darkModeText.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            darkModeIcon.classList.replace('fa-sun', 'fa-moon');
            darkModeText.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    }

    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light mode if no preference
        setTheme('light');
    }

    // Toggle theme on button click
    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close mobile nav if open
            const navLinks = document.getElementById('nav-links');
            const header = document.querySelector('.header'); // Use the header class
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                header.classList.remove('nav-open');
            }
        });
    });

    // --- Section Reveal on Scroll ---
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // 10% of section visible
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('section-hidden');
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Add section-hidden to all sections except hero initially
        if (section.id !== 'hero') {
            section.classList.add('section-hidden');
        }
        sectionObserver.observe(section);
    });

    // --- Mobile Navigation Toggle ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const header = document.querySelector('.header'); // Use the header class

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        header.classList.toggle('nav-open');
    });

    // --- Contact Form Submission (client-side only) ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        // Simulate form submission
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.classList.remove('hidden');
        formMessage.style.color = 'var(--accent-color)'; // Set color directly

        // Clear form fields after a short delay
        setTimeout(() => {
            contactForm.reset();
            formMessage.classList.add('hidden');
        }, 3000); // Message disappears after 3 seconds
    });

    // --- Hero Section Animation (initial load) ---

    // --- Dynamic Name Hover Text ---
// --- Dynamic Name Hover Text ---
    const nameHighlight = document.getElementById('name-highlight');
    if (nameHighlight) {
        const originalText = nameHighlight.dataset.originalText;
        const hoverTexts = nameHighlight.dataset.hoverTexts ? nameHighlight.dataset.hoverTexts.split(',') : [];
        let currentHoverIndex = 0; // To cycle through texts
        let isHovered = false; // Track if mouse is currently over the element

        // Initialize with original text
        nameHighlight.textContent = originalText;

        nameHighlight.addEventListener('mouseover', () => {
            if (!isHovered && hoverTexts.length > 0) {
                // Only change text if not already hovered (first time or after mouseout)
                nameHighlight.textContent = hoverTexts[currentHoverIndex].trim();
                currentHoverIndex = (currentHoverIndex + 1) % hoverTexts.length;
                isHovered = true; // Mark as hovered
            } else if (isHovered && hoverTexts.length > 0) {
                // If already hovered and mouse moves within the element, cycle to next word
                nameHighlight.textContent = hoverTexts[currentHoverIndex].trim();
                currentHoverIndex = (currentHoverIndex + 1) % hoverTexts.length;
            }
        });

        nameHighlight.addEventListener('mouseout', () => {
            // Text will now persist. No change needed here to keep the last word.
            // We just reset the 'isHovered' flag so the next mouseover triggers a new word.
            isHovered = false;
        });
    }
    // Select elements that will be animated on hero section
    const heroProfilePhoto = document.querySelector('.profile-photo'); // Select the new profile photo
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroSocials = document.querySelector('.hero-socials');

    // Add animation classes after a slight delay to ensure CSS is loaded
    setTimeout(() => {
        if (heroProfilePhoto) {
            heroProfilePhoto.style.opacity = 1;
            heroProfilePhoto.style.transform = 'translateY(0)';
            heroProfilePhoto.style.transitionDelay = '0.2s'; // Add delay for photo
        }

        heroTitle.style.opacity = 1;
        heroTitle.style.transform = 'translateY(0)';
        heroTitle.style.transitionDelay = '0.4s'; // Adjusted delay for title

        heroSubtitle.style.opacity = 1;
        heroSubtitle.style.transform = 'translateY(0)';
        heroSubtitle.style.transitionDelay = '0.7s'; // Adjusted delay for subtitle

        heroButtons.style.opacity = 1;
        heroButtons.style.transform = 'translateY(0)';
        heroButtons.style.transitionDelay = '1.2s'; // Adjusted delay for buttons

        heroSocials.style.opacity = 1;
        heroSocials.style.transform = 'translateY(0)';
        heroSocials.style.transitionDelay = '1.7s'; // Adjusted delay for socials
    }, 100); // Small initial delay



    // Function to determine items per view based on screen width
    function getItemsPerView() {
        return window.innerWidth <= 768 ? 1 : 2;
    }});