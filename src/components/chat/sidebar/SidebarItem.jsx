import React from 'react';
import ChannelItemContent from './ChannelItemContent';
import DMItemContent from './DMItemContent';

const SidebarItem = ({ item, isActive, onClick }) => {
  return (
    <div
      className={`flex items-center justify-between gap-1 px-6 py-3 text-neutrals-d-800 transition ease-in-out duration-300 cursor-pointer ${isActive && 'border-s-2  border-brand-primary bg-button-secondary'}`}
      onClick={onClick}
    >
      {item.type === 'channel' ? (
        <ChannelItemContent item={item} />
      ) : (
        <DMItemContent item={item} />
      )}
    </div>
  );
};

export default SidebarItem;
