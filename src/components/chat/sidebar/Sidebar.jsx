import React from 'react';
import SidebarHeader from './SidebarHeader';
import ChannelList from './ChannelList';
import DirectMessagesList from './DirectMessagesList';

const Sidebar = () => {
  return (
    <div className="w-full grid grid-rows-[auto_1fr] bg-white h-[calc(100vh-72px)] sm:h-[calc(100vh-76px)]">
      <SidebarHeader />
      <div className="overflow-y-auto">
        <ChannelList />
        <DirectMessagesList />
      </div>
    </div>
  );
};

export default Sidebar;
