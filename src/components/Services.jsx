import React from 'react';
import calender from '../assets/calender.svg';
import docProfile from '../assets/docProfile.svg';
import docSearch from '../assets/docSearch.svg';
import search from '../assets/search.svg';

const Services = () => {
  return (
    <div className='mx-1 text-[rgb(10,22,52)] text-md px-10  md:h-72 md:mx-32 md:my-16'>
      <h1 className='text-center text-[#0E63F4]  text-2xl'>Our Services</h1>
      <p className='text-center text-3xl md:text-4xl py-4'>
        4 Easy steps to use our service
      </p>
      <div className='lg:flex gap-2 md:gap-14 justify-between'>
        <div className=' md:h-52'>
          <div className='flex justify-center'>
            <img
              src={search}
              alt=''
              className=''
            />
          </div>
          <p className=' text-center font-bold py-4 text-2xl lg:text-xl '>
            Check Doctor Profile
          </p>
          <p className='text-center'>we have to help whenever</p>
          <p className='text-center'>you feel ill, but keeping </p>
          <p className='text-center'>your healthly is our better </p>
          <p className='text-center'> priority.</p>
        </div>
        <div className=' md:h-52'>
          <div className='flex justify-center'>
            <img
              src={docProfile}
              alt=''
            />
          </div>
          <p className='text-center py-4 font-bold text-2xl lg:text-xl'>
            Check Doctor Profile
          </p>
          <p className='text-center'>we have to help whenever</p>
          <p className='text-center'>you feel ill, but keeping </p>
          <p className='text-center'>your healthly is our better </p>
          <p className='text-center'> priority.</p>
        </div>
        <div className=' md:h-52'>
          <div className='flex justify-center'>
            <img
              src={calender}
              alt=''
              className='pb-2'
            />
          </div>
          <p className=' text-center py-4 font-bold text-2xl lg:text-xl'>
            Schedule Appointment
          </p>
          <p className='text-center'>we have to help whenever</p>
          <p className='text-center'>you feel ill, but keeping </p>
          <p className='text-center'>your healthly is our better </p>
          <p className='text-center'> priority.</p>
        </div>
        <div className='md:h-52'>
          <div className='flex justify-center'>
            <img
              src={docSearch}
              alt=''
              className=''
            />
          </div>
          <p className=' text-center py-4 font-bold text-2xl lg:text-xl'>
            Search Doctor
          </p>
          <p className='text-center'>we have to help whenever</p>
          <p className='text-center'>you feel ill, but keeping </p>
          <p className='text-center'>your healthly is our better </p>
          <p className='text-center'> priority.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
