'use client';
import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import ImageSlider from './ImageSlider';
import TextSlider from './TextSlider';

const images = ['/images/top1.png', '/images/top2.png', '/images/top3.png'];
const texts = [
  'Let us help you land your first gig. Gobeze’s career team is always at work curating great work opportunities for our learners.',
  'Why wait when you can get started on your dream today. With one-on-one mentorship and coaching opportunities, workshops and networking events Gobeze provides second to none support for Entreprenuers',
  'Get in-demand tech and creative skills and transform your career with our programs',
];
const Hero = () => {
  return (
    <div className='xl:h-fit md:h-[720px] w-[1920px] overflow-hidden'>
      <div className=' flex flex-col-reverse md:flex-row  bg-white font-Dax bg-cover md:gap-10 lg:gap-0  '>
        <div className='flex flex-col md:mt-4 md:pt-48   item-center text-secondary pl-8 md:pl-10 xl:pl-28 lg:pl-20 md:py-28 text-left md:w-1/2 w-full '>
          {/* <p className='font-extrabold lg:text-6xl xl:text-8xl text-5xl px-4 md:px-0'>Know. Now.</p> */}
          <div className='h-24 md:h-28 flex justify-start  sm:pl-0 mt-10 md:mt-0'>
            <ReactTyped
              strings={['Get Hired.', 'Start Your Own.', 'Perform.']}
              typeSpeed={200}
              backSpeed={0}
              loop
              backDelay={6700}
              className='font-extrabold lg:text-5xl xl:text-6xl text-5xl px-4 md:px-0 '
            />
          </div>

          <TextSlider texts={texts} />

          <div className='text-left md:mt-10 mt-2 px-4 md:px-0 mb-10 md:mb-0'>
            <a
              href='https://www.gobeze.com/trainings'
              className='gobeze-primary-bg  py-2 lg:px-2 lg:py-3 font-light lg:font-normal text-white text-sm lg:text-base rounded h-12 w-40 hover:gobeze-secondary-bg duration-200 flex justify-center items-center '
            >
              Explore More
            </a>
          </div>
        </div>
        <div className='flex md:mt-20 pt-28 md:pt-0 md:justify-start justify-center ml-32 md:ml-0  md:bg-none bg-contain items-center w-2/5'>
          <div className=''>
            {/* <ImageSlider images={images} /> */}
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
      <div
        className='bg-white md:h-[70px] h-[40px] w-full bg-cover bg-center mt-4'
        style={{ backgroundImage: `url("/images/divider.svg")` }}
      ></div>
    </div>
  );
};

export default Hero;
