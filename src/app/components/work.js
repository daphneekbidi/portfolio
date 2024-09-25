"use client";
import Image from 'next/image';

const Work = () => {
    return (
        <section className="work-section">
            <div className='relative flex justify-center bg-gradient-to-b from-70% from-pistache py-16'>
                <h2 id="text-element" className='top-44 space-x-10 absolute text-white font-bold text-8xl content-center opacity-100 mix-blend-difference md:text-[14rem]'>
                    <span className='inline-block'>W</span>
                    <span className='inline-block'>O</span>
                    <span className='inline-block'>R</span>
                    <span className='inline-block'>K</span>
                </h2>
                <Image className='max-h-60 max-w-60 rounded-2xl md:max-h-[28rem] md:max-w-[28rem]'
                    src="/work1.gif"
                    alt="Work display"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    priority
                    unoptimized
                />
            </div>
            <div className="p-8 md:w-[30rem] mx-auto">
                <div className='space-y-4'>
                    <p className="text-justify text-lg">
                        I maintained their websites from 2020 to 2022, EU and US when I was part of the web agency AskPhill in the Netherlands. (Polaroid re-built their site recently) 
                    </p>
                    <div className='flex justify-center border border-dashed border-black'>
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
                    <div className='flex justify-center border border-dashed border-black'>
                        <div className="w-72 h-40 content-center text-center">
                            <a href="#" className='flex justify-center'>
                                <Image 
                                    src="/cluse.png"
                                    alt="Cluse Logo"
                                    width={200}
                                    height={200}
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-justify text-lg">
                        I'm proud to have built parts of these websites working for the same web agency.
                    </p>
                    <div className='flex justify-center border border-dashed border-black'>
                        <div className="w-72 h-40 content-center text-center">
                            <a href="#" className='flex justify-center'>
                                <Image 
                                    src="/summum-logo.png"
                                    alt="Summum Woman Logo"
                                    width={200}
                                    height={200}
                                />
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center border border-dashed border-black'>
                        <div className="w-72 h-40 content-center text-center">
                            <a href="#" className='flex justify-center'>
                                <Image 
                                    src="/north-action.png"
                                    alt="North Action Group Logo"
                                    width={200}
                                    height={200}
                                />
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center border border-dashed border-black'>
                        <div className="w-72 h-40 content-center text-center">
                            <a href="#" className='flex justify-center'>
                                <Image 
                                    src="/pink-gellac.png"
                                    alt="Pink Gellac Logo"
                                    width={200}
                                    height={200}
                                />
                            </a>
                        </div>
                    </div>
                    <p className="text-justify text-lg">
                        Here is a freelance project I did with LeylineXR for a National Geography event in 2024, where I did the UX design and front-end in React/Tailwind CSS.
                    </p>
                    <div className='flex justify-center border border-dashed border-black'>
                        <div className="w-72 h-40 content-center text-center">
                            <a href="#" className='flex justify-center'>
                                <Image 
                                    src="/leylineXr.png"
                                    alt="Leyline XR project's Logo"
                                    width={200}
                                    height={200}
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