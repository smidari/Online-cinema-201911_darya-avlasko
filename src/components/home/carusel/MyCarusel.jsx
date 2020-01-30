import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';



const MyCarusel = props => {
  const state = {
    dataCarusel: [
      { alt: 'film1', src: 'https://s3.vcdn.biz/static/f/1914745521/image.jpg/pt/r0x0x4' },
      { alt: 'film2', src: 'https://s3.vcdn.biz/static/f/1914745521/image.jpg/pt/r0x0x4' },
    ],
  };


  return (

    <div>

      <Carousel>
        {state.dataCarusel.map(item => (
          <CarouselItem key={item.alt.toString()}><img
            width={item.width}
            src={item.src}
            alt={item.alt}
          />
          </CarouselItem>
      ))}
      </Carousel>
    </div>
  );
};

export default MyCarusel;
