import React from 'react';

function Pricing() {
    return (
        <div className='container mt-5' >
            <div className='row mb-5'>
                <div className='col-6'>
                    <h5>Unbeatable pricing</h5>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='#' style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <img src='/media/image/pricing0.svg'></img>
                                </div>
                                <div className='col'>
                                    <p>Free account opening</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <img src='/media/image/pricingEquity.svg'></img>
                                </div>
                                <div className='col'>
                                    <p>Free equity delivery
                                        and direct mutual funds</p>
                                </div>
                            </div>
                            </div>
                            <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <img src='/media/image/pricingMF.svg'></img>
                                </div>
                                <div className='col'>
                                    <p> Intraday and
                                        F&O</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;