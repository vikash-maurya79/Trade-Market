import React from 'react';
function Awards() {
    return (

        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='/media/image/largestBroker.svg' alt='Largest Broker'></img>
                </div>
                <div className='col-6'>
                    <h1>
                        Largest stock broker in India
                    </h1>
                    
                    <div className='row mt-5 mb-5'>
                        <div className='col-6 mt-5'>
                            <ul>
                                <li> <p>Future and Options</p></li>
                                <li><p>Comodity derivatives</p></li>
                                <li><p>Currency derivatives </p></li>
                            </ul>
                        </div>
                        <div className='col-6 mt-5'>
                            <ul>
                                <li><p>Stock and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                        <img src='/media/image/pressLogos.png' alt='Press Logo' className='mt-5'></img>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Awards;