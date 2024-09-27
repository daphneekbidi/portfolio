import React from 'react';
import Icon from './icons';


const Footer = () => {
    return (
        <footer className='flex flex-row py-16 px-8 justify-center'>
            <div className='flex space-x-2 pr-4'>
                <a href="https://github.com/daphneekbidi" target="_blank" rel="noopener noreferrer">
                    <Icon iconName="github"/>
                </a>
                <a href="www.linkedin.com/in/daphnée-kbidi-267692b7" target="_blank" rel="noopener noreferrer">
                    <Icon iconName="linkedin" />
                </a>
                <a href="https://www.instagram.com/dkf/" target="_blank" rel="noopener noreferrer">
                    <Icon iconName="instagram"/>
                </a>
            </div>
            <p className='content-center'>© 2024 by DKF</p>
        </footer>
    );
};


export default Footer;
