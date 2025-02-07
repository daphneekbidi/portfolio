import Icon from './icons';

const Footer = () => {
    return (
        <footer className='flex flex-row py-16 px-8 justify-center bg-blanc'>
            <div className='flex space-x-2 pr-4'>
                <a href="https://github.com/daphneekbidi" target="_blank" rel="noopener noreferrer" aria-label="Navigate to Github profile">
                    <Icon iconName="github"/>
                </a>
                <a href="https://www.linkedin.com/in/daphnee-kbidi-267692b7" target="_blank" rel="noopener noreferrer" aria-label="Navigate to Linkedin profile">
                    <Icon iconName="linkedin" />
                </a>
                <a href="https://www.instagram.com/dkf/" target="_blank" rel="noopener noreferrer" aria-label="Navigate to Instagram profile">
                    <Icon iconName="instagram"/>
                </a>
            </div>
            <p className='content-center text-black'>© 2024 by DKF</p>
        </footer>
    );
};


export default Footer;
