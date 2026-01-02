import React from 'react';
function Education() {
    return (
        <div className='row'>
            <div className='col-6'>
                <img src='/media/image/index-education.svg'></img>
            </div>
            <div className='col-6'>
                <div className='m-5'>
                    <h5 className='mb-3'>Free and open market education</h5>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' style={{ textDecoration: "none" }}>Varsity</a>
                </div>


                <div className='m-5'>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' style={{ textDecoration: "none" }}>Tranding Q&A</a>
                </div>

            </div>
        </div>
    );
}

export default Education;