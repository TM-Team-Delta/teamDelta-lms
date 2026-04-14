import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='min-h-screen flex '>
      {/* admin sidebar */}

      {/* admin header */}
      <div className='flex flex-col flex-1'></div>

      {/* main area */}
      <main className='flex-1 overflow-y-auto p-3 md:p-6'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
