'use client'
const Navbar = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById(event.target.getAttribute('href').replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <>
      <div className='flex justify-between items-center px-8 py-3 sticky top-0 bg-[#8ea069] z-20 md:px-16'>
        <a href="/" aria-label="Homepage" className='relative'>
          <span className='block text-2xl bold text-blanc font-serif'>Daphnée KBIDI</span>
        </a>
        <nav aria-label="Main Navigation">
          <ul className="list-none flex gap-5">
            <li className='text-lg no-underline text-blanc focus:underline hover:underline'>
              <a href="#work" aria-label="Work Section" onClick={handleClick}>Work</a>
            </li>
            <li className='text-lg text-blanc no-underline focus:underline hover:underline'>
              <a href="mailto:daphneekbidi@gmail.com?subject=Contact%20Request&body=Hello," target="_blank" rel="noopener noreferrer" aria-label="Contact Section">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      </>
  );
};

export default Navbar;
