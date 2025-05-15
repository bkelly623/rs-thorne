// app/components/BookGrid.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BookGrid.module.css';

const BookGrid = () => {
  // Book data with explicit descriptions highlighting genre tropes
  const books = [
    {
      id: 1,
      title: 'Claimed By The Kraken',
      imagePath: '/images/Claimed By The Kraken.jpg',
      description: 'A dark monster romance featuring tentacle claiming, divine obsession, breeding altars, and a heroine who finds power in surrender to an ancient sea god.',
      status: 'Available Now',
      amazonLink: '#', // Placeholder
    },
    {
      id: 2,
      title: 'Pierced By The Savage Thorns',
      imagePath: '/images/Pierced By The Savage Thorns.jpg',
      description: 'Expect knotting, obsessive possession, sentient vines, primal heat, and a brutal forest god who worships his mate with reverence and ruin.',
      status: 'Available Now',
      amazonLink: '#', // Placeholder
    },
    {
      id: 3,
      title: 'Ravaged By The Hollow Beast',
      imagePath: '/images/Ravaged By The Hollow Beast.jpg',
      description: 'Packed with obsessive love, savage claiming, and scorching primal heat. A monster made to ruin you—beautifully.',
      status: 'Available Now',
      amazonLink: '#', // Placeholder
    },
    {
      id: 4,
      title: 'Claiming The Monster God',
      imagePath: '/images/claiming-the-monster-god.jpg',
      description: 'A reverse harem of fallen gods, explicit scenes of worship, and a new goddess rising to power through pleasure and domination.',
      status: 'Available Now',
      amazonLink: '#', // Placeholder
    },
    {
      id: 5,
      title: 'Impaled By The Obsidian Stag',
      imagePath: '/images/Impaled By The Obsidian Stag.jpg',
      description: 'Divine breeding, sacred claiming, and a womb that defies the gods in this dark, explicit monster romance.',
      status: 'Coming Soon',
      amazonLink: null, // No link yet
    },
    {
      id: 6,
      title: 'Seduced By The Far Lord',
      imagePath: '/images/Seduced By The Far Lord.jpg',
      description: 'Explicit knotting, claiming, and a forbidden bond with an alpha monster that leaves her changed forever.',
      status: 'Coming Soon',
      amazonLink: null, // No link yet
    }
  ];

  return (
    <section className={styles.bookGridSection}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} shimmer-gold`}>Monstrously Claimed Series</h2>
        <p className={styles.seriesDescription}>
          Possessive alpha monsters, explicit claiming scenes, and heroines who surrender to dark desires. 
          Each standalone novel pushes boundaries with no fade to black.
        </p>
        
        <div className={styles.grid}>
          {books.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={book.imagePath}
                  alt={`Cover of ${book.title}`}
                  width={250}
                  height={375}
                  className={styles.coverImage}
                />
                <div className={styles.statusBadge} data-status={book.status === 'Coming Soon' ? 'coming-soon' : 'available'}>
                  {book.status}
                </div>
              </div>
              
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookDescription}>{book.description}</p>
                
                <div className={styles.ctaWrapper}>
                  {book.amazonLink ? (
                    <a 
                      href={book.amazonLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.amazonButton}
                    >
                      Read on Amazon
                    </a>
                  ) : (
                    <span className={styles.comingSoon}>Coming Soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.seriesNote}>
          <p>
            Each book in the <span className="shimmer-gold">Monstrously Claimed</span> series is a standalone dark monster romance 
            featuring explicit content, possessive alphas, and no fade to black.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookGrid;