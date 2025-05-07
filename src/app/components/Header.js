"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const sentence = `Hi I'm a web developer, ecommerce enthusiast.`;
  const words = sentence.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      },
    },
  };

  // Animation for the span and paragraph
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <header className="px-8 bg-gradient-to-b from-85% from-pistache to-blanc md:py-20 md:px-16">
      <div className="header-content flex flex-col md:flex-row-reverse md:justify-between">
        <div className="mt-14 self-center" aria-label="Auto-portrait made by AI">
          <Image 
            src="/daphnee.jpg"
            alt="Portrait"
            className='rounded-full'
            width={420}
            height={420}
            priority={true}
          />
        </div>
        <div className="my-4 header-text md:w-1/2 content-center items-center px-4">
          <motion.h1
            className="text-5xl mt-8 mb-4 text-black flex flex-wrap overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 overflow-hidden"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.span
            className="block text-xl mt-2 text-black"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1} // delay by 1 second
          >
            I come from Reunion Island (France) and live now in Thailand.
          </motion.span>

          {/* Animated Paragraph */}
          <motion.p
            className="text-base text-justify mt-6 text-black"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1.3} // delay slightly more
          >
            I love brewing tea in the morning and open my Macbook to code 💻 from home.
            When I&apos;m not squashing bugs, you&apos;ll find me daydreaming about the next
            project or petting my cats 🐱. I&apos;ve worked a lot with custom Shopify websites
            and React-based with Next.js web applications. <a href="mailto:daphneekbidi@gmail.com?subject=Contact%20Request&body=Hello," target="_blank" rel="noopener noreferrer" aria-label="Contact Section" className="no-underline focus:underline hover:underline">Let&apos;s connect!</a>
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;
