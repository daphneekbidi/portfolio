import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="px-8 bg-[#f1f2e0]">
      <div className="header-content flex flex-col md:flex-row justify-between ">
        <div className="pt-14" aria-label="Auto-portrait made by AI">
          <Image 
            src="/portrait.jpg"
            alt="Portrait"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="py-8 header-text md:w-1/2 content-center items-center">
          <h1 className='text-5xl'>Hi I&apos;m <strong>Daphnee</strong>,</h1> 
          <span className='block text-xl pt-2'>your friendly neighborhood <strong>web developer</strong>.</span>
          <p className='text-sm text-justify pt-6'>
            I love brewing tea in the morning and open my Macbook to code 💻 from home. When I’m not squashing bugs, you’ll find me daydreaming about the next project or petting my cats 🐱. Let’s create something awesome together!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
