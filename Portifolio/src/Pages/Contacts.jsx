import React from 'react';
import { FaWhatsapp, FaLinkedin, FaFileAlt, FaGithub, FaPhoneAlt } from 'react-icons/fa';

import './Contacts.css'
import Whats from '../Components/Whats'
const Contacts = () => {
  return (
    <div className="contacts">
      <span>contatos...</span>
      <div className='contacts-item'>
        <div className="contact-item">
          <FaPhoneAlt />
          <span> +55 11 99999-9999</span>
        </div>
        <div className="contact-item">
          <FaLinkedin color="#0077B5" />
          <a href="https://www.linkedin.com/in/luiz-otavio-dias-soares-5a0702333/" target="_blank" rel="noopener noreferrer">
            <span>-</span> LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <FaFileAlt />
          <a target="_blank" rel="noopener noreferrer">
            <span>-</span> Download Currículo
          </a>
        </div>
        <div className="contact-item">
          <FaGithub color="#181717" />
          <a href="https://github.com/Luiz-Otavio1" target="_blank" rel="noopener noreferrer">
            <span>-</span> GitHub Profile
          </a>
        </div>
      </div>
      <Whats />
    </div>
  );
}

export default Contacts;
