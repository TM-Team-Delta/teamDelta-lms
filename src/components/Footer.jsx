import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className='bg-brand-primary py-10 text-white'>
      <div className='container flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left'>
        <Link to='/' className='flex items-center gap-1 md:gap-3'>
          <img src={logo} alt='TrueMinds LMS' className='h-8 w-auto sm:h-10' />
          <p className='font-semibold text-sm md:text-lg'>TrueMinds LMS</p>
        </Link>

        <nav className='flex flex-wrap items-center justify-center gap-6 text-sm text-white/85'>
          <Link to='/' className='transition hover:text-white'>
            Privacy
          </Link>
          <Link to='/' className='transition hover:text-white'>
            Help Center
          </Link>
          <Link to='/login' className='transition hover:text-white'>
            Get Started
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
