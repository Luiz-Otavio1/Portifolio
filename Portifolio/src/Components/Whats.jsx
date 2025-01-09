import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whats = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const phoneNumber = '5511943050535';

  const whatsMessageCreate = () => {
    const fullMessage = `Olá, meu nome é ${name}. ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className='whats-info'>
      <h3>
        <FaWhatsapp color='green' /> <i>Entrar em contato</i>
      </h3>
      <input
        type="text"
        placeholder='Digite seu nome...'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder='Digite sua mensagem...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <a
        href={whatsMessageCreate()}
        target='_blank'
        rel='noopener noreferrer'
      >
        Enviar mensagem
      </a>
    </div>
  );
};

export default Whats;
