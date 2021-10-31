import React, { useEffect, useState } from 'react';
import SinglePackage from '../Package/SinglePackage';
import './Packages.css';

const Packages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://gory-hollow-85352.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div id="our-packages">
            <div className="container" id="services">
                <h2 className="text-secondary my-5">Our Packages</h2>
                <div className="service-section row">
                    {
                        packages.map(packages => <SinglePackage
                            key={packages._id}
                            packages={packages}
                        ></SinglePackage>)
                    }
                </div>
            </div>
        </div>
    );
};



export default Packages;