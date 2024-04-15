import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
function SocialLinks() {
  return (
    <div className='flex flex-col justify-center gap-12 items-center '>
      <div>
        <h1 className='font-extrabold text-6xl text-secondary'>Follow Us</h1>
      </div>
      <div className='flex justify-center gap-24 items-center h-full'>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4'
        >
          <FaFacebook size={50} color='#4267B2' />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4'
        >
          <FaInstagram size={50} color='#cd486b' />
        </a>
        <a
          href='https://t.me/'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4'
        >
          <FaTelegram size={50} color='#0088cc' />
        </a>
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaSquareXTwitter size={50} />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
