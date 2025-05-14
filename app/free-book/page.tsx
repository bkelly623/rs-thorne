// app/free-book/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './free-book.module.css';

export default function FreeBookPage() {
  // State for the signup form
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    readingFrequency: '',
    subgenrePreferences: []
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Options for the form
  const subgenreOptions = [
    { id: 'tentacle', label: 'Tentacle/Sea God' },
    { id: 'werewolf', label: 'Werewolf/Shifter' },
    { id: 'vampire', label: 'Vampire' },
    { id: 'demon', label: 'Demon/Incubus' },
    { id: 'dragon', label: 'Dragon/Wyvern' },
    { id: 'fae', label: 'Fae/Otherworldly' },
  ];

  const readingFrequencyOptions = [
    { value: '1-book-week', label: '1+ books per week' },
    { value: '1-2-books-month', label: '1-2 books per month' },
    { value: 'occasional', label: 'Occasional reader' }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox changes for subgenre preferences
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

  // Submit form handler
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
          readingFrequency: formData.readingFrequency,
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
        readingFrequency: '',
        subgenrePreferences: []
      });
      
      // Scroll to top to show success message
      window.scrollTo(0, 0);
      
    } catch (err) {
      setError(err.message || 'Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.freeBookPage}>
      {success ? (
        <div className={styles.successContainer}>
          <div className={styles.successContent}>
            <h1 className={styles.successTitle}>YOU'VE BEEN CLAIMED</h1>
            <div className={styles.successImageContainer}>
              <img 
                src="/images/Claimed, Crowned, Consumed.jpg" 
                alt="Claimed, Crowned, Consumed" 
                className={styles.successBookCover} 
              />
              <div className={styles.glowEffect}></div>
            </div>
            <p className={styles.successMessage}>
              The dark depths await you. Check your email for your free book download.
            </p>
            <p className={styles.successDetails}>
              If you don't see it within a few minutes, please check your spam folder. 
              You're now part of the dark realm where passion knows no bounds.
            </p>
            <Link href="/" className={styles.returnButton}>
              Return to Homepage
            </Link>
          </div>
        </div>
      ) : (
        <>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.pageTitle}>CLAIM YOUR FREE BOOK</h1>
              <p className={styles.pageSubtitle}>Enter a world where monsters don't just want—they <em>worship</em></p>
            </div>
          </section>

          <section className={styles.mainContent}>
            <div className={styles.contentWrapper}>
              <div className={styles.bookInfo}>
                <div className={styles.bookCoverContainer}>
                  <img 
                    src="/images/Claimed, Crowned, Consumed.jpg" 
                    alt="Claimed, Crowned, Consumed cover" 
                    className={styles.bookCover}
                  />
                  <div className={styles.freeTag}>FREE</div>
                </div>
                
                <div className={styles.bookDescription}>
                  <h2 className={styles.bookTitle}>CLAIMED, CROWNED, CONSUMED</h2>
                  <h3 className={styles.seriesTitle}>Monstrously Claimed Series</h3>
                  
                  <div className={styles.bookExcerpt}>
                    <p className={styles.excerptText}>
                      <strong>She was never meant to survive the ritual. Now she wears his crown.</strong>
                    </p>
                    <p className={styles.excerptText}>
                      Maris was raised by the tide cult to be a vessel—obedient, untouched, marked for sacrifice. 
                      But when she's dragged beneath the waves, the god waiting in the dark doesn't devour her.
                    </p>
                    <p className={styles.excerptText}>
                      He fills her. He changes her. He makes her come apart on a breeding altar—and then rebuilds her, 
                      glowing and wrecked.
                    </p>
                    <p className={styles.tagline}>
                      "You're not here for a love story. You're here to be <em>rewritten.</em>"
                    </p>
                  </div>
                  
                  <div className={styles.benefitsList}>
                    <h3 className={styles.benefitsTitle}>When You Join R.S. Thorne's Dark Realm:</h3>
                    <ul>
                      <li>Get this complete, high-heat monster romance delivered instantly</li>
                      <li>Receive exclusive bonus scenes too explicit for publication</li>
                      <li>Be first to know about new releases and special offers</li>
                      <li>Access subscriber-only content and extended epilogues</li>
                    </ul>
                  </div>
                  
                  <div className={styles.testimonials}>
                    <div className={styles.testimonial}>
                      <p className={styles.testimonialText}>
                        "I've never read anything like this before. The rituals, the worship, the <em>claiming</em>... 
                        I couldn't put it down. R.S. Thorne writes monsters that will ruin you for human men."
                      </p>
                      <p className={styles.testimonialAuthor}>— Melissa K.</p>
                    </div>
                    
                    <div className={styles.testimonial}>
                      <p className={styles.testimonialText}>
                        "The perfect balance of dark, erotic, and surprisingly emotional. I've read it three times 
                        and find new details with each read. Absolutely addictive."
                      </p>
                      <p className={styles.testimonialAuthor}>— Jennifer T.</p>
                    </div>
                    
                    <div className={styles.testimonial}>
                      <p className={styles.testimonialText}>
                        "If you think you've read monster romance before, think again. This is a whole new level 
                        of intensity. Consider me claimed and consumed."
                      </p>
                      <p className={styles.testimonialAuthor}>— Rachel M.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.signupFormContainer}>
                <div className={styles.formWrapper}>
                  <h2 className={styles.formTitle}>GET YOUR FREE BOOK NOW</h2>
                  
                  <form onSubmit={handleSubmit} className={styles.signupForm}>
                    <div className={styles.formField}>
                      <label htmlFor="email" className={styles.formLabel}>Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={styles.formInput}
                        placeholder="Where should we send your book?"
                      />
                    </div>
                    
                    <div className={styles.formField}>
                      <label htmlFor="firstName" className={styles.formLabel}>First Name (Optional)</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="What should we call you?"
                      />
                    </div>
                    
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>How often do you read romance? (Optional)</label>
                      <div className={styles.radioGroup}>
                        {readingFrequencyOptions.map(option => (
                          <label key={option.value} className={styles.radioLabel}>
                            <input
                              type="radio"
                              name="readingFrequency"
                              value={option.value}
                              checked={formData.readingFrequency === option.value}
                              onChange={handleInputChange}
                              className={styles.radioInput}
                            />
                            <span className={styles.radioText}>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>What monsters captivate you? (Optional)</label>
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
                            <span className={styles.checkboxText}>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    {error && <p className={styles.errorMessage}>{error}</p>}
                    
                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={loading}
                    >
                      {loading ? 'SENDING...' : 'GET YOUR FREE BOOK →'}
                    </button>
                    
                    <p className={styles.privacyPolicy}>
                      By subscribing, you'll receive your free book and join R.S. Thorne's newsletter. 
                      Your information will never be shared with third parties, and you can unsubscribe at any time. 
                      We respect your privacy and will only send content related to book releases and exclusive offers.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}