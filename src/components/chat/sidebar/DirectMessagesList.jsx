import { Plus } from 'lucide-react';
import React, { useContext } from 'react';
import SidebarItem from './SidebarItem';
import ChatContext from '../context/ChatContext';

const DirectMessagesList = () => {
  const { selectedChat, setSelectedChat } = useContext(ChatContext);
  const messages = [
    {
      id: 'u1',
      item: {
        type: 'dm',
        name: 'Biobele Owen',
        message: 'Just pushed the updated wireframes!',
        avatar: 'https://i.pravatar.cc/150?img=21',
        online: true,
        last_message_timestamp: 'Now',
      },
    },
    {
      id: 'u2',
      item: {
        type: 'dm',
        name: 'Tunde Nwosu',
        message: 'Can we hop on the call?',
        avatar: 'https://i.pravatar.cc/150?img=58',
        online: true,
        last_message_timestamp: '3hr',
      },
    },
    {
      id: 'u3',
      item: {
        type: 'dm',
        name: 'Sola Kehinde',
        message: 'Thanks for the review, I am going to...',
        avatar: 'https://i.pravatar.cc/150?img=1',
        online: true,
        last_message_timestamp: '14hr',
      },
    },
    {
      id: 'u4',
      item: {
        type: 'dm',
        name: 'Rita Adeyemi',
        message: 'See the brief I attached',
        avatar: 'https://i.pravatar.cc/150?img=4',
        online: true,
        last_message_timestamp: 'Sun',
      },
    },
    {
      id: 'u5',
      item: {
        type: 'dm',
        name: 'Emeka Obi',
        message: 'Alright, wil do!',
        avatar: 'https://i.pravatar.cc/150?img=63',
        online: true,
        last_message_timestamp: 'Sat',
      },
    },
  ];
  return (
    <div className="flex flex-col gap-2.75">
      <div className="flex items-center justify-between px-6 py-3">
        <h3 className="text-[0.625rem] font-semibold text-neutrals-d-600 uppercase">
          DIRECT MESSAGES
        </h3>
        <Plus size={16} color="#787878" />
      </div>
      {messages.map((message) => (
        <SidebarItem
          key={message.id}
          isActive={
            selectedChat?.id === message.id &&
            selectedChat.type === message.item.type
          }
          onClick={() =>
            setSelectedChat({
              id: message.id,
              type: message.item.type,
              name: message.item.name,
            })
          }
          item={message.item}
        />
      ))}
    </div>
  );
};

export default DirectMessagesList;
