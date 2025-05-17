'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    subgenrePreferences: []
  });
  const [loading, setLoading] = useState(false);
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
          subgenrePreferences: formData.subgenrePreferences,
          sourceComponent: 'HeroSection'
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
    <section className={`${styles.heroSection} parallax-container`}>
      <div className="parallax-bg" data-speed="0.2" style={{backgroundImage: "url('/images/tentacle-bg.svg')"}}></div>
      <div className={`${styles.heroContent} parallax-content`}>
        <div className={styles.heroHeader}>
          <h1 className={`${styles.authorName} shimmer-gold fade-in-up`}>R.S. Thorne</h1>
          <h2 className={`${styles.authorTagline} fade-in-up delay-100`}>Dark Erotic Monster Romance</h2>
          <p className={`${styles.heroTagline} fade-in-up delay-200`}>Enter a world where passion knows no bounds</p>
        </div>
        
        <div className={styles.threeColumnLayout}>
          {/* First Book (Left Side) */}
          <div className={`${styles.bookColumn} ${styles.leftBook} fade-in-left delay-300`}>
            <div className={styles.bookCoverWrapper}>
              <img 
                src="/images/Claimed, Crowned, Consumed.jpg" 
                alt="Claimed, Crowned, Consumed book cover" 
                className={`${styles.bookCover} cover-transform`}
              />
              <div className={`${styles.freeTag} pulse-effect`}>FREE</div>
            </div>
            <div className={styles.bookInfo}>
              <h3 className={`${styles.bookTitle} shimmer-gold`}>CLAIMED, CROWNED, CONSUMED</h3>
              <div className={styles.bookDescription}>
                <p>"She was never meant to survive the ritual. <span className={styles.goldAccent}>Now she wears his crown.</span>"</p>
                <p>Maris was raised to be a sacrifice—<span className={styles.emphasisText}>untouched, obedient, perfect</span>. But when the tide cult drags her beneath the waves, the god waiting in the darkness <span className={styles.goldAccent}>doesn't devour her</span>.</p>
                <p>He <span className={styles.emphasisText}>fills her</span>. He <span className={styles.emphasisText}>changes her</span>. He makes her come apart on his <span className={styles.goldAccent}>breeding altar</span>—and then rebuilds her, glowing and wrecked.</p>
                <p>Featuring: <span className={styles.tropes}>ritual breeding • tentacle worship • sacred claiming • possessive monster god • forced pleasure • size difference • primal heat</span></p>
              </div>
            </div>
          </div>
          
          {/* Form (Center) */}
          <div className={`${styles.formColumn} fade-in-up delay-300`}>
            <h2 className={`${styles.formTitle} shimmer-gold`}>CLAIM YOUR FREE BOOKS</h2>
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
          </div>
          
          {/* Second Book (Right Side) */}
          <div className={`${styles.bookColumn} ${styles.rightBook} fade-in-right delay-300`}>
            <div className={styles.bookCoverWrapper}>
              <img 
                src="/images/Bonded To The Dragon Lord.jpg" 
                alt="Bonded To The Dragon Lord book cover" 
                className={`${styles.bookCover} cover-transform`}
              />
              <div className={`${styles.freeTag} pulse-effect`}>FREE</div>
            </div>
            <div className={styles.bookInfo}>
              <h3 className={`${styles.bookTitle} shimmer-gold`}>BONDED TO THE DRAGON LORD</h3>
              <div className={styles.bookDescription}>
                <p>"He was supposed to devour me. <span className={styles.goldAccent}>Instead, he claimed me. Body, bond... and soul.</span>"</p>
                <p>When offered as a sacrifice to the mountain's most feared monster, she expected death. Instead, she found Kael—<span className={styles.emphasisText}>wings like shadow, eyes like flame</span>, and a mating bond that <span className={styles.goldAccent}>won't let go</span>.</p>
                <p>Every touch makes the mountain <span className={styles.emphasisText}>tremble</span>. Every separation <span className={styles.emphasisText}>ignites</span> the fire within. As others seek to worship or steal their magic, Kael fights with <span className={styles.goldAccent}>primal fury</span> to protect what's his.</p>
                <p>Featuring: <span className={styles.tropes}>possessive dragon shifter • fated mates • size kink • claiming heat • forbidden bond • primal protection • rough pleasure</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;