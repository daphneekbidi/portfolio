import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="px-8 bg-pistache">
      <div className="header-content flex flex-col md:flex-row-reverse md:justify-evenly">
        <div className="mt-14" aria-label="Auto-portrait made by AI">
          <Image 
            src="/portrait.jpg"
            alt="Portrait"
            className='rounded-full'
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="my-4 header-text md:w-1/2 content-center items-center">
          <h1 className='text-5xl mt-8 mb-4'>
            Hi I&apos;m a <strong>web developer</strong>, ecommerce enthousiast.
          </h1> 
          <span className='block text-xl mt-2'>I come from Reunion Island, France and live now in Thailand.</span>
          <p className='text-base text-justify mt-6'>
            I love brewing tea in the morning and open my Macbook to code 💻 from home. When I’m not squashing bugs, you’ll find me daydreaming about the next project or petting my cats 🐱. I've worked a lot with custom Shopify websites and React-based with Next.js web applications. Let’s create something awesome together!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
