import React from 'react';
import './spotifystyle.css';
import Carousel from './carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spotify = () => {
  return (
    <div className='spotify-class'>
      <div className='title'>
        <i class="fa fa-spotify" aria-hidden="true"></i>
        <a target="_blank" rel="noopener noreferrer" href='https://open.spotify.com/show/6grXCR9BoUiYxWJMFe0KMO?si=b44ab164253843a6'>
        <h2 className='spotify-title'>Spotify Podcast</h2>
        </a>
      </div>
      <p>En nuestro podcast, abordamos temas cruciales relacionados con la gestión financiera personal y familiar. 
          Te ofrecemos consejos prácticos, estrategias inteligentes y análisis profundos para ayudarte a tomar decisiones 
          financieras informadas y alcanzar tus metas económicas.</p>

      <div className='spotify-frame'>
        <Carousel />
      </div>
    </div>
  );
};

export default Spotify;
