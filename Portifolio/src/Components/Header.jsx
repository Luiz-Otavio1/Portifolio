import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import foto from '../assets/foto-pessoal.jpg';
import { FaUser, FaLaptopCode, FaEnvelope } from 'react-icons/fa'; // Ícones para o menu

const Header = () => {
  const [menu, setMenu] = useState(true);

  const menuSwitch = () => {
    setMenu(!menu);
  };

  return (
    <div className='header'>
      <div className="img">
        <img src={foto} alt="Foto de Luiz Otavio" />
      </div>
      <div className="header-info">
        <h1>Luiz Otavio</h1>
        <span>Developer Front-End</span>
      </div>
      <FontAwesomeIcon icon={faBars} onClick={menuSwitch} />
      <ul className={menu ? "active" : ""}>
        <li><FaUser /> <Link to="#home">Detalhes</Link></li>
        <li><FaLaptopCode /> <Link to="#projects">Projects</Link></li>
        <li><FaEnvelope /> <Link to="#contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;
