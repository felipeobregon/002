// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Profile image handling
document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        // Handle image load
        profileImg.onload = function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.5s ease';
        };
        
        // Handle image error (fallback to placeholder)
        profileImg.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTEwMCAyMDBDMTAwIDE2NS44NjMgMTI1Ljg2MyAxNDAgMTYwIDE0MEgxNDBDMTc0LjEzNyAxNDAgMjAwIDE2NS44NjMgMjAwIDIwMFYyMDBIMTAwWiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4K';
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.5s ease';
        };
        
        // Set initial opacity
        profileImg.style.opacity = '1';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .about-text, .book-call-content, .profile-picture');
    animatedElements.forEach(el => observer.observe(el));
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    body:not(.loaded) .hero {
        opacity: 0;
        transform: translateY(50px);
    }
    
    body.loaded .hero {
        opacity: 1;
        transform: translateY(0);
        transition: all 1s ease-out;
    }
`;
document.head.appendChild(loadingStyles);

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('.about, .services, .book-call');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    revealObserver.observe(el);
});

// Add typing effect to hero title
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

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 50);
        }, 1000);
    }
});

// Add parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add mobile menu toggle (if needed for future mobile navigation)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Add mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #1a1a1a;
        cursor: pointer;
    `;
    
    navbar.appendChild(mobileMenuBtn);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Initialize mobile menu
createMobileMenu();

// Add CSS for mobile menu
const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = `
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block !important;
        }
        
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .nav-link {
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
        }
    }
`;
document.head.appendChild(mobileMenuStyles);

// Add subtle animations to CTA button
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading state for Calendly
document.addEventListener('DOMContentLoaded', () => {
    const calendlyContainer = document.querySelector('.calendly-container');
    if (calendlyContainer) {
        calendlyContainer.classList.add('loading');
        
        // Remove loading state after Calendly loads
        setTimeout(() => {
            calendlyContainer.classList.remove('loading');
        }, 3000);
    }
});

// Add smooth transitions to all interactive elements
const style = document.createElement('style');
style.textContent = `
    .service-card, .cta-button, .nav-link, .profile-picture {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .service-card:hover, .profile-picture:hover {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(style);