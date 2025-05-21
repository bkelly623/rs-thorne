// /app/chat/lib/characters/index.js
import { faeLord } from './fae-lord';
import { krakenKing } from './kraken-king';
import { monsterKing } from './monster-king';

// Add book purchase links
const bookLinks = {
  "Claimed by the Kraken": "https://www.amazon.com/dp/B0F8R9KC6X?&linkCode=ll1&tag=bkelly623-20&linkId=1c7e970e45db2259e927286048e76cc3&language=en_US&ref_=as_li_ss_tl",
  "Seduced by the Fae Lord": "https://www.amazon.com/dp/B0F8Y8PNF1?&linkCode=ll1&tag=bkelly623-20&linkId=18117f17b400044c50c8d18e9b5f6ef6&language=en_US&ref_=as_li_ss_tl",
  "Mated by the Monster King": "#" // Placeholder until live
};

// Add image paths
const bookCovers = {
  "Claimed by the Kraken": "/images/Claimed By The Kraken.jpg",
  "Seduced by the Fae Lord": "/images/Seduced By The Fae Lord.jpg",
  "Mated by the Monster King": "/images/claiming-the-monster-god.jpg" // Using closest match from your images
};

// Enhance character objects with links and cover images
const enhancedFaeLord = {
  ...faeLord,
  amazonLink: bookLinks[faeLord.book],
  coverImage: bookCovers[faeLord.book]
};

const enhancedKrakenKing = {
  ...krakenKing,
  amazonLink: bookLinks[krakenKing.book],
  coverImage: bookCovers[krakenKing.book]
};

const enhancedMonsterKing = {
  ...monsterKing,
  amazonLink: bookLinks[monsterKing.book],
  coverImage: bookCovers[monsterKing.book]
};

// Export all characters in an array
export const characters = [
  enhancedFaeLord,
  enhancedKrakenKing,
  enhancedMonsterKing
];

// Export helper functions
export const getCharacterById = (id) => 
  characters.find(char => char.id === id);

export const getAllCharacters = () => characters;

// Default character (first in list)
export const defaultCharacter = characters[0];