/* ================================================
   UPRISE ANALYTICS — main.js
   ================================================ */

/* ---- Navbar: shadow on scroll ---- */
const navbar   = document.getElementById('navbar');
const SCROLL_T = 60;

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > SCROLL_T);
    updateActiveNav();
});


/* ---- Mobile hamburger menu ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is tapped
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    }
});


/* ---- Active nav link on scroll ---- */
const sections    = document.querySelectorAll('section[id]');
const navLinkEls  = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
        const top    = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id     = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < bottom) {
            navLinkEls.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${id}`
                );
            });
        }
    });
}


/* ---- Scroll animations (lightweight AOS alternative) ---- */
const animatedEls = document.querySelectorAll('[data-aos]');

const aoObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Once animated, stop observing
                aoObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

animatedEls.forEach(el => aoObserver.observe(el));


/* ---- Contact form ---- */
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const originalText    = submitBtn.textContent;

    // Block submission if captcha hasn't been completed
    const captchaResponse = contactForm.querySelector('[name="h-captcha-response"]');
    if (!captchaResponse || !captchaResponse.value) {
        const captchaDiv = document.querySelector('.h-captcha');
        if (captchaDiv) {
            captchaDiv.style.outline      = '2px solid rgba(239,68,68,0.55)';
            captchaDiv.style.borderRadius = '6px';
            setTimeout(() => { captchaDiv.style.outline = ''; }, 3000);
        }
        return;
    }

    submitBtn.textContent = 'Sending…';
    submitBtn.disabled    = true;

    try {
        const res  = await fetch('https://api.web3forms.com/submit', {
            method:  'POST',
            body:    new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        });
        const data = await res.json();

        if (!data.success) throw new Error(data.message || 'Submission failed');

        // Success state
        contactForm.reset();
        formSuccess.classList.add('show');
        submitBtn.textContent       = 'Message Sent ✓';
        submitBtn.style.background  = 'rgba(34,197,94,0.25)';
        submitBtn.style.borderColor = 'rgba(34,197,94,0.4)';

        setTimeout(() => {
            formSuccess.classList.remove('show');
            submitBtn.textContent       = originalText;
            submitBtn.style.background  = '';
            submitBtn.style.borderColor = '';
            submitBtn.disabled          = false;
        }, 5000);

    } catch (err) {
        // Error state
        submitBtn.textContent       = 'Failed — Please Try Again';
        submitBtn.style.background  = 'rgba(239,68,68,0.2)';
        submitBtn.style.borderColor = 'rgba(239,68,68,0.4)';
        submitBtn.disabled          = false;

        setTimeout(() => {
            submitBtn.textContent       = originalText;
            submitBtn.style.background  = '';
            submitBtn.style.borderColor = '';
        }, 4000);
    }
});


/* ---- Smooth scroll (fallback for older browsers) ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
