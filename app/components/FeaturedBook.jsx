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
        <h2 className={`${styles.sectionTitle} shimmer-gold glow-underline ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>Latest Release</h2>
        
        <div className={styles.featuredContent}>
          <div className={`${styles.coverWrapper} ${isVisible ? 'fade-in-left visible' : 'fade-in-left'}`} style={{ transitionDelay: '0.2s' }}>
            <Image
              src="/images/Claimed By The Living Shadow.jpg"
              alt="Cover of Claimed By The Living Shadow"
              width={350}
              height={525}
              className={`${styles.coverImage} cover-transform`}
              priority
            />
          </div>
          
          <div className={`${styles.bookInfo} ${isVisible ? 'fade-in-right visible' : 'fade-in-right'}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className={`${styles.bookTitle} shimmer-gold`}>Claimed By The Living Shadow</h3>
            <p className={styles.releaseStatus}>Available Now</p>
            <div className={styles.bookDescription}>
              <p className={isVisible ? 'fade-in-up visible' : 'fade-in-up'} style={{ transitionDelay: '0.4s' }}>
                "She was meant to be a sacrifice. But the shadow didn't want her blood. It wanted her womb."
              </p>
              <p className={isVisible ? 'fade-in-up visible' : 'fade-in-up'} style={{ transitionDelay: '0.5s' }}>
                Bound and offered to an ancient force that shouldn't exist, Mara is claimed by a living shadow—one who doesn't take her life, but her body, her heat, and her destiny. His touch rewrites her from the inside out.
              </p>
              <p className={isVisible ? 'fade-in-up visible' : 'fade-in-up'} style={{ transitionDelay: '0.6s' }}>
                Her belly swells. Her womb glows. And her body becomes the gate to a realm no monster dares enter—unless they're ready to be ruled.
              </p>
              <p className={isVisible ? 'fade-in-up visible' : 'fade-in-up'} style={{ transitionDelay: '0.7s' }}>
                Perfect for readers who crave sacred breeding rituals, divine pregnancy, monster worship, and relentless obsession.
              </p>
            </div>
            
            <div className={`${styles.ctaWrapper} ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`} style={{ transitionDelay: '0.8s' }}>
              <a 
                href="https://www.amazon.com/dp/B0F8Y6TG56?&linkCode=ll1&tag=bkelly623-20&linkId=d8cfe1e7943c39372e34ba7327818cb1&language=en_US&ref_=as_li_ss_tl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.amazonButton} pulse-effect`}
              >
                Read on Amazon
              </a>
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