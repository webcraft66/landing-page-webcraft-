// Mobile navbar toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Review slider functionality
const reviewSlider = document.querySelector('.reviews-slider');
let currentReview = 0;

function nextReview() {
    const reviews = reviewSlider.children;
    reviews[currentReview].style.opacity = '0';
    reviews[currentReview].style.transform = 'translateX(50px)';
    
    currentReview = (currentReview + 1) % reviews.length;
    
    reviews[currentReview].style.opacity = '1';
    reviews[currentReview].style.transform = 'translateX(0)';
}

// Auto slide reviews every 5 seconds
setInterval(nextReview, 5000);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animate-float and animate-slide elements
document.querySelectorAll('.animate-float, .animate-slide').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Gift box interaction enhancement
document.querySelectorAll('.gift-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotateY(10deg)';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.floating-gifts');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
});

// CTA button pulse animation
document.querySelectorAll('.cta-button.primary').forEach(btn => {
    btn.addEventListener('mouseover', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'bounce 1s infinite';
        }, 10);
    });
    
    btn.addEventListener('mouseout', function() {
        this.style.animation = 'none';
    });
});

// Add sparkle effect on click
document.addEventListener('click', function(e) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.fontSize = '2rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'float 2s ease-out forwards';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        document.body.removeChild(sparkle);
    }, 2000);
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
    
    // Trigger initial animations
    document.body.classList.add('loaded');
});

// Preloader (if needed)
window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
});

// Mobile responsiveness enhancement
function handleResize() {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// WhatsApp click tracking (optional analytics)
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        // Could add analytics here
        console.log('WhatsApp clicked!');
    });
});
