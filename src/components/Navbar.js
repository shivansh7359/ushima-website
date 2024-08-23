import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollPosition > 0 ? 'white' : 'transparent',
    boxShadow: scrollPosition > 0 ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
  };

  return (
    <div className='flex h-30 justify-between items-center bg-transparent fixed top-0 w-full ' style={navbarStyle}>
        <div className='ml-32'>
          <img 
            src={logo} 
            alt='logo' 
            width={180} 
          />
        </div>

        <div className='mr-32'>
          <ul className='flex gap-5 font-bold text-2xl'>
            <li><a href="#home" className='hover:text-yellow-400'>Home</a></li>
            <li><a href="#features" className='hover:text-yellow-400'>Features</a></li>
            <li><a href="#about" className='hover:text-yellow-400'>About</a></li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar