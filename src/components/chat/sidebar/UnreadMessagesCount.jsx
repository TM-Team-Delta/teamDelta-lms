import React from 'react';

export const UnreadMessagesCount = ({ unread }) => {
  if (unread)
    return (
      <div className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-brand-accent-200">
        <span className="text-white text-[8px]">{unread}</span>
      </div>
    );
};

export default UnreadMessagesCount;
