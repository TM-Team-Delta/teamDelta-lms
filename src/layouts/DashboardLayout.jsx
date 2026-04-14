import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden bg-bg-primary text-text-primary'>
      {/* sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className='flex min-w-0 min-h-0 flex-1 flex-col overflow-hidden'>
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <main className='flex-1 min-h-0 overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
