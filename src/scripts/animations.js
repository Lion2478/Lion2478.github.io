// Global Animations and Interactions

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
  
  // Generic intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        animationObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const elementsToAnimate = document.querySelectorAll(
    '.observe-fade, .observe-slide-left, .observe-slide-right'
  );
  
  elementsToAnimate.forEach(el => {
    animationObserver.observe(el);
  });

  // Parallax effect for background elements
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Enhanced hover effects for cards
  const cards = document.querySelectorAll('.glass-effect, .project-card, .skill-item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Smooth reveal animation for sections
  const sections = document.querySelectorAll('.section');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
  });

  // Typing animation for hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let index = 0;
    const typeText = () => {
      if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
      }
    };
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
  }

  // Lazy loading with improved placeholder
  const images = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add('loading');
        
        img.addEventListener('load', () => {
          img.classList.remove('loading');
          img.classList.add('loaded');
        });
        
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });

  // Smooth scroll to top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="12" y1="19" x2="12" y2="5"/>
      <polyline points="5,12 12,5 19,12"/>
    </svg>
  `;
  scrollToTopBtn.setAttribute('aria-label', 'Volver arriba');
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  // Enhanced form interactions
  const formInputs = document.querySelectorAll('.form-input');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentNode?.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentNode?.classList.remove('focused');
      }
    });
    
    input.addEventListener('input', function() {
      if (this.value) {
        this.parentNode?.classList.add('filled');
      } else {
        this.parentNode?.classList.remove('filled');
      }
    });
  });

  // Performance monitoring
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.timing;
      const loadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
    });
  }
});

// Add CSS for scroll to top button and animations
const style = document.createElement('style');
style.textContent = `
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--gradient-bg);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
  }

  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .scroll-to-top:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
  }

  .section-hidden {
    opacity: 0;
    transform: translateY(30px);
  }

  .section-visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s ease;
  }

  img.loading {
    filter: blur(5px);
    opacity: 0.7;
  }

  img.loaded {
    filter: blur(0);
    opacity: 1;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    .scroll-to-top {
      bottom: 1rem;
      right: 1rem;
      width: 45px;
      height: 45px;
    }
  }
`;

document.head.appendChild(style);
