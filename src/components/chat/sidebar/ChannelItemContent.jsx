import React from 'react';
import { Hash } from 'lucide-react';
import { UnreadMessagesCount } from './UnreadMessagesCount';

const ChannelItemContent = ({ item }) => {
  return (
    <div className="flex w-full justify-between">
      <h4 className="flex items-center text-xs">
        <Hash size={10} color="#787878" />
        {item.name}
      </h4>
      <UnreadMessagesCount unread={item.unread} />
    </div>
  );
};

export default ChannelItemContent;
