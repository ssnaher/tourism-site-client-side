import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SliderImageOne from './../../../images/9114200_sylhet 1.jpg';
import SliderImageTwo from './../../../images/mount_tamalpolis_san_francisco_CA.jpg';
import SliderImageThree from './../../../images/lalakhal.jpg';
import './TopDesination.css';

const TopDestinations = () => {



    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="carousel-img d-block w-100"
                    src={SliderImageOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Visit Us Now</h3>
                    <p>Tea Estate</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img d-block w-100"
                    src={SliderImageTwo}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Visit Now</h3>
                    <p>Jafflong</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="carousel-img d-block w-100"
                    src={SliderImageThree}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Visit Now</h3>
                    <p>Lalakhal</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    );
}






export default TopDestinations;