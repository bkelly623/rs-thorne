// components/FeaturedBook.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedBook.module.css';

const FeaturedBook = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to detect when component is in view
    const handleScroll = () => {
      const element = document.querySelector(`.${styles.featuredContainer}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight - 100;
        if (isInView) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    // Check once immediately and then on scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [styles.featuredContainer]);

  return (
    <section className={styles.featuredContainer}>
      {/* Tentacle divider at the top */}
      <div className="tentacle-divider"></div>
      
      <div className={styles.featuredWrapper}>
        <h2 className={`${styles.sectionTitle} shimmer-gold glow-underline ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>Featured Release</h2>
        
        <div className={styles.featuredContent}>
          <div className={`${styles.coverWrapper} ${isVisible ? 'fade-in-left visible' : 'fade-in-left'}`} style={{ transitionDelay: '0.2s' }}>
            <Image
              src="/images/Bonded To The Dragon Lord.jpg"
              alt="Cover of Bonded To The Dragon Lord"
              width={350}
              height={525}
              className={`${styles.coverImage} cover-transform`}
              priority
            />
          </div>
          
          <div className={`${styles.bookInfo} ${isVisible ? 'fade-in-right visible' : 'fade-in-right'}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className={`${styles.bookTitle} shimmer-gold`}>Bonded To The Dragon Lord</h3>
            <p className={styles.releaseStatus}>Coming Soon</p>
            <div className={styles.bookDescription}>
              <p className={isVisible ? 'fade-in-up visible' : 'fade-in-up'} style={{ transitionDelay: '0.4s' }}>
                "He was supposed to devour me. Instead, he claimed me. Body, bond… and soul."
              </p>
              <p className={isVisible ? 'fade-in-up visible' : 'fade-in-up'} style={{ transitionDelay: '0.5s' }}>
                When offered as a sacrifice to the mountain's most feared monster, she expected death. Instead, she found Kael—wings like shadow, eyes like flame, and a bond that won't let go.
              </p>
              <p className={isVisible ? 'fade-in-up visible' : 'fade-in-up'} style={{ transitionDelay: '0.6s' }}>
                Every touch makes the mountain tremble. Every separation ignites the fire within. As others seek to worship, imitate, or steal their magic, Kael fights with primal fury to protect what's his.
              </p>
              <p className={isVisible ? 'fade-in-up visible' : 'fade-in-up'} style={{ transitionDelay: '0.7s' }}>
                Perfect for readers who crave possessive monsters, fated mates, and explosive endings.
              </p>
            </div>
            
            <div className={`${styles.ctaWrapper} ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`} style={{ transitionDelay: '0.8s' }}>
              <span className={`${styles.comingSoon} pulse-effect`}>
                Amazon Pre-order Coming Soon
              </span>
              <p className={styles.seriesTag}>Part of the <span className="shimmer-gold">Monstrously Claimed</span> series</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tentacle divider at the bottom */}
      <div className="tentacle-divider"></div>
    </section>
  );
};

export default FeaturedBook;