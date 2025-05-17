// app/books/page.tsx - COMPLETE FILE
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import SimpleBookSignup from '../components/SimpleBookSignup';
import styles from './books.module.css';

export default function BooksPage() {
  // Activate animations when the component mounts
  useEffect(() => {
    // This function will be called after the component mounts
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      fadeElements.forEach(element => {
        element.classList.add('visible');
      });
    }, 300);
  }, []);

  const books = [
    {
      id: 1,
      title: 'Claimed By The Kraken',
      imagePath: '/images/Claimed By The Kraken.jpg',
      description: 'When Lira is cast into the Kraken\'s Cove as a sacrifice, an ancient sea god with tentacles that writhe with forbidden power claims her as his mate. Featuring divine obsession, explicit tentacle scenes, breeding altars, and a heroine who rises as a queen.',
      status: 'Available Now',
      amazonLink: '#'
    },
    {
      id: 2,
      title: 'Pierced By The Savage Thorns',
      imagePath: '/images/Pierced By The Savage Thorns.jpg',
      description: 'When Wren steps off the path in Wyldgrove Forest, she\'s stalked by something ancient that hungers for her heat. Expect knotting, obsessive possession, sentient vines, primal heat, and a brutal forest god who worships his mate with reverence and ruin.',
      status: 'Available Now',
      amazonLink: '#'
    },
    {
      id: 3,
      title: 'Ravaged By The Hollow Beast',
      imagePath: '/images/Ravaged By The Hollow Beast.jpg',
      description: 'Dragged into a monstrous realm of blood trials and brutal devotion, Leah is bound to a primal, possessive creature who burns for one thing alone: her. Packed with obsessive love, savage claiming, and scorching heat. A monster made to ruin you—beautifully.',
      status: 'Available Now',
      amazonLink: '#'
    },
    {
      id: 4,
      title: 'Claiming The Monster God',
      imagePath: '/images/claiming-the-monster-god.jpg',
      description: 'When Nherissa rises from the altar not as a victim but as a goddess of lust and vengeance, the heavens tremble. A reverse harem of fallen gods, explicit scenes of worship, and a pantheon turned to ash beneath her moans.',
      status: 'Available Now',
      amazonLink: '#'
    },
    {
      id: 5,
      title: 'Impaled By The Obsidian Stag',
      imagePath: '/images/Impaled By The Obsidian Stag.jpg',
      description: 'She was meant to be a sacrifice—offered to the forest. But when the Obsidian Stag rose with antlers and need, he demanded her body. Now her womb swells with divine seed in this dark, explicit monster romance featuring sacred claiming and forbidden rituals.',
      status: 'Coming Soon',
      amazonLink: null
    },
    {
      id: 6,
      title: 'Seduced By The Far Lord',
      imagePath: '/images/Seduced By The Far Lord.jpg',
      description: 'An offering to the cursed forest, she expected to be devoured. Instead, she was claimed. Featuring explicit knotting, claiming rituals, and a forbidden bond with an alpha monster that leaves her changed forever.',
      status: 'Coming Soon',
      amazonLink: null
    },
    {
      id: 7,
      title: 'Claimed By The Living Shadow',
      imagePath: '/images/Claimed By The Living Shadow.jpg',
      description: 'Bound and offered to an ancient force that shouldn\'t exist, Mara is claimed by a living shadow—one who doesn\'t take her life, but her body, her heat, and her destiny. Featuring sacred breeding rituals, divine pregnancy, multi-monster worship scenes, and a heroine who becomes a sanctuary for entire worlds.',
      status: 'Available Now',
      amazonLink: 'https://www.amazon.com/dp/B0F8Y6TG56?&linkCode=ll1&tag=bkelly623-20&linkId=d8cfe1e7943c39372e34ba7327818cb1&language=en_US&ref_=as_li_ss_tl'
    },
    {
      id: 8,
      title: 'Impregnated By The Void Prince',
      imagePath: '/images/Impregnated By The Void Prince.jpg',
      description: 'When Aeloria is offered as a virgin sacrifice to the forest gods, she is claimed by something without a name—just tentacles and purpose. She is stretched, marked, and impregnated by something ancient and divine in this unhinged tale of monster breeding, triple penetration, ritual worship, and a heroine who transforms from trembling sacrifice to the origin of a new world.',
      status: 'Available Now',
      amazonLink: 'https://www.amazon.com/dp/B0F8YFYNZ4?&linkCode=ll1&tag=bkelly623-20&linkId=008313d1a6000547ed42fd7eb427b210&language=en_US&ref_=as_li_ss_tl'
    }
  ];

  return (
    <main className={styles.booksPage}>
      {/* Hero Banner with Parallax Effect */}
      <section className={`${styles.heroBanner} parallax-container`}>
        <div className="parallax-bg" data-speed="0.2" style={{backgroundImage: "url('/images/tentacle-bg.svg')"}}></div>
        <div className={`${styles.heroOverlay} parallax-content`}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} shimmer-gold fade-in-up`}>MONSTROUSLY CLAIMED</h1>
            <p className={`${styles.heroTagline} fade-in-up delay-200`}>Dark monster romance where surrender is only the beginning</p>
          </div>
        </div>
      </section>

      {/* Tentacle divider between sections */}
      <div className="tentacle-divider"></div>

      <section className={styles.booksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} shimmer-gold fade-in-up`}>Explore the Series</h2>
            <p className={`${styles.sectionDescription} fade-in-up delay-200`}>
              Each standalone novel features possessive alpha monsters, explicit claiming scenes, and heroines who find power in surrender. No fade to black.
            </p>
          </div>

          <div className={styles.booksGrid}>
            {books.map((book, index) => (
              <div 
                key={book.id} 
                className={`${styles.bookCard} fade-in-up`} 
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.bookImageContainer}>
                  <div className={styles.bookCoverWrapper}>
                    <Image
                      src={book.imagePath}
                      alt={`Cover of ${book.title}`}
                      width={300}
                      height={450}
                      className={`${styles.bookCover} cover-transform`}
                      priority={book.id <= 3}
                    />
                  </div>
                  <div 
                    className={styles.statusBadge} 
                    data-status={book.status === 'Coming Soon' ? 'coming-soon' : 'available'}
                  >
                    {book.status}
                  </div>
                </div>
                
                <div className={styles.bookDetails}>
                  <h3 className={`${styles.bookTitle} shimmer-gold`}>{book.title}</h3>
                  <div className={styles.seriesBadge}>Monstrously Claimed Series</div>
                  <p className={styles.bookDescription}>{book.description}</p>
                  
                  <div className={styles.bookActions}>
                    {book.amazonLink ? (
                      <a 
                        href={book.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.amazonButton} glow-btn`}
                      >
                        Read on Amazon
                      </a>
                    ) : (
                      <span className={styles.comingSoonButton}>Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <SimpleBookSignup />
    </main>
  );
}