// React Server Components
"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Work = () => {
    const borderClasses = 'border rounded-xl border-dashed border-black md:border-none md:hover:bg-pistache/50 shadow-none transition-shadow duration-300 md:hover:shadow-lg md:hover:shadow-gray-200';
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [isImageInView, setIsImageInView] = useState(false); // Track if the image is in view

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

    // Use IntersectionObserver to track when the image is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsImageInView(true); // Image is in view
            } else {
                setIsImageInView(false); // Image is out of view
            }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the image is visible
        );

        if (imageRef.current) {
        observer.observe(imageRef.current);
        }

        return () => {
        if (imageRef.current) {
            observer.unobserve(imageRef.current);
        }
        };
    }, []);

    return (
        <section id='work'>
            <div className='relative flex justify-center bg-gradient-to-b from-70% from-pistache py-16 md:py-44'>
                <h2 
                ref={textRef}
                id="text-element"
                style={{
                    transform: `translateY(${scrollY * 0.3}px)`, // Adjust the multiplier to control the speed
                  }}
                className={`font-mono top-8 space-x-10 absolute text-white font-bold text-8xl content-center mix-blend-difference md:text-[14rem] 
                 ${isImageInView ? 'opacity-100, transition-opacity ease-in-out duration-150' : 'opacity-0'}`}>
                    <span className='inline-block'>W</span>
                    <span className='inline-block'>O</span>
                    <span className='inline-block'>R</span>
                    <span className='inline-block'>K</span>
                </h2>

                <Image 
                    ref={imageRef}
                    className='max-h-60 max-w-60 rounded-2xl md:max-h-[28rem] md:max-w-[28rem]'
                    src="/work.gif"
                    alt="Work display"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    priority
                    unoptimized
                />
            </div>
            <div className="px-8 my-8 md:w-4/5 mx-auto">
                <h2 className="text-center text-2xl mb-16">
                    Brands I've worked with.
                </h2>
                {/* <p className="text-justify text-lg">
                    I maintained their websites from 2020 to 2022, EU and US when I was part of the web agency AskPhill in the Netherlands. (Polaroid did fully re-build their site recently) 
                </p> */}
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
                                    className='w-full h-full object-cover md:px-12'
                                />
                            </a>
                        </div>
                    </div> 

                {/* <p className="text-justify text-lg">
                    At the same web agency, I worked for theses brand to build their custom storefront on Shopify from scratch.
                </p> */}
                    <div className={`${borderClasses} flex justify-center`}>
                        <div className="h-40 content-center text-center">
                            <a href="https://summumwoman.com/en" className='flex justify-center'>
                                <Image 
                                    src="/summum-logo.png"
                                    alt="Summum Woman Logo"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover md:px-12'
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
                                    className='w-full h-full object-cover md:px-12'
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

                    {/* <p className="text-justify text-lg">
                        Here is a freelance project I did with LeylineXR for a National Geography event in 2024, where I did the UX design and front-end in React/Tailwind CSS.
                    </p> */}
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