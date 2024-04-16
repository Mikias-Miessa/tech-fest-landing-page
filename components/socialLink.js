import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import SectionTitle from './sectionTitle';
function SocialLinks() {
  return (
    <div className='flex flex-col justify-center gap-12 items-center  w-[1920px]'>
      <SectionTitle title={'Follow Us'} />
      <div className='flex justify-center md:gap-24 gap-6 items-center h-full flex-wrap'>
        <a
          href='https://www.facebook.com/wingobeze/'
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
          href='https://www.instagram.com/wingobeze/'
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
          href='https://t.me/wingobeze'
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
          href='https://et.linkedin.com/company/gobezeconsult'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4 hover:scale-110 duration-200'
        >
          <FaLinkedin
            color='#0077B5'
            className='font-extrabold text-4xl md:text-6xl'
          />
        </a>
        <a
          href='https://www.tiktok.com/@wingobeze?_t=8lZg0QUgovV&_r=1'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4 hover:scale-110 duration-200'
        >
          <FaTiktok
            color='#000000'
            className='font-extrabold text-4xl md:text-6xl'
          />
        </a>
        <a
          href='https://twitter.com/traingobeze'
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
