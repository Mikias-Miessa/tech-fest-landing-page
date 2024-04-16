'use client';
import React from 'react';
import FAQAccordion from './accordion';
import SectionTitle from './sectionTitle';

const faqData = [
  {
    question: 'Seminar and Workshops',
    answer:
      " Dive into our interactive seminars and workshops, custom-made for the vibrant energy of university life. Explore hot topics like leadership hacks, creativity boosters, and career kick-starters in sessions packed with fun activities and real-world insights. Whether you're dreaming up your own startup or aiming to ace that internship, our events are your go-to hub for inspiration, skills, and connections. Get ready to level up your game and unleash your potential!",
  },
  {
    question: 'Job Matching',
    answer:
      "Hunting for that dream job? We've got your back. Our job matching service is like a matchmaking app, but for your career. We use fancy algorithms and deep dives to pair you with opportunities that match your skills, passions, and vibe. Say goodbye to endless job searches and hello to meaningful connections with companies that get you. Whether you're a coding genius, marketing maverick, or anything in between, we'll help you find your perfect match.",
  },
  {
    question: 'Startup Acceleration',
    answer:
      "Ready to turn your big ideas into reality? Our startup acceleration program is your launchpad to success. From brainstorming sessions to pitch practice and everything in between, we've got the tools and support to supercharge your startup journey. Connect with fellow trailblazers, tap into expert advice, and get the resources you need to bring your vision to life. Whether you're brewing the next big app or revolutionizing eco-friendly tech, we're here to help you soar. Get ready to disrupt the status quo and make your mark on the world!",
  },
  {
    question: 'Free and Paid Courses',
    answer:
      "Dive into a world of learning with our range of free and paid courses designed just for you. Whether you're exploring a new passion or diving deeper into your major, we've got something for everyone. Choose from a variety of topics, from coding and design to entrepreneurship and marketing, and learn at your own pace. Our courses are taught by industry experts, so you know you're getting top-notch education. Plus, with options for both free and paid courses, there's no limit to what you can achieve. So why wait? Start your learning journey today and unlock a world of possibilities!",
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
