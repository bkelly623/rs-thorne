'use client';

import React, { useEffect } from 'react';

const ReaderBonusAnimations = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      
      fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Function to handle parallax effect
    const handleParallax = () => {
      const parallaxBgs = document.querySelectorAll('.parallax-bg');
      
      parallaxBgs.forEach(bg => {
        const speed = bg.getAttribute('data-speed') || 0.2;
        const yPos = -(window.pageYOffset * parseFloat(speed));
        bg.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Create ambient particles for background
    const createAmbientParticles = () => {
      const ambientBg = document.createElement('div');
      ambientBg.classList.add('ambient-bg');
      document.querySelector('.bonusPageContainer').appendChild(ambientBg);
      
      // Create particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('ambient-particle');
        
        // Random positioning
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 15}s`;
        
        ambientBg.appendChild(particle);
      }
    };

    // Initial calls
    handleScrollAnimations();
    createAmbientParticles();
    
    // Event listeners
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('scroll', handleParallax);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ReaderBonusAnimations;