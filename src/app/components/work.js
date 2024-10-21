// React Server Components
"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Work = () => {
    const borderClasses = 'border rounded-xl border-dashed border-black md:border-none md:hover:bg-pistache/50 shadow-none transition-shadow duration-300 md:hover:shadow-lg md:hover:shadow-gray-200';
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const imageContainerRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [imageTop, setImageTop] = useState(0); // Track the top position of the image
    const [imageHeight, setImageHeight] = useState(0); // Track the height of the image
    const [isTitleAtTop, setIsTitleAtTop] = useState(false); // Track if title is at the top
    const [translateY, setTranslateY] = useState(0); // Track the translateY for the title
  
    const titleHeight = 72; // Known title height
  
    // Update scroll position on scroll
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Get the image's position and height when it is rendered
    useEffect(() => {
      const updateImageMetrics = () => {
        if (imageRef.current) {
          const rectContainer = imageContainerRef.current.getBoundingClientRect();
          const rectImage = imageRef.current.getBoundingClientRect();
          setImageTop(rectContainer.top + window.scrollY); // Get the top position relative to the page
          setImageHeight(rectImage.height); // Get the height of the image
        }
      };
      updateImageMetrics();
      window.addEventListener('resize', updateImageMetrics); // Update on window resize
  
      return () => {
        window.removeEventListener('resize', updateImageMetrics);
      };
    }, [imageRef]);
  
    // Detect when the title has reached the top of the image
    useEffect(() => {
      if (imageHeight > 0) {
        const offsetY = imageTop - scrollY; // Calculate the vertical distance from the top of the image
        const maxTranslateY = imageHeight - titleHeight; // Stop the title at the bottom edge of the image
        const percentageScrolled = offsetY / imageHeight; // Calculate how far the user has scrolled within the image's vertical range
        const newTranslateY = Math.max(0, Math.min(percentageScrolled * maxTranslateY, maxTranslateY)); // Move the title based on the scroll, but stop it within the bounds of the image  
        // Set isTitleAtTop when the title reaches the top
        if (newTranslateY === 0 && !isTitleAtTop) {
          setIsTitleAtTop(true);
        } else if (newTranslateY > 0 && isTitleAtTop) {
          setIsTitleAtTop(false);
        }
        setTranslateY(newTranslateY); // Update the translateY state with the new calculated value
      }
    }, [scrollY, imageHeight, imageTop, isTitleAtTop]);


    return (
        <section id='work' className='bg-blanc'>
            <div 
                ref={imageContainerRef}
                className='relative h-[30rem] flex justify-center bg-gradient-to-b from-70% from-pistache py-16 md:py-28 md:h-[50rem]'>
                <h2 
                ref={textRef}
                id="text-element"
                style={{
                    transform: `translateY(${translateY}px)`, // Dynamically apply translateY from the state
                  }}
                className={`font-mono z-20 top-12 space-x-10 absolute text-white font-bold text-7xl content-center mix-blend-difference md:text-[10rem] transition-all ease-in-out duration-300 ${
                    isTitleAtTop ? 'opacity-0' : 'opacity-100'
                }`}>
                    <span className='inline-block hover:-translate-y-1/4 transition-transform'>W</span>
                    <span className='inline-block hover:-translate-y-1/4 transition-transform'>O</span>
                    <span className='inline-block hover:-translate-y-1/4 transition-transform'>R</span>
                    <span className='inline-block hover:-translate-y-1/4 transition-transform'>K</span>
                </h2>
                <Image
                    ref={imageRef}
                    className={`max-h-60 max-w-60 rounded-2xl md:max-h-[28rem] md:max-w-[28rem]
                    transition-transform ease-in-out duration-500 ${
                        isTitleAtTop ? 'scale-125 translate-y-32' : 'scale-100'
                    }`} 
                    src="/work.gif"
                    alt="Work display"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    priority
                    unoptimized
                />
            </div>

            <div className="p-8 md:w-4/5 mx-auto">
                <h2 className="text-center text-2xl mb-16 text-black">
                    Brands I&apos;ve worked with.
                </h2>
                <div className='space-y-4 md:grid md:space-y-0 md:grid-cols-3 md:gap-3'>
                    <div className={`${borderClasses} flex justify-center`}>
                        <div className="w-72 h-40">
                            <a href="https://www.polaroid.com/">
                                <Image 
                                    src="/polaroid-logo.png"
                                    alt="Polaroid Logo"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-contain md:px-1'
                                />
                            </a>
                        </div>
                    </div>
                    <div className={`${borderClasses} flex justify-center`}>
                        <div className="h-40 content-center text-center">
                            <a href="https://cluse.com/" className='flex justify-center'>
                                <Image 
                                    src="/cluse.png"
                                    alt="Cluse Logo"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover px-12'
                                />
                            </a>
                        </div>
                    </div> 
                    <div className={`${borderClasses} flex justify-center`}>
                        <div className="h-40 content-center text-center">
                            <a href="https://summumwoman.com/en" className='flex justify-center'>
                                <Image 
                                    src="/summum-logo.png"
                                    alt="Summum Woman Logo"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover px-12'
                                />
                            </a>
                        </div>
                    </div>
                    <div className={`${borderClasses} flex justify-center`}>
                        <div className="h-40 content-center text-center">
                            <a href="https://northactionsports.com/" className='flex justify-center'>
                                <Image 
                                    src="/north-action.png"
                                    alt="North Action Group Logo"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover px-12'
                                />
                            </a>
                        </div>
                    </div>
                    <div className={`${borderClasses} flex justify-center`}>
                        <div className="w-52 h-40 content-center text-center">
                            <a href="https://pinkgellac.com/" className='flex justify-center'>
                                <Image 
                                    src="/pink-gellac.png"
                                    alt="Pink Gellac Logo"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover md:px-5'
                                />
                            </a>
                        </div>
                    </div>

                    <div className={`${borderClasses} flex justify-center`}>
                        <div className="w-52 h-40 content-center text-center">
                            <a href="https://uk.norlanglass.com/" className='flex justify-center'>
                                <Image 
                                    src="/norlan.png"
                                    alt="Norlan Logo"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover md:px-5'
                                />
                            </a>
                        </div>
                    </div>
                    <div className={`${borderClasses} flex justify-center md:col-start-2`}>
                        <div className="w-52 h-40 content-center text-center">
                            <a href="https://imagineoceans.app/" className='flex justify-center'>
                                <Image 
                                    src="/natgeo.png"
                                    alt="Leyline XR project's Logo"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover md:px-5'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;