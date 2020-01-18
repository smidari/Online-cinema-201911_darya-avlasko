import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';


const Carusel = props => {
  const state = {
    dataCarusel: [
      { alt: 'film', src: 'https://s3.vcdn.biz/static/f/1914745521/image.jpg/pt/r0x0x4' },
      { alt: 'film', src: 'https://s7.vcdn.biz/static/f/1922095141/image.jpg/pt/r0x0x4' },
      { alt: 'film', src: 'https://s3.vcdn.biz/static/f/1885584981/image.jpg/pt/r0x0x4' },
    ],
  };
  return (
    <Carousel>
      {state.dataCarusel.map(item => (
        <CarouselItem><img
          width={item.width}
          src={item.src}
          alt={item.alt}
        />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Carusel;
