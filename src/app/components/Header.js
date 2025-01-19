import Image from 'next/image';

const Header = () => {
  return (
    <header className="px-8 bg-gradient-to-b from-85% from-pistache to-blanc md:py-20">
      <div className="header-content flex flex-col md:flex-row-reverse md:justify-evenly">
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
        <div className="my-4 header-text md:w-1/2 content-center items-center">
          <h1 className='text-5xl mt-8 mb-4 text-black'>
            Hi I&apos;m a <strong>web developer</strong>, ecommerce enthusiast.
          </h1> 
          <span className='block text-xl mt-2 text-black'>I come from Reunion Island(France) and live now in Thailand.</span>
          <p className='text-base text-justify mt-6 text-black'>
            I love brewing tea in the morning and open my Macbook to code 💻 from home. When I&apos;m not squashing bugs, you&apos;ll find me daydreaming about the next project or petting my cats 🐱. I&apos;ve worked a lot with custom Shopify websites and React-based with Next.js web applications. Let&apos;s connect!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
