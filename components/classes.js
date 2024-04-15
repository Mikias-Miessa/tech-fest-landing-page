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
const RunningClasses = () => {
  const runningClasses = [
    {
      course: {
        courseName: 'Web Development',
        duration: '12 weeks',
      },
      start_date: '2024-05-01',
      instructor: {
        name: 'John Doe',
      },
      students: ['Alice', 'Bob', 'Charlie'],
      thumbnail: 'web_development_thumbnail.jpg',
      slug: 'web-development',
    },
    {
      course: {
        courseName: 'Web Development',
        duration: '12 weeks',
      },
      start_date: '2024-05-01',
      instructor: {
        name: 'John Doe',
      },
      students: ['Alice', 'Bob', 'Charlie'],
      thumbnail: 'web_development_thumbnail.jpg',
      slug: 'web-development',
    },
    {
      course: {
        courseName: 'Graphic Design',
        duration: '8 weeks',
      },
      start_date: '2024-04-15',
      instructor: {
        name: 'Jane Smith',
      },
      students: ['David', 'Emma'],
      thumbnail: 'graphic_design_thumbnail.jpg',
      slug: 'graphic-design',
    },
    // Add more objects as needed
  ];

  return (
    <div className='flex w-screen '>
      <Splide
        options={{
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
                        {/* <Image
                          src={course.thumbnail ? course.thumbnail : graphics}
                          alt='graphic Design'
                          layout='fill'
                          className='rounded-t-3xl'
                        /> */}
                      </div>
                      <div className='w-[250px] h-1'></div>
                      <div className='bg-slate-50 h-fit w-[250px] rounded-b-3xl border-t drop-shadow-md  flex flex-col pl-4 pt-4 pr-2 pb-2'>
                        <h1 className='font-bold text-sm h-12'>
                          {course.course?.courseName &&
                            course.course?.courseName}
                        </h1>
                        <h1 className='font-extralight text-xs italic mt-2'>
                          Starts on{' '}
                          {course.start_date &&
                            Moment(course.start_date).format('MMM DD YYYY ')}
                        </h1>
                        <div className='mt-4'>
                          <span className='font-bold text-sm text-secondary'>
                            Instructor :{' '}
                          </span>
                          <span className='font-extralight text-sm italic '>
                            {course.instructor ? course.instructor.name : 'TBA'}
                          </span>
                        </div>
                        <div className='flex gap-4 mt-4'>
                          <div className='flex  border-r pr-4 items-center'>
                            {/* <PiStudentFill size={20} color='#105a7E' />{' '} */}
                            <span className='text-xs font-thin ml-2 italic'>
                              {course.students && course.students.length}
                            </span>
                          </div>
                          <div className='flex  pr-2 items-center'>
                            <MdOutlineAccessTime size={20} color='#105a7E' />{' '}
                            <span className='text-xs font-thin ml-2 italic'>
                              {course.course.duration && course.course.duration}
                            </span>
                          </div>
                        </div>
                        <div className='flex justify-end mt-4 mb-2 pr-2'>
                          <a
                            href={`/trainings/${course.slug && course.slug}`}
                            className='bg-gradient-to-r from-orange-300 via-orange-500 to-orange-500 px-4 py-1 text-white font-normal text-sm rounded hover:scale-105 duration-200 flex items-end'
                          >
                            Learn More <RiArrowRightDoubleFill size={17} />
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
  );
};

export default RunningClasses;
