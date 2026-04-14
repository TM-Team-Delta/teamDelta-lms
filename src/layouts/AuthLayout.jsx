import React from 'react';
import { Outlet } from 'react-router-dom';
import signinImage from '../assets/signinimage.png';

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-white'>
      {/* left panel for desktop */}
      <div className='hidden md:flex md:w-1/2 items-center justify-end md:pr-8 lg:pr-16 p-6'>
        <img
          src={signinImage}
          alt='learning illustration'
          className='w-full max-w-lg rounded-2xl object-cover'
        />
      </div>

      {/* right panel with form */}
      <div className='flex flex-col w-full md:w-1/2 items-center md:items-start justify-start md:justify-center px-6 py-8 md:pl-8 lg:pl-16 md:pr-12'>
        {/* image shown on mobile only a the top */}
        <div className='block md:hidden w-full mb-6'>
          <img
            src={signinImage}
            alt='learning illustration'
            className='w-full rounded-2xl object-cover max-h-52'
          />
        </div>

        {/* form content */}
        <div className='w-full max-w-md'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
