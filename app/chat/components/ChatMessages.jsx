// /app/chat/components/ChatMessages.jsx
import styles from './ChatMessages.module.css';

export default function ChatMessages({ messages, character }) {
  // Function to format message content with line breaks
  const formatMessage = (content) => {
    return content.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };
  
  // Function to check if message has book promotion
  const hasBookPromotion = (content) => {
    return character.bookPromotions.some(promo => 
      content.includes(promo) || 
      content.includes(character.book)
    );
  };
  
  return (
    <div className={styles.messagesContainer}>
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`${styles.message} ${
            message.role === 'user' ? styles.userMessage : styles.assistantMessage
          } ${hasBookPromotion(message.content) ? styles.promotionMessage : ''}`}
        >
          <div className={styles.messageContent}>
            {formatMessage(message.content)}
          </div>
        </div>
      ))}
    </div>
  );
}