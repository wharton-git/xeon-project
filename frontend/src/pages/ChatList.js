// MessageList.js
import React, { useState, useEffect } from 'react';
import http from '../http';

const MessageList = ({ userId }) => {
    const userId_c = sessionStorage.getItem('userId');
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await http.get(`/api/messages/${userId}`);
      setMessages(response.data);
    };

    fetchMessages();
  }, [userId]);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <strong>{message.type === 'envoi' ? 'Envoyé' : 'Reçu'}:</strong> {message.contenu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
