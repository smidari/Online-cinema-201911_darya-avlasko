import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';



const MyCarusel = props => {
  const state = {
    dataCarusel: [
      { alt: 'film1', src: 'https://images-na.ssl-images-amazon.com/images/G/01/DVD/Events/flashback-banner-popcorn-film._CB1578430732_.png' },
      { alt: 'film2', src: 'https://images-na.ssl-images-amazon.com/images/G/01/DVD/Events/flashback-banner-popcorn-film._CB1578430732_.png' },
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
