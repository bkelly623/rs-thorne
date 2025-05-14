import React from 'react';
import styles from './about.module.css';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>About R.S. Thorne</h1>
        
        <div className={styles.bioContent}>
          <div className={styles.authorImageContainer}>
            <img 
              src="/images/profile.jpg" 
              alt="R.S. Thorne" 
              className={styles.authorImage}
            />
          </div>
          
          <div className={styles.bioText}>
            <p className={styles.tagline}>
              <span className={styles.emoji}>🔥</span> <strong>Dark. Obsessive. Unapologetically filthy.</strong>
            </p>
            
            <p>
              R.S. Thorne writes bestselling monster romance for readers who want more than just a love story—they 
              want to be <em>claimed</em>. Best known for the <em>Monstrously Claimed</em> series, Thorne's books blend lush, 
              immersive fantasy with raw erotic heat, summoning gods, beasts, and creatures from the dark to worship 
              heroines in the most sacred—and scandalous—ways imaginable.
            </p>
            
            <p>
              Every story is steeped in ritual, power, and surrender. From shadow kings to thorn-beast gods, 
              her monsters are built to ruin you—and to make sure you enjoy every second of it.
            </p>
            
            <p>
              Thorne doesn't write polite monsters. She writes monsters who <strong>obsess, possess, and bless</strong>—in that order.
            </p>
            
            <div className={styles.bioSection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.emoji}>💀</span> Why Monster Romance?
              </h2>
              <p>
                Because nothing beats the thrill of forbidden devotion. The monsters in Thorne's worlds don't just want 
                the heroine. They were <em>made</em> for her. She writes for the readers who crave danger with their desire, 
                magic in their mating bonds, and heat that doesn't fade after the first climax. If you've ever wanted to be 
                the girl the monster would destroy kingdoms for, you're home.
              </p>
            </div>
            
            <div className={styles.bioSection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.emoji}>✍️</span> What to Expect
              </h2>
              <ul className={styles.expectList}>
                <li>Dark fantasy worlds dripping with ritual, heat, and obsession</li>
                <li>Primal heroes: monstrous, reverent, and unrelenting</li>
                <li>Heroines who bleed, burn, bloom—and rise</li>
                <li>Unapologetic smut: sacred, savage, and seriously addictive</li>
                <li>Fated mates. Sacred sex. Divine transformation.</li>
              </ul>
            </div>
            
            <div className={styles.bioSection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.emoji}>⚡</span> Inspirations
              </h2>
              <p>
                Inspired by myth, madness, and the wildest corners of erotic fantasy, Thorne pulls from sacred rites, 
                folklore, and that moment in every good monster book when the creature kneels. She writes fast, edits slow, 
                and never tones down the climax.
              </p>
            </div>
            
            <div className={styles.bioSection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.emoji}>💡</span> Fun Facts
              </h2>
              <ul className={styles.factsList}>
                <li>Once tried to write a "sweet" fantasy romance. It accidentally turned into ritual monster smut.</li>
                <li>Favorite writing fuel: dark chocolate, ruined playlists, and monster thirst TikToks.</li>
                <li>Has never written a morally gray monster. They're all dark as hell.</li>
              </ul>
            </div>
            
            <div className={styles.quoteContainer}>
              <blockquote className={styles.quote}>
                <span className={styles.emoji}>💬</span> "I don't write to be polite. I write to awaken something you were told to hide."
              </blockquote>
            </div>
            
            <div className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>
                <span className={styles.emoji}>📬</span> Ready to be Claimed?
              </h2>
              <p>
                Join the newsletter to get exclusive content, early access to books, and secret monster bonus scenes 
                you <em>definitely</em> shouldn't read in public.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/#newsletter" className={styles.ctaButton}>Subscribe Now</Link>
                <Link href="/books" className={styles.ctaButton}>View the Monstrously Claimed Series</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.faqContainer}>
          <details className={styles.faqDetails}>
            <summary className={styles.faqSummary}>
              <span className={styles.emoji}>📚</span> Frequently Asked Questions
            </summary>
            <div className={styles.faqContent}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Are your books interconnected?</h3>
                <p className={styles.faqAnswer}>
                  Most are standalone within a shared universe. But if you read them all… you'll notice the monsters talk.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Will you write morally gray heroes?</h3>
                <p className={styles.faqAnswer}>
                  No. Mine are black-hearted beasts who worship one woman and destroy everything else.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How spicy are your books?</h3>
                <p className={styles.faqAnswer}>
                  Ritual. Bond. Mate. Climax. Repeat.
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </main>
  );
}