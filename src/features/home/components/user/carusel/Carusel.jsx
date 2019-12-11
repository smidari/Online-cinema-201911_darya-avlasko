import React from "react";

const Carusel = () => {
    return (
        <div id="carousel-start" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-start" data-slide-to="0" className="active"/>
                <li data-target="#carousel-start" data-slide-to="1"/>
                <li data-target="#carousel-start" data-slide-to="2"/>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        className="d-block w-100"
                        src="https://s3.vcdn.biz/static/f/1913522421/image.jpg/pt/r0x0x4"
                        alt="movie poster"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://s3.vcdn.biz/static/f/1912488591/image.jpg/pt/r0x0x4"
                        alt="movie poster"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://s6.vcdn.biz/static/f/1905254421/image.jpg/pt/r0x0x4"
                        alt="movie poster"
                    />
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carousel-start"
                role="button"
                data-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carousel-start"
                role="button"
                data-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
};

export default Carusel;
