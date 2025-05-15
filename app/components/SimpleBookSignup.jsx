// app/components/SimpleBookSignup.jsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './SimpleBookSignup.module.css';

const SimpleBookSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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
          firstName: formData.firstName
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess(true);
      setFormData({
        email: '',
        firstName: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.signupSection}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={`${styles.bookPreview} ${isVisible ? 'fade-in-left visible' : 'fade-in-left'}`}>
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
                A dark monster romance where a sacrifice becomes a queen through forbidden rituals and primal worship.
              </p>
            </div>
          </div>
          
          <div className={`${styles.signupContent} ${isVisible ? 'fade-in-right visible' : 'fade-in-right'}`}>
            {!success ? (
              <>
                <h2 className={`${styles.signupTitle} shimmer-gold glow-underline`}>GET YOUR FREE BOOK</h2>
                <p className={styles.signupDescription}>
                  Join the dark realm and receive:
                </p>
                <ul className={styles.benefitsList}>
                  <li className={isVisible ? 'fade-in-up visible delay-100' : 'fade-in-up delay-100'}>Your free book delivered instantly</li>
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
                    {loading ? 'SENDING...' : 'CLAIM YOUR FREE BOOK'}
                  </button>
                  
                  {error && <p className={styles.errorMessage}>{error}</p>}
                  
                  <p className={styles.privacyNote}>
                    No spam. Unsubscribe anytime. Only the darkest content delivered.
                  </p>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <h2 className={`${styles.successTitle} shimmer-gold`}>YOU'VE BEEN CLAIMED</h2>
                <p className={styles.successText}>
                  Check your email for your free book download. If you don't see it within a few minutes, 
                  please check your spam folder.
                </p>
                <p className={styles.successNote}>
                  Welcome to the depths. Your monstrous journey begins now.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleBookSignup;