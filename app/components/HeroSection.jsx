// app/components/HeroSection.jsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    subgenrePreferences: []
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Activate animations when the component mounts
  useEffect(() => {
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      fadeElements.forEach(element => {
        element.classList.add('visible');
      });
    }, 300);
  }, []);

  const subgenreOptions = [
    { id: 'tentacle', label: 'Tentacle/Sea God' },
    { id: 'werewolf', label: 'Werewolf/Shifter' },
    { id: 'vampire', label: 'Vampire' },
    { id: 'demon', label: 'Demon/Incubus' },
    { id: 'dragon', label: 'Dragon/Wyvern' },
    { id: 'fae', label: 'Fae/Otherworldly' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        subgenrePreferences: [...formData.subgenrePreferences, value]
      });
    } else {
      setFormData({
        ...formData,
        subgenrePreferences: formData.subgenrePreferences.filter(item => item !== value)
      });
    }
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
          subgenrePreferences: formData.subgenrePreferences
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess(true);
      setFormData({
        email: '',
        firstName: '',
        subgenrePreferences: []
      });
    } catch (err) {
      setError(err.message || 'Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.heroSection} parallax-container`}>
      <div className="parallax-bg" data-speed="0.2" style={{backgroundImage: "url('/images/tentacle-bg.svg')"}}></div>
      <div className={`${styles.heroContent} parallax-content`}>
        <div className={styles.heroText}>
          <h1 className={`${styles.authorName} shimmer-gold fade-in-up`}>R.S. Thorne</h1>
          <h2 className={`${styles.authorTagline} fade-in-up delay-100`}>Dark Erotic Monster Romance</h2>
          <p className={`${styles.heroTagline} fade-in-up delay-200`}>Enter a world where passion knows no bounds</p>
          
          <div className={`${styles.bookDisplay} fade-in-left delay-300`}>
            <img 
              src="/images/Claimed, Crowned, Consumed.jpg" 
              alt="Claimed, Crowned, Consumed book cover" 
              className={`${styles.bookCover} cover-transform`}
            />
            <div className={styles.bookInfo}>
              <h3 className={`${styles.seriesTitle} shimmer-gold`}>Monstrously Claimed</h3>
              <h2 className={styles.bookTitle}>CLAIMED, CROWNED, CONSUMED</h2>
              <p className={styles.bookTagline}>"You're not here for a love story. You're here to be <em>rewritten</em>."</p>
            </div>
          </div>
        </div>
        
        <div className={`${styles.formContainer} fade-in-right delay-300`}>
          {!success ? (
            <>
              <h2 className={`${styles.formTitle} shimmer-gold`}>CLAIM YOUR FREE BOOK</h2>
              <p className={styles.formSubtitle}>Join the dark depths where passion knows no bounds</p>
              
              <form onSubmit={handleSubmit} className={styles.signupForm}>
                <div className={styles.formField}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formField}>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name (Optional)"
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.subgenreSection}>
                  <p className={styles.subgenreTitle}>What monsters captivate you? (Optional)</p>
                  <div className={styles.checkboxGrid}>
                    {subgenreOptions.map(option => (
                      <label key={option.id} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="subgenrePreferences"
                          value={option.id}
                          checked={formData.subgenrePreferences.includes(option.id)}
                          onChange={handleCheckboxChange}
                          className={styles.checkbox}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className={`${styles.submitButton} pulse-effect`}
                  disabled={loading}
                >
                  {loading ? 'SUBMITTING...' : 'DEVOUR NOW'}
                </button>
                
                {error && <p className={styles.errorMessage}>{error}</p>}
                
                <p className={styles.privacy}>
                  No spam. Unsubscribe anytime. Only the darkest content delivered.
                </p>
              </form>
            </>
          ) : (
            <div className={styles.successMessage}>
              <h2 className={`${styles.successTitle} shimmer-gold`}>YOU'VE BEEN CLAIMED</h2>
              <p className={styles.successText}>
                Check your email for your free book. If you don't see it within a few minutes, 
                please check your spam folder.
              </p>
              <p className={styles.successNote}>
                You're now part of the dark realm. Welcome to the depths.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;