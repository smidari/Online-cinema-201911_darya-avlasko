import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';


const MyCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        src="/img/carousel-popcorn.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src="/img/carousel-movie.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;
