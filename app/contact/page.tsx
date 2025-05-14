// app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // In a real implementation, you would send the form data to your server or a form service
    // For now, we'll simulate a successful submission
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (_err) { // Fixed unused variable with underscore prefix
      setError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.contactPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Contact</h1>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.contactText}>
              Questions? Comments? Passionate declarations about which monster was your favorite? 
              I would love to hear from you.
            </p>
            
            <div className={styles.contactMethod}>
              <h3 className={styles.contactMethodTitle}>Email</h3>
              <p className={styles.contactMethodValue}>author@rsthorne.com</p>
            </div>
            
            <div className={styles.contactMethod}>
              <h3 className={styles.contactMethodTitle}>Social Media</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>TikTok</a>
                <a href="#" className={styles.socialLink}>Instagram</a>
                <a href="#" className={styles.socialLink}>Goodreads</a>
              </div>
            </div>
            
            <div className={styles.contactNote}>
              <h3 className={styles.contactNoteTitle}>For Publishers & Media</h3>
              <p className={styles.contactNoteText}>
                For rights inquiries, interview requests, or other business matters,
                please specify in your message.
              </p>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            {!isSubmitted ? (
              <>
                <h2 className={styles.formTitle}>Send a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={styles.formTextarea}
                    ></textarea>
                  </div>
                  
                  {error && <p className={styles.errorMessage}>{error}</p>}
                  
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <h2 className={styles.successTitle}>Message Sent!</h2>
                <p className={styles.successText}>
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className={styles.resetButton}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}