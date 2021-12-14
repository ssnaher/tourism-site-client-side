import React from 'react';
import banner from './../../../images/banner.jpg'

const mainBanner = {
    background: `url(${banner})`,
    height: '60vh',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(15, 45, 25, 0.6)',
    backgroundBlendMode: 'multiply',
    backgroundRepeat: 'no-repeat'
}

const Banner = () => {
    return (
        <div className="banner" style={mainBanner}>
            <h2>Welcome To Sylhet</h2><br />
            <h3>Live the life with the beauty of nature</h3>
        </div>
    );
};

export default Banner;