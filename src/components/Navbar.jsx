import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className='border-b border-neutral bg-white'>
      <div className='container flex items-center justify-between py-5'>
        <Link to='/' className='flex items-center gap-1 md:gap-3'>
          <img src={logo} alt='TrueMinds LMS' className='h-8 w-auto sm:h-10' />
          <p className='font-semibold text-sm md:text-lg text-text-primary'>TrueMinds LMS</p>
        </Link>

        <Link
          to='/login'
          className='inline-flex items-center rounded-md bg-button-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90'
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
