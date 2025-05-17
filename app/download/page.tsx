'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './download.module.css';

export default function DownloadChoicePage() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Download Your Free Books</h1>
      
      <div className={styles.booksContainer}>
        <div className={styles.bookSection}>
          <div className={styles.bookHeading}>
            <img 
              src="/images/Claimed, Crowned, Consumed.jpg" 
              alt="Claimed, Crowned, Consumed cover" 
              className={styles.bookThumbnail}
            />
            <div>
              <h2 className={styles.bookSectionTitle}>Claimed, Crowned, Consumed</h2>
              <p className={styles.bookSectionSubtitle}>
                Available in multiple formats for your convenience.
              </p>
            </div>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>EPUB Format</h3>
              <p className={styles.cardText}>
                <strong>Recommended for:</strong> Most e-readers (Kobo, Nook), tablets, 
                and smartphones. Text adjusts to fit your screen.
              </p>
              <a 
                href="/downloads/Claimed-Crowned-Consumed.epub" 
                className={styles.button}
                download
              >
                Download EPUB
              </a>
            </div>
            
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>PDF Format</h3>
              <p className={styles.cardText}>
                <strong>Recommended for:</strong> Computers, printing, and exact page layout preservation.
              </p>
              <a 
                href="/downloads/Claimed-Crowned-Consumed.pdf" 
                className={styles.button}
                download
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>
        
        <div className={styles.bookSection}>
          <div className={styles.bookHeading}>
            <img 
              src="/images/Bonded To The Dragon Lord.jpg" 
              alt="Bonded To The Dragon Lord cover" 
              className={styles.bookThumbnail}
            />
            <div>
              <h2 className={styles.bookSectionTitle}>Bonded To The Dragon Lord</h2>
              <p className={styles.bookSectionSubtitle}>
                Available in multiple formats for your convenience.
              </p>
            </div>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>EPUB Format</h3>
              <p className={styles.cardText}>
                <strong>Recommended for:</strong> Most e-readers (Kobo, Nook), tablets, 
                and smartphones. Text adjusts to fit your screen.
              </p>
              <a 
                href="/downloads/Bonded-To-The-Dragon-Lord.epub" 
                className={styles.button}
                download
              >
                Download EPUB
              </a>
            </div>
            
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>PDF Format</h3>
              <p className={styles.cardText}>
                <strong>Recommended for:</strong> Computers, printing, and exact page layout preservation.
              </p>
              <a 
                href="/downloads/Bonded-To-The-Dragon-Lord.pdf" 
                className={styles.button}
                download
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setShowInfo(!showInfo)}
        className={styles.link}
      >
        {showInfo ? "Hide reading instructions" : "Need help loading to your device?"}
      </button>
      
      {showInfo && (
        <div className={styles.helpBox}>
          <h3 className={styles.helpTitle}>Loading to Different Devices</h3>
          
          <h4 className={styles.helpSubtitle}>Kindle:</h4>
          <ol className={styles.list}>
            <li>Download the EPUB file</li>
            <li>Email it to your Kindle email address (found in your Amazon account)</li>
            <li>Or use a USB cable to transfer the file to your Kindle</li>
          </ol>
          
          <h4 className={styles.helpSubtitle}>iOS (iPhone/iPad):</h4>
          <ol className={styles.list}>
            <li>Download the EPUB file</li>
            <li>Open it in Apple Books or your preferred e-reader app</li>
          </ol>
          
          <h4 className={styles.helpSubtitle}>Android:</h4>
          <ol className={styles.list}>
            <li>Download the EPUB file</li>
            <li>Open it in Google Play Books or your preferred e-reader app</li>
          </ol>
          
          <h4 className={styles.helpSubtitle}>Other E-readers:</h4>
          <ol className={styles.list}>
            <li>Download the EPUB file</li>
            <li>Connect your e-reader to your computer via USB</li>
            <li>Transfer the file to your e-reader's documents or books folder</li>
          </ol>
        </div>
      )}
      
      <p className={styles.footer}>
        Embracing the darkness,<br />
        R.S. Thorne
      </p>
    </div>
  );
}