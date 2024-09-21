"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';

const Work = () => {
    useEffect(() => {
        const textElement = document.getElementById('text-element');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                textElement.classList.add('opacity-50');
              } else {
                textElement.classList.remove('opacity-50');
              }
            });
          },
          { threshold: 0.5 } // Adjust the threshold as needed
        );
    
        observer.observe(textElement);
    
        return () => {
          observer.disconnect();
        };
      }, []);
    return (
        <section className="work-section">
            <div className='relative flex justify-center'>
                <div id="text-element" className='h-full absolute text-white font-bold text-8xl content-center'>
                    <h2>WORK</h2>
                </div>
                <Image
                    src="/work.gif"
                    alt="Work display"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    priority
                />
            </div>
            <div className="work-content">
                <p className="work-card-description">I maintained their websites from 2020 to 2022, EU and US. (Polaroid re-built their site recently) </p>
                <div className='flex justify-center'>
                    <div className="w-72 h-40">
                        <a href="#">
                            <Image 
                                src="/polaroid-logo.png"
                                alt="Polaroid Logo"
                                width={200}
                                height={200}
                                layout="responsive"
                            />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="w-72 h-40 content-center text-center">
                        <a href="#" className='flex justify-center'>
                            <Image 
                                src="/cluse-logo.webp"
                                alt="Polaroid Logo"
                                width={200}
                                height={200}
                            />
                        </a>
                    </div>
                </div>
                {/* <div className="work-card">
                    <h3 className="work-card-title">Project 3</h3>
                    <p className="work-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <a href="#" className="work-card-link">View Project
                        <Image 
                            src="/polaroid-logo.png"
                            alt="Polaroid Logo"
                            width={150}
                            height={150}
                        />
                    </a>
                </div> */}
            </div>
        </section>
    );
}

export default Work;