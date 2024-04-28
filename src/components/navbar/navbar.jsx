import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbarstyle.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <div className='logo'>
          <img src="/logo.png" alt="UTN Logo" style={{ height: '38px', width: '38px'}} />
        </div>
        <div className='menu-icon' onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>Inicio</Link>
          </li>
          <li>
            <Link to="/podcast" className={location.pathname === '/podcast' ? 'active-link' : ''} onClick={closeMenu}>Podcast</Link>
          </li>
          <li>
            <Link to="/financial-quest" className={location.pathname === '/financial-quest' ? 'active-link' : ''} onClick={closeMenu}>Compatibilidad Pareja</Link>
          </li>
          <li>
            <a href="https://sirucalculadora.com/" target="_blank" rel="noopener noreferrer" className='siru' onClick={closeMenu}>SIRU</a>   
          </li>
          <li className='dropdown'>
            <span>Calculadoras</span>
            <ul>
              <li>
                <Link to="/calc-expenses" className={location.pathname === '/calc-expenses' ? 'active-link' : ''} onClick={closeMenu}>Calcular Gastos</Link>
              </li>
              <li>
                <Link to="/calc-loan" className={location.pathname === '/calc-loan' ? 'active-link' : ''} onClick={closeMenu}>Calcular Crédito</Link>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <span>Costos</span>
            <ul>
              <li>
                <Link to="/baby-table" className={location.pathname === '/baby-table' ? 'active-link' : ''} onClick={closeMenu}>Costo Recién Nacido</Link>
              </li>
              <li>
                <Link to="/cars-table" className={location.pathname === '/cars-table' ? 'active-link' : ''} onClick={closeMenu}>Costo Vehículo</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className='social'>
          <a target="_blank" rel="noopener noreferrer" href='https://open.spotify.com/show/6grXCR9BoUiYxWJMFe0KMO' aria-label="Instagram"><i class="fa fa-spotify" aria-hidden="true"></i></a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/saludfinancierautnsc/' aria-label="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
