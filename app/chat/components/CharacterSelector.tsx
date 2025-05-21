// /app/chat/components/CharacterSelector.tsx (renamed from .jsx to .tsx)
import { useState } from 'react';
import Image from 'next/image';
import styles from './CharacterSelector.module.css';

interface Character {
  id: string;
  name: string;
  book: string;
  tagline: string;
  coverImage: string;
}

interface CharacterSelectorProps {
  characters: Character[];
  selectedCharacterId: string;
  onSelectCharacter: (id: string) => void;
}

export default function CharacterSelector({ characters, selectedCharacterId, onSelectCharacter }: CharacterSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedCharacter = characters.find(char => char.id === selectedCharacterId);
  
  return (
    <div className={styles.selectorContainer}>
      <div className={styles.selectedCharacter} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.characterPreview}>
          <div className={styles.coverImageWrapper}>
            <Image 
              src={selectedCharacter?.coverImage || ''} 
              alt={selectedCharacter?.book || ''}
              width={60}
              height={90}
              className={styles.coverImage}
            />
          </div>
          <div className={styles.characterInfo}>
            <h3 className={styles.characterName}>{selectedCharacter?.name}</h3>
            <p className={styles.characterTagline}>{selectedCharacter?.tagline}</p>
          </div>
        </div>
        <div className={styles.selectorArrow}>
          {isOpen ? '▲' : '▼'}
        </div>
      </div>
      
      {isOpen && (
        <div className={styles.characterOptions}>
          {characters.map(character => (
            <div 
              key={character.id}
              className={`${styles.characterOption} ${character.id === selectedCharacterId ? styles.active : ''}`}
              onClick={() => {
                onSelectCharacter(character.id);
                setIsOpen(false);
              }}
            >
              <div className={styles.coverImageWrapper}>
                <Image 
                  src={character.coverImage} 
                  alt={character.book}
                  width={60}
                  height={90}
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.characterInfo}>
                <h3 className={styles.characterName}>{character.name}</h3>
                <p className={styles.characterBook}>{character.book}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}