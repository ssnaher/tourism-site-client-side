import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import About from '../About/About';
import TopDestinations from '../TopDestinations/TopDestinations';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
            <TopDestinations></TopDestinations>
        </div>
    );
};

export default Home;