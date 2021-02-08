import React from 'react';
import './style.scss';

const Footer = () => {
    return(
        <div className="ts-footer ts-footer__wrapper">
            <span className="ts-footer__text">
                &copy; {new Date().getFullYear()}
            </span>
        </div>
    );
}

export default Footer;