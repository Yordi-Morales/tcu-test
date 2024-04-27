import React from 'react';
import './footerstyle.css'; // Importa el archivo de estilos CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className='left-row'>
        <p id="title">TCU UTN Educación Financiera 408 San Carlos</p>
        <img
        className="imagen"
        src="/utnsc.jpg"
        alt="UTN Logo"
        style={{  margin: 'auto', display: 'block'}}
      />
      </div>
      <div className='mid-row'>
        <p id="title">Siguenos</p>
        <a target="_blank" rel="noopener noreferrer" href='https://open.spotify.com/show/6grXCR9BoUiYxWJMFe0KMO'><i class="fa fa-spotify" aria-hidden="true"></i></a>
        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/saludfinancierautnsc/'><i class="fa fa-instagram" aria-hidden="true"></i></a>
      </div>
      <div className='right-row'>
        <p id="title">Contacto</p>
        <p>Telefeno:2401-5200 extension:2600</p>
        <p>Correo: tcu.sancarlos@utn.ac.cr</p>
      </div>
    </footer>
  );
};

export default Footer;