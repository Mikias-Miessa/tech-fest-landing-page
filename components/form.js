'use client';
import React, { useState } from 'react';
import axiosInstance from '@/libs/axiosInstance';
import SectionTitle from './sectionTitle';

const baseUrl = '/api/tech';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
    location: '',
  });
  const [formStatus, setFormStatus] = useState(false);
  const [responseData, setResponseData] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axiosInstance.post(baseUrl, formData);
      console.log(response.data);
      setResponseData(response.data.message)
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        phone: '',
        email: '',
        location: '',
      });
      setFormStatus(true);
      setTimeout(() => {
        setFormStatus(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto md:p-0 p-10'>
      {/* <h2 className='font-extrabold md:text-6xl text-2xl text-secondary text-center '>
        Free Courses
      </h2> */}
      <SectionTitle title={'Free Courses'} />
      <h2 className='text-sm md:text-xl text-center font-light md:font-light my-4'>
        Register here for free online courses
      </h2>
      <div className='grid md:grid-cols-3 md:gap-6'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='firstName'
            id='floating_first_name'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-600 peer'
            placeholder=' '
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label
            htmlFor='floating_first_name'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            First name
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='lastName'
            id='floating_last_name'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer'
            placeholder=' '
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label
            htmlFor='floating_last_name'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Last name
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='number'
            name='age'
            id='floating_age'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer'
            placeholder=' '
            value={formData.age}
            onChange={handleChange}
            required
          />
          <label
            htmlFor='floating_age'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Age
          </label>
        </div>
      </div>
      <div className='relative z-0 w-full mb-5 group'>
        <input
          type='email'
          name='email'
          id='floating_email'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer'
          placeholder=' '
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label
          htmlFor='floating_email'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Email address
        </label>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='tel'
            name='phone'
            id='floating_phone'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer'
            placeholder=' '
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label
            htmlFor='floating_phone'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Phone Number (0912345678)
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='location'
            id='Current_Location'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer'
            placeholder=' '
            value={formData.location}
            onChange={handleChange}
            required
          />
          <label
            htmlFor='Current_Location'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Current Location
          </label>
        </div>
      </div>
      <button
        type='submit'
        className='text-white gobeze-primary-bg  focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
      >
        Submit
      </button>
      {formStatus && (
        <div className={`mt-4 p-4 rounded-md text-white ${responseData === "User is already registered" ? 'bg-red-500' : 'bg-green-500'}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 inline-block mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
          <p className='inline-block'>{responseData}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
