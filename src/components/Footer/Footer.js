import React from 'react'
import './Footer.css'
import ScrollTopArrow from '../../components/Main/ScrollTopArrow.js';

const Footer = () => {
    return (
    
            <section className='footer'>
                <div className="footerContent">
                <h6>© 2021 Mike Boring - Full Stack Software Engineer</h6>
                </div>
                <ScrollTopArrow />
            </section>
        
    )
};

export default Footer