// React Server Components
"use client";
import Image from 'next/image';

const Work = () => {
    const borderClasses = 'border rounded-xl border-dashed border-black md:border-none md:hover:bg-pistache/50 shadow-none transition-shad duration-300 md:hover:shadow-lg md:hover:shadow-gray-200';

    return (
        <section id='work' className='bg-blanc'>
            <div
                className='flex justify-center mx-8 border border-black border-solid flex-row-reverse md:py-20 md:bg-[#8ea069] md:border-none md:mx-0'>
                <h2 
                id="text-element"
                className='text-black text-7xl md:text-[7rem] flex flex-col content-center px-4 bg-[#8ea069]'>
                    <span className='inline-block hover:animate-bounce'>W</span>
                    <span className='inline-block hover:animate-bounce'>O</span>
                    <span className='inline-block hover:animate-bounce'>R</span>
                    <span className='inline-block hover:animate-bounce'>K</span>
                </h2>
                <Image
                    className='block overflow-hidden md:max-h-[28rem] md:max-w-[28rem]
                    transition-transform ease-in-out duration-500'
                    src="/work.gif"
                    alt="Work display"
                    width={1920}
                    height={1920}
                    loading= 'lazy'
                />
            </div>

            <div className="p-8 md:w-4/5 mx-auto md:p-16">
                <h2 className="text-center text-2xl mb-16 text-black">
                    Brands I&apos;ve worked with.
                </h2>
                <div className='space-y-4 md:grid md:space-y-0 md:grid-cols-3 md:gap-3'>
                    <div className={`${borderClasses} flex justify-center`}>
                        <div className="w-72 h-40">
                            <a href="https://www.polaroid.com/" target="_blank" rel="noopener noreferrer">
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
                            <a href="https://cluse.com/" className='flex justify-center' target="_blank" rel="noopener noreferrer">
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
                            <a href="https://summumwoman.com/en" className='flex justify-center' target="_blank" rel="noopener noreferrer">
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
                            <a href="https://northactionsports.com/" className='flex justify-center' target="_blank" rel="noopener noreferrer">
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
                            <a href="https://pinkgellac.com/" className='flex justify-center' target="_blank" rel="noopener noreferrer">
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
                            <a href="https://uk.norlanglass.com/" className='flex justify-center' target="_blank" rel="noopener noreferrer">
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
                            <a href="https://imagineoceans.app/" className='flex justify-center' target="_blank" rel="noopener noreferrer">
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