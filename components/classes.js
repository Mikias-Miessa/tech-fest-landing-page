'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Moment from 'moment';
import { PiStudentFill } from 'react-icons/pi';
import { MdOutlineAccessTime } from 'react-icons/md';
import { RiArrowRightDoubleFill } from 'react-icons/ri';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';
import Image from 'next/image';
import SectionTitle from './sectionTitle';
const RunningClasses = () => {
  const runningClasses = [
    {
      course: {
        courseName: 'Visual Communication with Graphics Design ',
        duration: '2 Months',
      },
      start_date: '2024-04-27',
      instructor: {
        name: 'Jane Smith',
      },
      students: ['David', 'Emma'],
      thumbnail: '/images/graphics.jpg',
      slug: 'https://forms.gle/iVQuAMsCQJHryD66A',
      price: '3600 birr per month',
    },
    {
      course: {
        courseName: 'Digital Marketing',
        duration: '1 Month',
      },
      start_date: '2024-04-30',
      instructor: {
        name: 'John Doe',
      },
      students: ['Alice', 'Bob', 'Charlie'],
      thumbnail: '/images/digital.jpg',
      slug: 'https://forms.gle/zG81VAJTB635rVyGA',
      price: '4000 birr per month',
    },

    {
      course: {
        courseName: 'Full Stack Web Development',
        duration: '3 Months',
      },
      // start_date: '',
      instructor: {
        name: 'John Doe',
      },
      students: ['Alice', 'Bob', 'Charlie'],
      thumbnail: '/images/web.jpg',
      slug: 'https://forms.gle/RYkSMXBbUNSHYnmXA',
      price: '5000 birr per month',
    },
    // Add more objects as needed
  ];

  return (
    <div className='flex flex-col w-[1920px]  '>
      {/* <div className='flex justify-center items-center mb-8'>
        <h1 className='font-extrabold md:text-5xl text-2xl text-secondary my-6'>
          Our Traininngs
        </h1>
      </div> */}
      <div className='mb-20'>
        <SectionTitle title={'Our Trainings'} />
      </div>

      <div className='w-screen'>
        <Splide
          options={{
            autoplay: true,
            type: 'loop',
            perPage: 4,
            padding: { left: 40, right: 40 },
            pagination: false,
            gap: '2rem',
            breakpoints: {
              // 1600: {
              //   perPage: 3,
              //   padding: 20
              // },
              1400: {
                perPage: 3,
                width: '100%',
              },
              1024: {
                perPage: 2,
                width: '100%',
              },
              760: {
                perPage: 1,
                width: '100%',
              },
              // 480: {
              //   perPage:1,
              // }
            },
          }}
        >
          {runningClasses.length > 0 &&
            runningClasses.map(
              (course, index) =>
                course && (
                  <SplideSlide>
                    <div
                      key={index}
                      className='flex justify-center items-center '
                    >
                      <div className='  w-fit h-fit font-Dax pb-2'>
                        <div
                          className=' rounded-t-3xl relative w-[250px] h-48 drop-shadow-md border object-cover'
                          // style={{
                          //         backgroundImage: `url(${course.thumbnail?.toString()})`,
                          //   }}
                        >
                          <Image
                            src={course.thumbnail ? course.thumbnail : graphics}
                            alt='graphic Design'
                            layout='fill'
                            className='rounded-t-3xl'
                          />
                        </div>
                        <div className='w-[250px] h-1'></div>
                        <div className='bg-slate-50 h-fit w-[250px] rounded-b-3xl border-t drop-shadow-md  flex flex-col pl-4 pt-4 pr-2 pb-2'>
                          <h1 className='font-bold text-sm h-12'>
                            {course.course?.courseName &&
                              course.course?.courseName}
                          </h1>
                          <h1 className='font-extralight text-xs italic mt-2'>
                            Starts on{' '}
                            {course.start_date
                              ? Moment(course.start_date).format('MMM DD YYYY ')
                              : 'TBA'}
                          </h1>
                          <div className='mt-4'>
                            <h1 className='font-bold text-sm text-secondary'>
                              {' '}
                              ፕሮጀክቶች ያከተተ ስልጠና
                            </h1>
                            <h1 className='font-bold text-sm text-secondary'>
                              የሥራ ላይ ስልጠና (Internship) የተመቻቸለት
                            </h1>
                            <h1 className='font-bold text-sm text-secondary'>
                              100% በተግባር የተደገፈ ስልጠና
                            </h1>
                            {/* <span className='font-bold text-sm text-secondary'>
                              Instructor :{' '}
                            </span>
                            <span className='font-extralight text-sm italic '>
                              {course.instructor
                                ? course.instructor.name
                                : 'TBA'}
                            </span> */}
                          </div>
                          <div className='flex gap-4 mt-4'>
                            <div className='flex  border-r pr-4 items-center'>
                              {/* <PiStudentFill size={20} color='#105a7E' />{' '} */}
                              <span className='text-xs font-thin ml-2 italic'>
                                {course.price && course.price}
                              </span>
                            </div>
                            <div className='flex  pr-2 items-center'>
                              <MdOutlineAccessTime size={20} color='#105a7E' />{' '}
                              <span className='text-xs font-thin ml-2 italic'>
                                {course.course.duration &&
                                  course.course.duration}
                              </span>
                            </div>
                          </div>
                          <div className='flex justify-end mt-4 mb-2 pr-2'>
                            <a
                              href={course.slug && course.slug}
                              target='_blank'
                              className='bg-gradient-to-r from-orange-300 via-orange-500 to-orange-500 px-4 py-1 text-white font-normal text-sm rounded hover:scale-105 duration-200 flex items-end'
                            >
                              Register Now <RiArrowRightDoubleFill size={17} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                )
            )}
        </Splide>
      </div>
    </div>
  );
};

export default RunningClasses;
