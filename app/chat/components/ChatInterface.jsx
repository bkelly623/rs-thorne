// /app/chat/components/ChatInterface.jsx
import { useState, useRef, useEffect } from 'react';
import styles from './ChatInterface.module.css';
import ChatMessages from './ChatMessages';

export default function ChatInterface({ messages, character, onSendMessage, isLoading }) {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };
  
  return (
    <div className={styles.chatInterfaceContainer}>
      <div className={styles.chatBox}>
        <ChatMessages 
          messages={messages} 
          character={character}
        />
        <div ref={messagesEndRef} />
        
        {isLoading && (
          <div className={styles.typingIndicator}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Talk to ${character.name}...`}
          className={styles.chatInput}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className={styles.sendButton}
          disabled={isLoading || !inputValue.trim()}
        >
          Send
        </button>
      </form>
      
      <div className={styles.bookPromotion}>
        <p>Continue the story in <span className={styles.bookTitle}>{character.book}</span></p>
        <a 
          href={character.amazonLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
        >
          Read Now on Amazon
        </a>
      </div>
    </div>
  );
}