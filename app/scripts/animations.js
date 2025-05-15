// app/scripts/animations.js
'use client';

import { useEffect } from 'react';

export default function AnimationInitializer() {
  useEffect(() => {
    // Handle scroll animations
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    // Create ambient particles
    const createAmbientParticles = () => {
      const ambientBg = document.createElement('div');
      ambientBg.classList.add('ambient-bg');
      document.body.appendChild(ambientBg);

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('ambient-particle');
        
        // Random positions and delays
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.opacity = `${Math.random() * 0.3}`;
        
        ambientBg.appendChild(particle);
      }
    };

    // Initialize parallax effect
    const initParallax = () => {
      const parallaxBgs = document.querySelectorAll('.parallax-bg');
      
      const handleParallax = () => {
        parallaxBgs.forEach(bg => {
          const scrollY = window.scrollY;
          const parentTop = bg.parentElement.offsetTop;
          const speed = bg.getAttribute('data-speed') || 0.2;
          
          const yPos = (scrollY - parentTop) * speed;
          bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
      };
      
      window.addEventListener('scroll', handleParallax);
      return () => window.removeEventListener('scroll', handleParallax);
    };

    // Initialize pulsing effects
    const initPulseEffects = () => {
      const pulseElements = document.querySelectorAll('.pulse-effect');
      pulseElements.forEach(element => {
        element.style.animation = 'pulse 3s infinite';
      });
    };

    // Run initialization functions
    createAmbientParticles();
    const cleanupParallax = initParallax();
    initPulseEffects();
    handleScrollAnimations(); // Run once immediately to handle elements already in view
    
    // Add event listeners
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      cleanupParallax();
      const ambientBg = document.querySelector('.ambient-bg');
      if (ambientBg) ambientBg.remove();
    };
  }, []);
  
  return null; // This component doesn't render anything
}