import React from 'react'
import './Footer.css'
import ScrollTopArrow from '../../components/Main/ScrollTopArrow.js';

const Footer = () => {
    return (
            <section className='footer' id="contact">
                <div>
                    <h1>Footer Text</h1>
                    <button className='welcome__cta-primary'>
                        Contact us
                    </button>
                </div>
                <ScrollTopArrow />
            </section>
    )
}

export default Footer