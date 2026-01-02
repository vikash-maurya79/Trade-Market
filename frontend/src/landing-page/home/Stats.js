import React from 'react';

function Stats() {
    return (
        <div className='container'>
            <div className='row mb-5'>
                <div className='col-6'>
                    <h1 className='mb-3'>Trust with confidence</h1>
                    <h5>Customer-first always</h5>
                    <p className='mb-3'>That's why 1.3+ crore customers trust Trade Market with 3.5+ Lakh crore Rupees worth of equity investments.</p>
                    <h5>No spam or gimmicks</h5>
                    <p className='mb-3'>No gimmicks, spam , "gamification" , or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h5>The Trade Market Universe</h5>
                    <p className='mb-3'>Not just an app , but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5>Do better with money</h5>
                    <p className='mb-3'>With initiatives like Nudge and Kill Switch , we don't just facilitate transactions , but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='/media/image/ecosystem.png' alt='Eco System' style={{ width: "90%" }}></img>
                    <div className='text-center'>
                        <a href='#' className='mx-5' style={{ textDecoration: "none" }}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='#' style={{ textDecoration: "none" }} className='mb-5'>Explore Our Products <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;