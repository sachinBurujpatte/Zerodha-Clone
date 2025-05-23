import React from 'react';
function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Trust with confidence</h1>
                    <h2>Customer-firt always</h2>
                    <p>That's why 1.3+ crore customers trust Zerodha with $3.5+ lakh crores worth of equity investments.</p>
                    <h2>No spam or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2>The Zerodha universe</h2>
                    <p>Not jut an app, but a whole ecosystem. Our investements in 30+ fintech startups offer you tailored services specefic to your needs.</p>
                    <h2>Do better with money</h2>
                    <p>With initiatives like Nudge and Kill Switch,we don't just facilitate  transactions but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' alt='ecosystem view' style={{width:"75%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Stats;