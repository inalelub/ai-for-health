import React, { useState } from 'react';
import './chat.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botMessage = {
      sender: 'bot',
      text: generateBotReply(input),
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');
  };

  const generateBotReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) return 'Hello! How can I help you today?';
    if (lower.includes('help')) return 'Sure, tell me what you need help with.';
    return `You said: "${text}"`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      {messages.length > 0 && (
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
      )}

      <div className={`chat-input-wrapper ${messages.length === 0 ? 'centered' : ''}`}>
        <input
          type="text"
          value={input}
          placeholder="Hey, how can i assist you"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend} aria-label="Send">
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M21.1278 6.18259C21.1276 6.1832 21.1275 6.1838 21.1273 6.18441L17.013 19.394C16.2487 21.839 12.8232 21.8798 12.0108 19.4468L12.01 19.4442L10.7875 15.8276C10.3768 14.5745 9.39515 13.6265 8.17816 13.2211L4.55221 11.9997C2.12266 11.1855 2.16644 7.74515 4.58179 6.98632L17.8396 2.87816C19.8553 2.24181 21.755 4.1257 21.1278 6.18259ZM17.3938 1.44593C20.5863 0.439728 23.5345 3.43986 22.5618 6.62281L18.4449 19.8408C17.2516 23.658 11.8683 23.7517 10.5886 19.9234L9.36534 16.3045C9.10562 15.5095 8.48677 14.9047 7.70334 14.644L4.07556 13.422C0.276533 12.1486 0.321192 6.75095 4.13385 5.55475L17.3918 1.44656C17.3925 1.44635 17.3931 1.44614 17.3938 1.44593Z"
    />
  </svg>
</button>

      </div>
    </div>
  );
};

export default ChatBot;
