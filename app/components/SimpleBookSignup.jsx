'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SimpleBookSignup.module.css';

const SimpleBookSignup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    subgenrePreferences: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to detect when component is in view
    const handleScroll = () => {
      const element = document.querySelector(`.${styles.signupSection}`);
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
  }, [styles.signupSection]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          subgenrePreferences: formData.subgenrePreferences,
          sourceComponent: 'SimpleBookSignup'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Redirect to download page instead of showing success message
      router.push('/download');
      
    } catch (err) {
      setError(err.message || 'Failed to subscribe. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section className={styles.signupSection}>
      <div className="tentacle-divider"></div>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} shimmer-gold glow-underline ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          GET YOUR FREE BOOKS
        </h2>
        <p className={`${styles.sectionSubtitle} ${isVisible ? 'fade-in-up visible delay-100' : 'fade-in-up delay-100'}`}>
          Join the dark realm and receive:
        </p>
        
        <div className={styles.threeColumnGrid}>
          {/* Left Book */}
          <div className={`${styles.bookColumn} ${isVisible ? 'fade-in-left visible' : 'fade-in-left'}`}>
            <div className={styles.bookImageWrapper}>
              <img 
                src="/images/Claimed, Crowned, Consumed.jpg" 
                alt="Claimed, Crowned, Consumed book cover" 
                className={`${styles.bookImage} cover-transform`}
              />
              <div className={`${styles.freeTag} pulse-effect`}>FREE</div>
            </div>
            <div className={styles.bookText}>
              <h3 className={`${styles.bookTitle} shimmer-gold`}>CLAIMED, CROWNED, CONSUMED</h3>
              <p className={styles.bookDescription}>
                A dark monster romance where a sacrifice becomes a queen through forbidden rituals.
              </p>
            </div>
          </div>
          
          {/* Center Form */}
          <div className={`${styles.signupContent} ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
            <ul className={styles.benefitsList}>
              <li className={isVisible ? 'fade-in-up visible delay-100' : 'fade-in-up delay-100'}>Two complete books delivered instantly</li>
              <li className={isVisible ? 'fade-in-up visible delay-200' : 'fade-in-up delay-200'}>Exclusive bonus content too explicit for publication</li>
              <li className={isVisible ? 'fade-in-up visible delay-300' : 'fade-in-up delay-300'}>Early access to new releases and special offers</li>
            </ul>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className={styles.input}
                />
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name (Optional)"
                  className={styles.input}
                />
              </div>
              
              <button 
                type="submit" 
                className={`${styles.submitButton} pulse-effect`}
                disabled={loading}
              >
                {loading ? 'SENDING...' : 'CLAIM YOUR FREE BOOKS'}
              </button>
              
              {error && <p className={styles.errorMessage}>{error}</p>}
              
              <p className={styles.privacyNote}>
                No spam. Unsubscribe anytime. Only the darkest content delivered.
              </p>
            </form>
          </div>
          
          {/* Right Book */}
          <div className={`${styles.bookColumn} ${isVisible ? 'fade-in-right visible' : 'fade-in-right'}`}>
            <div className={styles.bookImageWrapper}>
              <img 
                src="/images/Bonded To The Dragon Lord.jpg" 
                alt="Bonded To The Dragon Lord book cover" 
                className={`${styles.bookImage} cover-transform`}
              />
              <div className={`${styles.freeTag} pulse-effect`}>FREE</div>
            </div>
            <div className={styles.bookText}>
              <h3 className={`${styles.bookTitle} shimmer-gold`}>BONDED TO THE DRAGON LORD</h3>
              <p className={styles.bookDescription}>
                When a sacrifice becomes a mate, the mountain trembles with primal fury.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tentacle-divider"></div>
    </section>
  );
};

export default SimpleBookSignup;