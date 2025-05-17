// // app/components/BookGrid.jsx
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
      amazonLink: 'https://www.amazon.com/dp/B0F8R9KC6X?&linkCode=ll1&tag=bkelly623-20&linkId=1c7e970e45db2259e927286048e76cc3&language=en_US&ref_=as_li_ss_tl',
    },
    {
      id: 2,
      title: 'Pierced By The Savage Thorns',
      imagePath: '/images/Pierced By The Savage Thorns.jpg',
      description: 'Expect knotting, obsessive possession, sentient vines, primal heat, and a brutal forest god who worships his mate with reverence and ruin.',
      status: 'Available Now',
      amazonLink: 'https://www.amazon.com/dp/B0F8VVWNXM?&linkCode=ll1&tag=bkelly623-20&linkId=c57d5fa99b7f416a2cda128e9f7ba691&language=en_US&ref_=as_li_ss_tl',
    },
    {
      id: 3,
      title: 'Ravaged By The Hollow Beast',
      imagePath: '/images/Ravaged By The Hollow Beast.jpg',
      description: 'Packed with obsessive love, savage claiming, and scorching primal heat. A monster made to ruin you—beautifully.',
      status: 'Available Now',
      amazonLink: 'https://www.amazon.com/dp/B0F8WR6WWM?&linkCode=ll1&tag=bkelly623-20&linkId=ea3cc540673defa97d964644c1b081ef&language=en_US&ref_=as_li_ss_tl',
    },
    {
      id: 4,
      title: 'Claiming The Monster God',
      imagePath: '/images/claiming-the-monster-god.jpg',
      description: 'A reverse harem of fallen gods, explicit scenes of worship, and a new goddess rising to power through pleasure and domination.',
      status: 'Available Now',
      amazonLink: 'https://www.amazon.com/dp/B0F8XXP2BJ?&linkCode=ll1&tag=bkelly623-20&linkId=20dd766ccd4a5808405642a4dee89805&language=en_US&ref_=as_li_ss_tl',
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
      status: 'Available Now',
      amazonLink: 'https://www.amazon.com/dp/B0F8Y8PNF1?&linkCode=ll1&tag=bkelly623-20&linkId=18117f17b400044c50c8d18e9b5f6ef6&language=en_US&ref_=as_li_ss_tl',
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