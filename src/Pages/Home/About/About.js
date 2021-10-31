import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container" id="values">
                <h2 className="text-secondary my-5">About Us</h2>

                <div className="row">
                    <div className="col-md-6">
                        <img src="https://use.metropolis.org/system/images/1758/original/Keane_Bridge_and_Ali_Amjad's_Clock__Sylhet.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h2>Let's Share Some More Info...</h2>

                        <p>Sylhet is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal, now a major pilgrimage site near Dargah Gate. The tiny Museum of Rajas contains belongings of the local folk poet Hasan Raja. A 3-domed gateway stands at the 17th-century Shahi Eidgah, a huge open-air hilltop mosque built by Emperor Aurangzeb. </p>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default About;