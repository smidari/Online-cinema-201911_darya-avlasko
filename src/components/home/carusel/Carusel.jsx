import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";


const Carusel = (props) => {
    return (
        <Carousel>
            {props.dataCarusel.map((item) => <CarouselItem><img width={item.width} src={item.src}
                                                                alt={item.alt}/></CarouselItem>)}
        </Carousel>

    )
};

export default Carusel;
