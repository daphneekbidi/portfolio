import React from 'react';

const Navbar = () => {
  return (
      <>
      <div className='flex justify-between items-center px-5 py-3'>
        <a href="/" aria-label="Homepage" className='relative'>
          <div className='bg-pistache h-3 absolute top-3 left-[2px] w-[97%] -z-10 rounded-sm'></div>
          <span className='block text-2xl bold'>Daphnee KBIDI</span>
        </a>
        <nav aria-label="Main Navigation">
          <ul className="list-none flex gap-5">
            <li className='text-lg no-underline focus:underline hover:underline'><a href="#work" aria-label="Work Section">Work</a></li>
            <li className='text-lg no-underline focus:underline hover:underline'><a href="#contact" aria-label="Contact Section">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      </>
  );
};

export default Navbar;
