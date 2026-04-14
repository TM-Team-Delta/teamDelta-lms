import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <main className='flex-1'>
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
