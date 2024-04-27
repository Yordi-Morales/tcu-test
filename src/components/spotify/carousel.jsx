import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SpotifyCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // para desktops y laptops grandes
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // para tablets y dispositivos más pequeños
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480, // para teléfonos móviles en modo portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Opcional: quitar los dots para más espacio
        }
      }
    ]
  };

  const iframes = [
    "https://open.spotify.com/embed/show/6grXCR9BoUiYxWJMFe0KMO?utm_source=generator",
    "https://open.spotify.com/embed/episode/29cACCvJyFVTCSByl61hrY?utm_source=generator",
    "https://open.spotify.com/embed/episode/4DUwN7E9OSjktb4wMoTtAJ?utm_source=generator",
    "https://open.spotify.com/embed/episode/4jN6Cf86hJ2NFUWQxPrgVf?utm_source=generator",
    "https://open.spotify.com/embed/episode/6i0Eq1KNgVM3Z2tNxHvXQA?utm_source=generator",
    "https://open.spotify.com/embed/episode/6ShdqdRFHxRYVPkXhsHzfo?utm_source=generator"
  ];

  return (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <Slider {...settings}>
        {iframes.map((src, index) => (
          <div key={index}>
            <iframe
              title={`Unique Title ${index}`}
              style={{ borderRadius: '12px', width: '100%', height: '352px', border: 'none' }}
              src={src}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpotifyCarousel;
