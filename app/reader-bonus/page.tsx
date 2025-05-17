'use client';

import React, { useEffect } from 'react';
import styles from './reader-bonus.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SimpleBookSignup from '../components/SimpleBookSignup';

export default function ReaderBonus() {
  // Activate animations when the component mounts
  useEffect(() => {
    // Add visible class to elements with fade animations after a short delay
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      fadeElements.forEach(element => {
        element.classList.add('visible');
      });
    }, 300);

    // Function to handle scroll animations
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      
      fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Function to handle parallax effect
    const handleParallax = () => {
      const parallaxBgs = document.querySelectorAll('.parallax-bg');
      
      parallaxBgs.forEach(bg => {
        const speedAttr = bg.getAttribute('data-speed') || '0.2';
        const speed = parseFloat(speedAttr);
        const yPos = -(window.pageYOffset * speed);
        (bg as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Check if there's a hash in URL and scroll to it after a delay
    const scrollToBookSection = () => {
      if (window.location.hash) {
        setTimeout(() => {
          const id = window.location.hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    };

    // Create ambient particles for background
    const createAmbientParticles = () => {
      const ambientBg = document.createElement('div');
      ambientBg.classList.add('ambient-bg');
      const container = document.querySelector(`.${styles.bonusPageContainer}`);
      if (container) {
        container.appendChild(ambientBg);
      }
      
      // Create particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('ambient-particle');
        
        // Random positioning
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 15}s`;
        
        ambientBg.appendChild(particle);
      }
    };

    // Initial calls
    handleScrollAnimations();
    createAmbientParticles();
    scrollToBookSection();
    
    // Event listeners
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('scroll', handleParallax);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <main className={`${styles.bonusPageContainer} parallax-container`}>
      <div className="parallax-bg" data-speed="0.2" style={{backgroundImage: "url('/images/tentacle-bg.svg')"}}></div>
      
      {/* Welcome Header Section */}
      <div className={styles.welcomeHeader}>
        <h1 className={`${styles.welcomeTitle} shimmer-gold fade-in-up`}>EXCLUSIVE DEPTHS</h1>
        <div className={`${styles.tentacleDivider} tentacle-divider fade-in-up delay-100`}></div>
      </div>

      {/* Honor Message */}
      <div className={`${styles.honorMessageContainer} fade-in-up delay-200`}>
        <p className={styles.honorMessage}>
          <span className={styles.emphasizedText}>You've been claimed.</span> This forbidden sanctuary exists for those who've surrendered to the depths and left their mark in the mortal realm. Your review echoes through the abyss, drawing others into our dark embrace.
        </p>
        <p className={styles.honorMessageSecondary}>
          If you've already left your review, indulge in these exclusive offerings with my darkest gratitude. If not yet marked by your words, perhaps these forbidden pages will inspire you to spread our corruption further...
        </p>
      </div>

      {/* Book Navigation */}
      <div className={`${styles.bookNavigation} fade-in-up delay-250`}>
        <h2 className={styles.bookNavTitle}>Find Your Forbidden Content</h2>
        <div className={styles.bookLinks}>
          <a href="#claimed-by-the-kraken" className={styles.bookLink}>Claimed By The Kraken</a>
          <a href="#bloomed-by-the-thorn-king" className={styles.bookLink}>Bloomed By The Thorn King</a>
          <a href="#claimed-by-the-living-shadow" className={styles.bookLink}>Claimed By The Living Shadow</a>
          <a href="#claiming-the-monster-god" className={styles.bookLink}>Claiming The Monster God</a>
          <a href="#devoured-by-the-veil-king" className={styles.bookLink}>Devoured By The Veil King</a>
          <a href="#impaled-by-the-obsidian-stag" className={styles.bookLink}>Impaled By The Obsidian Stag</a>
          <a href="#impregnated-by-the-void-prince" className={styles.bookLink}>Impregnated By The Void Prince</a>
          <a href="#pierced-by-the-savage-thorns" className={styles.bookLink}>Pierced By The Savage Thorns</a>
          <a href="#ravaged-by-the-hollow-beast" className={styles.bookLink}>Ravaged By The Hollow Beast</a>
          <a href="#seduced-by-the-far-lord" className={styles.bookLink}>Seduced By The Far Lord</a>
        </div>
      </div>

      {/* Bonus Content Sections */}
      <div className={`${styles.allBonusContent} fade-in-up delay-300`}>
        {/* CLAIMED BY THE KRAKEN */}
        <div className={styles.bookBonusContainer} id="claimed-by-the-kraken">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Claimed By The Kraken.jpg"
                alt="Claimed By The Kraken Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
                priority
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>CLAIMED BY THE KRAKEN</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              Dive deeper into the forbidden connection between the sea god and his unwilling bride. 
              Experience the ritual aftermath that was too intense for the original manuscript—where 
              possession becomes complete and the boundaries between monster and mate dissolve completely.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/claimed-by-the-kraken-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/claimed-by-the-kraken-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Includes scenes too explicit for the published version and a glimpse into the future of the series.</p>
            </div>
          </div>
        </div>

        {/* BLOOMED BY THE THORN KING */}
        <div className={styles.bookBonusContainer} id="bloomed-by-the-thorn-king">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Bloomed By The Thorn King.jpg"
                alt="Bloomed By The Thorn King Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>BLOOMED BY THE THORN KING</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              Delve into the thorned embrace that comes after surrender. This extended epilogue reveals 
              what happens when the blooming is complete—when her body has fully adapted to his poisonous touch, 
              and she can finally withstand the full, unrestrained force of his most primal desires.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/bloomed-by-the-thorn-king-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/bloomed-by-the-thorn-king-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Features a private ritual in the garden of thorns where pain and pleasure intertwine beyond mortal limits.</p>
            </div>
          </div>
        </div>

        {/* CLAIMED BY THE LIVING SHADOW */}
        <div className={styles.bookBonusContainer} id="claimed-by-the-living-shadow">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Claimed By The Living Shadow.jpg"
                alt="Claimed By The Living Shadow Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>CLAIMED BY THE LIVING SHADOW</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              Witness what transpires when darkness is given flesh. This extended scene explores how the 
              shadow entity manifests physical form to claim its obsession completely—a merging of 
              shadow and flesh that transcends the boundaries between worlds, allowing for sensations 
              beyond mere touch.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/claimed-by-the-living-shadow-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/claimed-by-the-living-shadow-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Contains the unrestrained depths of what it means to be possessed by a being that can be everywhere at once.</p>
            </div>
          </div>
        </div>

        {/* CLAIMING THE MONSTER GOD */}
        <div className={styles.bookBonusContainer} id="claiming-the-monster-god">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/claiming-the-monster-god.jpg"
                alt="Claiming The Monster God Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>CLAIMING THE MONSTER GOD</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              The tables turn when the worshipped becomes the worshipper. This forbidden chapter reveals 
              what happens when a mortal woman learns to harness the power of her own surrender, bringing 
              an ancient entity to its knees in a ritual of mutual possession where dominance and submission 
              blur into one savage communion.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/claiming-the-monster-god-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/claiming-the-monster-god-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Explores the raw, primal exchange of power that occurs when divinity meets its match in mortal desire.</p>
            </div>
          </div>
        </div>
        
        {/* DEVOURED BY THE VEIL KING */}
        <div className={styles.bookBonusContainer} id="devoured-by-the-veil-king">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Devoured By The Veil King.jpg"
                alt="Devoured By The Veil King Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>DEVOURED BY THE VEIL KING</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              Beyond the veil lies appetite without end. This extended sequence reveals what happens 
              when the barrier between realms is temporarily lifted, allowing the Veil King to manifest 
              his full, unrestrained hunger in the mortal world—consuming not just body, but mind and 
              soul in an act of total possession that transcends physical limits.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/devoured-by-the-veil-king-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/devoured-by-the-veil-king-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Contains scenes of otherworldly consumption that blurs the line between destruction and creation.</p>
            </div>
          </div>
        </div>

        {/* IMPALED BY THE OBSIDIAN STAG */}
        <div className={styles.bookBonusContainer} id="impaled-by-the-obsidian-stag">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Impaled By The Obsidian Stag.jpg"
                alt="Impaled By The Obsidian Stag Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>IMPALED BY THE OBSIDIAN STAG</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              The ancient ritual of claiming reaches its darkest culmination. This uncut scene reveals 
              the full mating ceremony where the Obsidian Stag stakes his claim with brutal tenderness—piercing 
              not just flesh but the veil between mortality and divinity. When their bodies join, so too do 
              their souls, binding them together in ways that defy the natural order.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/impaled-by-the-obsidian-stag-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/impaled-by-the-obsidian-stag-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Features a sacred rutting so intense it reshapes reality around the participants.</p>
            </div>
          </div>
        </div>

        {/* IMPREGNATED BY THE VOID PRINCE */}
        <div className={styles.bookBonusContainer} id="impregnated-by-the-void-prince">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Impregnated By The Void Prince.jpg"
                alt="Impregnated By The Void Prince Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>IMPREGNATED BY THE VOID PRINCE</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              The consummation of void and vessel reaches its fullest expression. This explicit epilogue 
              reveals what happens when the final seeding takes place—when the Void Prince's essence fills 
              her completely, transforming her from within as she carries the heir to both worlds. Experience 
              the transcendent pleasure that comes with bearing the impossible.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/impregnated-by-the-void-prince-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/impregnated-by-the-void-prince-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Explores the ecstasy of breeding with a being whose seed transcends physical matter.</p>
            </div>
          </div>
        </div>

        {/* PIERCED BY THE SAVAGE THORNS */}
        <div className={styles.bookBonusContainer} id="pierced-by-the-savage-thorns">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Pierced By The Savage Thorns.jpg"
                alt="Pierced By The Savage Thorns Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>PIERCED BY THE SAVAGE THORNS</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              When pain and pleasure become indistinguishable. This extended scene reveals the 
              private ceremony where his thorns penetrate beyond the physical—each sharp point 
              finding the perfect balance between agony and ecstasy as they mark her as permanently 
              his. Experience the complete surrender to sensations that would break a lesser being.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/pierced-by-the-savage-thorns-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/pierced-by-the-savage-thorns-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Contains scenes of beautiful suffering and exquisite impalement that penetrate beyond mere flesh.</p>
            </div>
          </div>
        </div>

        {/* RAVAGED BY THE HOLLOW BEAST */}
        <div className={styles.bookBonusContainer} id="ravaged-by-the-hollow-beast">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Ravaged By The Hollow Beast.jpg"
                alt="Ravaged By The Hollow Beast Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>RAVAGED BY THE HOLLOW BEAST</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              The emptiness within him can only be filled by her complete surrender. This uncut 
              scene reveals what happens when the Hollow Beast's hunger reaches its peak—a 
              desperate, primal claiming that borders on feral as he seeks to fill the void at 
              his core with her essence, consuming her pleasure as sustenance for his starving soul.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/ravaged-by-the-hollow-beast-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/ravaged-by-the-hollow-beast-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Features a claiming so intense it blurs the line between pleasure and annihilation.</p>
            </div>
          </div>
        </div>

        {/* SEDUCED BY THE FAR LORD */}
        <div className={styles.bookBonusContainer} id="seduced-by-the-far-lord">
          <div className={styles.bookCoverColumn}>
            <div className={styles.bookCoverWrapper}>
              <Image 
                src="/images/Seduced By The Far Lord.jpg"
                alt="Seduced By The Far Lord Book Cover"
                width={300}
                height={450}
                className={`${styles.bookCover} cover-transform`}
              />
            </div>
          </div>
          
          <div className={styles.bonusContentColumn}>
            <h2 className={`${styles.bookTitle} shimmer-gold`}>SEDUCED BY THE FAR LORD</h2>
            <h3 className={styles.bonusContentTitle}>EXCLUSIVE BONUS CONTENT</h3>
            
            <p className={styles.bonusDescription}>
              Distance is an illusion when desire bridges worlds. This extended chapter explores 
              how the Far Lord claims his chosen bride across dimensions—his touch manifesting 
              in impossible ways, manipulating her pleasure from realms beyond comprehension. 
              Experience the intoxicating surrender to sensations that defy the laws of physical existence.
            </p>
            
            <div className={styles.downloadButtons}>
              <a href="/downloads/seduced-by-the-fae-lord-bonus.pdf" target="_blank" className={`${styles.downloadButton} pulse-effect`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                DOWNLOAD PDF
              </a>
              
              <a href="/downloads/seduced-by-the-fae-lord-bonus.epub" target="_blank" className={`${styles.downloadButton} ${styles.epubButton}`}>
                <span className={styles.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </span>
                DOWNLOAD EPUB
              </a>
            </div>
            
            <div className={styles.bonusNote}>
              <p>Contains intimate otherworldly encounters that transcend the boundaries of space and time.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section - Using SimpleBookSignup component */}
      <SimpleBookSignup />
      
      {/* Privacy Note */}
      <div className={`${styles.privateNote} fade-in-up delay-500`}>
        <p>
          This sanctuary is for claimed ones only. Please don't share this sacred space publicly.
        </p>
      </div>
    </main>
  );
}