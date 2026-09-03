// ================================
// MAIN.JS - Core Functionality
// ================================

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeScrollEffects();
  initializeBackToTop();
});

// ==================== NAVIGATION ====================

function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Determine if link should be active
    let isActive = false;
    
    if (currentPath === '/' || currentPath === '/index.html') {
      isActive = href === '/' || href === '/index.html';
    } else {
      isActive = currentPath.includes(href);
    }
    
    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ==================== SCROLL EFFECTS ====================

function initializeScrollEffects() {
  // Fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Apply fade-in effect to cards and sections
  const fadeInElements = document.querySelectorAll('.card, .project-card, section');
  fadeInElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// ==================== BACK TO TOP ====================

function initializeBackToTop() {
  const backToTopButtons = document.querySelectorAll('.back-to-top');
  
  backToTopButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}

// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== UTILITY FUNCTIONS ====================

// Log initialization
console.log('Portfolio website initialized successfully');
