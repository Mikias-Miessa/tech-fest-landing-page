import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-white bg-opacity-80  shadow-md backdrop-blur-md px-6  font-Dax fixed z-50 w-screen py-1 '>
      <div className='flex items-center'>
        <div className='mr-4'>
          <img
            src='/logo.png'
            alt='gobeze logo'
            className='md:h-[78.26px] md:w-[180px] h-16 w-[147.68px] -mt-2'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
