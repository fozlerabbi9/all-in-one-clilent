import React from 'react';
import './Product.css';

const Prodeuct = () => {
    return (
        <div>

            <div id='PortFolio'>
                <div className="px-4">
                    <div className="ms-5 ps-5">
                        <p>Culpa perferendis excepturi.</p>
                        <h2>Our Products</h2>
                    </div>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-md-4 g-4 PortFolio-rowDiv-style">

                        {/* <div data-aos="fade-right" class="col">
                            <div class="card h-100 portfolio-card">
                                <img className='portfolio-img-style' src="https://www.petematheson.com/content/images/size/w600/2022/02/Ultimate-Productivity-Desk-Tour.png" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Prodeuct;