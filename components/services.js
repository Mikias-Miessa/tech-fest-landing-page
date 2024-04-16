'use client';
import React from 'react';
import FAQAccordion from './accordion';
import SectionTitle from './sectionTitle';

const faqData = [
  {
    question: 'Coaching',
    answer:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At saepe eum sapiente nisi eos id excepturi corporis laudantium, ducimus, voluptatem quia quaerat modi? Ex aliquid voluptatibus corporis culpa inventore incidunt.',
  },
  {
    question: 'Mentorship',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum alias, iure necessitatibus minima aut? Hic error dicta odit, alias ea excepturi veniam fuga ducimus laborum, officiis, iste suscipit corrupti?',
  },
  {
    question: 'Job Matching',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore dignissimos dolorem excepturi perspiciatis, modi vitae exercitationem esse! Optio exercitationem rerum facilis id assumenda, deleniti explicabo ut similique iure accusamus?',
  },
  {
    question: 'Internship',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sunt. Labore quisquam, rem sunt nisi corrupti soluta quod autem quia ipsa praesentium hic libero numquam iusto vitae animi impedit consequatur!',
  },
  // Add more FAQ items as needed
];

const Services = () => {
  return (
    <div name='FAQ' className='   text-black md:py-20 '>
      <div className='lg:col-span-2'></div>
      <div className='lg:col-span-5'>
        {/* <h1 className='font-extrabold md:text-5xl text-2xl text-secondary text-center mb-10'>
          Our Services
        </h1> */}
        <SectionTitle title={'Our Services'} />
        <div className='h-10 md:h-20'></div>
        <div className='flex justify-center '>
          <div className='md:w-[700px] w-[350px]'>
            <FAQAccordion faqData={faqData} />
          </div>
        </div>

        <div className='text-center md:my-20 my-16  '>
          <a
            target='_blank'
            href='https://maps.app.goo.gl/sUwtT4cHaqCXFB4L7'
            className='gobeze-primary-bg text-white font-normal md:text-lg md:px-10 md:py-4 px-6 py-4 rounded-md '
          >
            Visit Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
