// app/free-book/page.tsx
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './free-book.module.css';

export default function FreeBookPage() {
  const router = useRouter();
  
  // State for the signup form
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    readingFrequency: '',
    subgenrePreferences: [] as string[]
  });
  const [loading, setLoading] = useState(false);
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
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox changes for subgenre preferences
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          subgenrePreferences: formData.subgenrePreferences,
          sourceComponent: 'FreeBookPage'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Redirect to download page instead of showing success message
      router.push('/download');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to subscribe. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className={styles.freeBookPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>CLAIM YOUR FREE BOOKS</h1>
          <p className={styles.pageSubtitle}>Enter a world where monsters don&apos;t just want—they <em>worship</em></p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.booksShowcase}>
            <div className={styles.bookCard}>
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
                    But when she&apos;s dragged beneath the waves, the god waiting in the dark doesn&apos;t devour her.
                  </p>
                  <p className={styles.tagline}>
                    &quot;You&apos;re not here for a love story. You&apos;re here to be <em>rewritten.</em>&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.bookCard}>
              <div className={styles.bookCoverContainer}>
                <img 
                  src="/images/Bonded To The Dragon Lord.jpg" 
                  alt="Bonded To The Dragon Lord cover" 
                  className={styles.bookCover}
                />
                <div className={styles.freeTag}>FREE</div>
              </div>
              
              <div className={styles.bookDescription}>
                <h2 className={styles.bookTitle}>BONDED TO THE DRAGON LORD</h2>
                <h3 className={styles.seriesTitle}>Monstrously Claimed Series</h3>
                
                <div className={styles.bookExcerpt}>
                  <p className={styles.excerptText}>
                    <strong>He was supposed to devour me. Instead, he claimed me. Body, bond… and soul.</strong>
                  </p>
                  <p className={styles.excerptText}>
                    When offered as a sacrifice to the mountain's most feared monster, she expected death. 
                    Instead, she found Kael—wings like shadow, eyes like flame, and a bond that won't let go.
                  </p>
                  <p className={styles.tagline}>
                    &quot;Every touch makes the mountain tremble. Every separation ignites the fire within.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles.benefitsList}>
              <h3 className={styles.benefitsTitle}>When You Join R.S. Thorne&apos;s Dark Realm:</h3>
              <ul>
                <li>Get TWO complete, high-heat monster romances delivered instantly</li>
                <li>Receive exclusive bonus scenes too explicit for publication</li>
                <li>Be first to know about new releases and special offers</li>
                <li>Access subscriber-only content and extended epilogues</li>
              </ul>
            </div>
            
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                <p className={styles.testimonialText}>
                  &quot;I&apos;ve never read anything like this before. The rituals, the worship, the <em>claiming</em>... 
                  I couldn&apos;t put it down. R.S. Thorne writes monsters that will ruin you for human men.&quot;
                </p>
                <p className={styles.testimonialAuthor}>— Melissa K.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.signupFormContainer}>
            <div className={styles.formWrapper}>
              <h2 className={styles.formTitle}>GET YOUR FREE BOOKS NOW</h2>
              
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
                    placeholder="Where should we send your books?"
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
                  {loading ? 'SENDING...' : 'GET YOUR FREE BOOKS →'}
                </button>
                
                <p className={styles.privacyPolicy}>
                  By subscribing, you&apos;ll receive your free books and join R.S. Thorne&apos;s newsletter. 
                  Your information will never be shared with third parties, and you can unsubscribe at any time. 
                  We respect your privacy and will only send content related to book releases and exclusive offers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}