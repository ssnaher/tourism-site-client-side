import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import About from '../About/About';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
        </div>
    );
};

export default Home;