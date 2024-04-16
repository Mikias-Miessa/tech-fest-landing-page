import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='font-extrabold md:text-5xl text-2xl text-secondary'>
        {title}
      </h1>
      <div className='h-1 w-14 bg-orange-500'></div>
    </div>
  );
};

export default SectionTitle;
