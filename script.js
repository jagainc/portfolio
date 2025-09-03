// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-text', {
        strings: [
            'IT ENGINEER',
            'REACT DEVELOPER',
            'PYTHON DEVELOPER',
            'JAVA DEVELOPER',
            'AI ENTHUSIAST',
            'FULL STACK DEVELOPER'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
});

// Mobile menu functionality
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = '0';
}
function closemenu() {
    sidemenu.style.right = '-250px';
}



// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ff4500'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff4500',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Skills animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const skill = bar.getAttribute('data-skill');
        bar.style.width = skill + '%';
    });
}

// Intersection Observer for skills animation
const skillsSection = document.querySelector('#about');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Portfolio filter functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            workItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    const categories = item.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                // Close mobile menu if open
                closemenu();

                // Calculate the exact position to scroll to
                let offsetTop = target.offsetTop;

                // Special handling for different sections
                if (targetId === '#header') {
                    offsetTop = 0;
                } else if (targetId === '#about') {
                    offsetTop = target.offsetTop - 20;
                } else if (targetId === '#services') {
                    offsetTop = target.offsetTop - 20;
                } else if (targetId === '#portfolio') {
                    offsetTop = target.offsetTop - 20;
                } else if (targetId === '#contact') {
                    offsetTop = target.offsetTop - 20;
                }

                // Smooth scroll to the calculated position
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(8, 8, 8, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.transition = 'all 0.3s ease';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
    }
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Intersection Observer for stats animation
const statsSection = document.querySelector('#achievements');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}



// Scroll to top functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Logo click animation
document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.addEventListener('click', function () {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'gradientShift 3s ease-in-out infinite, bounce-logo 2s ease-in-out infinite';
            }, 10);
        });
    }
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Cursor trail effect (optional - can be removed if too much)
document.addEventListener('mousemove', function (e) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    document.body.appendChild(cursor);

    setTimeout(() => {
        cursor.remove();
    }, 1000);
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbypOi28ty_vFt0jddq3-7L1_0OJIsZrmn365uij_whh8n5faJvlOhWbUyrZ7igGDBLV/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message sent sucessfully'
            setTimeout(function () {
                msg.innerHTML = ''
            }, 5000
            )
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})