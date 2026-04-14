import React, { useContext } from 'react';
import SidebarItem from './SidebarItem';
import ChatContext from '../context/ChatContext';

const ChannelList = () => {
  const { selectedChat, setSelectedChat } = useContext(ChatContext);

  // Todo: get real data from api
  const channels = [
    { id: 'c1', item: { name: 'general', type: 'channel' } },
    { id: 'c2', item: { name: 'ui-ux-team', type: 'channel' } },
    { id: 'c3', item: { name: 'design-bootcamp', type: 'channel', unread: 4 } },
    { id: 'c4', item: { name: 'design-critique', type: 'channel' } },
    { id: 'c5', item: { name: 'resources', type: 'channel', unread: 4 } },
    { id: 'c6', item: { name: 'capstone-2026', type: 'channel' } },
    { id: 'c7', item: { name: 'announcements', type: 'channel' } },
  ];
  return (
    <div>
      <h3 className="text-[0.625rem] px-6 py-3 font-semibold text-neutrals-d-600 uppercase">
        channels
      </h3>
      {channels.map((channel) => (
        <SidebarItem
          key={channel.id}
          isActive={
            selectedChat?.id === channel.id &&
            selectedChat.type === channel.item.type
          }
          onClick={() =>
            setSelectedChat({
              id: channel.id,
              type: channel.item.type,
              name: channel.item.name,
            })
          }
          item={channel.item}
        />
      ))}
    </div>
  );
};

export default ChannelList;
