// app/components/SocialProof.jsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './SocialProof.module.css';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to detect when component is in view
    const handleScroll = () => {
      const element = document.querySelector(`.${styles.socialProofSection}`);
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
  }, [styles.socialProofSection]);

  const testimonials = [
    {
      id: 1,
      quote: "The explicit scenes are EVERYTHING. Knotting, breeding, monster anatomy that defies human limits... R.S. Thorne delivers with NO fade to black. 'Claimed By The Kraken' had me blushing and breathless. Best tentacle romance I've read this year!",
      name: "Madison K.",
      book: "Claimed By The Kraken",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      quote: "As a monster romance addict, I need possessive alphas who claim their mates completely. 'Bonded To The Dragon Lord' delivers with primal heat, obsessive devotion, and explicit scenes that don't hold back. The breeding ritual left me GASPING.",
      name: "Alexis R.",
      book: "Bonded To The Dragon Lord",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      quote: "If you love dark fantasy with monsters who WORSHIP their mates while claiming them thoroughly, this series is mandatory reading. The Monstrously Claimed world builds with each book, but the explicit scenes never disappoint. These books keep me up ALL night.",
      name: "Jasmine T.",
      book: "Pierced By The Savage Thorns",
      rating: 5,
      verified: true
    }
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className={styles.starRating}>
        {[...Array(rating)].map((_, i) => (
          <span key={i} className={styles.star}>★</span>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.socialProofSection}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} shimmer-gold glow-underline ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          What Readers Are Saying
        </h2>
        
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${styles.testimonialCard} ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}
              style={{ transitionDelay: `${0.2 + (index * 0.15)}s` }}
            >
              <div className={styles.quoteWrapper}>
                <div className={styles.quoteSymbol}>"</div>
                <p className={styles.quoteText}>{testimonial.quote}</p>
                <div className={styles.quoteSymbolEnd}>"</div>
              </div>
              
              <div className={styles.testimonialMeta}>
                <StarRating rating={testimonial.rating} />
                <p className={styles.bookTitle}>on <span className="shimmer-gold">{testimonial.book}</span></p>
                <p className={styles.reviewerName}>
                  {testimonial.name}
                  {testimonial.verified && <span className={styles.verifiedBadge}>Verified Reader</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`${styles.bottomQuote} ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`} style={{ transitionDelay: '0.6s' }}>
          <p>Readers love the explicit monster romance scenes, possessive alpha heroes, and heroines who surrender to dark desires</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;