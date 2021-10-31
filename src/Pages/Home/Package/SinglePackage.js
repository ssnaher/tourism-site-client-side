import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePackage.css';

const SinglePackage = ({ packages }) => {
    const { key, img, name, price, description } = packages;
    return (
        <div className='col-12 col-sm-6 col-lg-4 my-3'>
            <div className="single-service mx-2 px-4 text-wrap">
                <img className="img-fluid" src={img} alt="" />
                <h3 className="py-3">{name}</h3>
                <p>{description}</p>
                <h2>Price: {price}</h2>
                <Link to={`/booking/${key}`}>
                    <button className="btn btn-danger my-3">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default SinglePackage;