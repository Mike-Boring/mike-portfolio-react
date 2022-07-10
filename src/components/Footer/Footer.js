import React from 'react'
import './Footer.css'
import ScrollTopArrow from '../../components/Main/ScrollTopArrow.js';

const Footer = () => {
    let currentYear = new Date().getFullYear()
    return (
        <footer className='footer'>
            <div className="footerContent">
            <h6>© {currentYear} Mike Boring - Full Stack Software Engineer</h6>
            </div>
            <ScrollTopArrow />
        </footer>
    )
};

export default Footer