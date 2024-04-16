import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import SectionTitle from './sectionTitle';
function SocialLinks() {
  return (
    <div className='flex flex-col justify-center gap-12 items-center  w-[1920px]'>
      <SectionTitle title={'Follow Us'} />
      <div className='flex justify-center md:gap-24 gap-6 items-center h-full'>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4 hover:scale-110 duration-200'
        >
          <FaFacebook
            className='font-extrabold text-4xl md:text-6xl'
            color='#4267B2'
          />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4 hover:scale-110 duration-200'
        >
          <FaInstagram
            className='font-extrabold text-4xl md:text-6xl'
            color='#cd486b'
          />
        </a>
        <a
          href='https://t.me/'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4 hover:scale-110 duration-200'
        >
          <FaTelegram
            color='#0088cc'
            className='font-extrabold text-4xl md:text-6xl'
          />
        </a>
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaSquareXTwitter className='font-extrabold text-4xl md:text-6xl hover:scale-110 duration-200' />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
