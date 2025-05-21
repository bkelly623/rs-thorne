// /app/chat/page.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { characters, defaultCharacter } from './lib/characters';
import CharacterSelector from './components/CharacterSelector';
import ChatInterface from './components/ChatInterface';
import styles from './page.module.css';

export default function ChatPage() {
  // State for selected character
  const [selectedCharacter, setSelectedCharacter] = useState(defaultCharacter);
  
  // State for chat messages with more erotic initial greeting
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: `I am ${defaultCharacter.name}. *${defaultCharacter.tagline}* My eyes rake over your form as you approach. Have you come to surrender to me willingly, or shall I have to hunt you first?` 
    }
  ]);
  
  // State for loading
  const [isLoading, setIsLoading] = useState(false);
  
  // Function to handle character change - added proper type for characterId
  const handleCharacterChange = (characterId: string) => {
    const character = characters.find(char => char.id === characterId);
    if (character && character.id !== selectedCharacter.id) {
      setSelectedCharacter(character);
      // Reset messages with more seductive intro from new character
      setMessages([
        { 
          role: 'assistant', 
          content: `I am ${character.name}. *${character.tagline}* I can sense your desire from here. The air grows thick with anticipation as our eyes meet. Tell me what brings you to me...` 
        }
      ]);
    }
  };
  
  // Function to handle sending message
  const handleSendMessage = async (message: string) => {
    // Add user message to chat
    const updatedMessages = [
      ...messages,
      { role: 'user', content: message }
    ];
    
    setMessages(updatedMessages);
    setIsLoading(true);
    
    try {
      // Call API with updated messages and character
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages,
          characterId: selectedCharacter.id,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Add AI response to chat
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: data.message }
        ]);
      } else {
        // Handle error
        console.error('API error:', data.error);
        setMessages([
          ...updatedMessages,
          { 
            role: 'assistant', 
            content: 'I apologize, but I seem to be having trouble connecting. Please try again later.' 
          }
        ]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([
        ...updatedMessages,
        { 
          role: 'assistant', 
          content: 'I apologize, but I seem to be having trouble connecting. Please try again later.' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <main className={styles.chatPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Monster Chat</h1>
        <p className={styles.subtitle}>Converse with characters from R.S. Thorne's dark erotic monster romance novels</p>
        
        <CharacterSelector 
          characters={characters}
          selectedCharacterId={selectedCharacter.id}
          onSelectCharacter={handleCharacterChange}
        />
        
        <ChatInterface 
          messages={messages}
          character={selectedCharacter}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
}