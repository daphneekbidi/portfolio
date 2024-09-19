import React from 'react';
import Icon from './icons';


const Footer = () => {
    return (
        <footer className='flex flex-row py-16 px-8 justify-center'>
            <div className='flex space-x-2 pr-4'>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon iconName="github"/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon iconName="linkedin" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon iconName="instagram"/>
                </a>
            </div>
            <p className='content-center'>© 2024 by DKF</p>
        </footer>
    );
};


export default Footer;
