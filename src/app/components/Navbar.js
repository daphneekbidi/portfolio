import React from 'react';
import './navbar.css';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav aria-label="Main Navigation" className="navbar">
      <a href="/" className="logo" aria-label="Homepage">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </a>
      <span className='text-2xl'>Daphnee KBIDI</span>
      <ul className="menu">
        <li><a href="#work" aria-label="Work Section">Work</a></li>
        <li><a href="#contact" aria-label="Contact Section">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
