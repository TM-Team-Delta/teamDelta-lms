import React from 'react';
import UnreadMessagesCount from './UnreadMessagesCount';

const DMItemContent = ({ item }) => {
  const isOnline = true;
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-1.5">
        <div className="relative">
          <img className="w-8 h-8 rounded-full" src={item.avatar} alt="" />
          <span
            className={`absolute right-0.75 bottom-0.5 ring-[0.5px] ring-white ring-inset w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-brand-primary-200' : ''}`}
          ></span>
        </div>
        <div className="flex flex-col gap-0.5">
          <h4 className="flex items-center text-xs">{item.name}</h4>
          <p className="text-border text-[0.625rem]">{item.message}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-0.5">
        {item.last_message_timestamp && (
          <div className="flex items-center justify-center">
            <span className="text-border text-[0.625rem]">
              {item.last_message_timestamp}
            </span>
          </div>
        )}
        <UnreadMessagesCount unread={item.unread} />
      </div>
    </div>
  );
};

export default DMItemContent;
