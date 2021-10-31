import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Packages></Packages>
        </div>
    );
};

export default Home;