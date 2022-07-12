import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div data-aos="zoom-in-down" className='aboutUs-style'>
            <div className="about" id='about'>
                <div className="row">
                    <p className='first-p'>nobis dolorem sapiente evenie.</p>
                    <div className="col-4">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi provident atque dolorum vel. Id obcaecati reprehenderit ab ducimus sit?</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="row col-8">
                        <div className="col-6 d-flex justify-content-center">
                            <p className='me-3'>icon</p>
                            <p>onsectetur perspiciatis</p>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <p className='me-3'>icon</p>
                            <p>onsectetur perspiciatis</p>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <p className='me-3'>icon</p>
                            <p>onsectetur perspiciatis</p>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <p className='me-3'>icon</p>
                            <p>onsectetur perspiciatis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;