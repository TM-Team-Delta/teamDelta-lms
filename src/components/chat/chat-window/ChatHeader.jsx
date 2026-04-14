import React, { useContext } from 'react';
import { ChevronLeftCircle, Ellipsis, Hash } from 'lucide-react';
import ChatContext from './../context/ChatContext';

const ChatHeader = ({ onBack }) => {
  const { selectedChat } = useContext(ChatContext);
  const members = [
    { id: 1, image: 'https://i.pravatar.cc/150?img=57' },
    { id: 2, image: 'https://i.pravatar.cc/150?img=57' },
    { id: 3, image: 'https://i.pravatar.cc/150?img=57' },
    { id: 4, image: 'https://i.pravatar.cc/150?img=57' },
  ];
  const isChannel = selectedChat?.type === 'channel';
  return (
    <div className="flex justify-between items-center gap-4 px-6 py-3.5 md:py-6 bg-white border-b border-border">
      <button
        type="button"
        onClick={onBack}
        className="flex md:hidden justify-center items-center h-6 w-6 cursor-pointer"
      >
        <ChevronLeftCircle size={20} color="#9a9a9a" />
      </button>
      <div className="flex w-full justify-between items-center">
        <h2 className="flex items-center w-full text-sm text-primary-800">
          {isChannel && <Hash className="me-1" size={10} color="#787878" />}
          {selectedChat?.name || 'Select a chat'}
        </h2>
        <Ellipsis className="flex md:hidden" size={16} />
      </div>
      {isChannel && (
        <div className="hidden min-w-fit md:flex items-center gap-3">
          <div className="flex">
            {members.slice(0, 3).map((member, id) => (
              <div
                key={member.id}
                className={`h6 w-6 rounded-full border border-inset border-white ${id > 0 ? '-ms-2.5' : ''}`}
              >
                <img
                  className={`h-full w-full rounded-full`}
                  src={member.image}
                  alt={id}
                />
              </div>
            ))}
            {members.length > 3 && (
              <span className="flex justify-center items-center w-6 h-6 -ms-2.5 ring-[1px] ring-inset ring-white rounded-full text-primary-900 bg-[#E7EBEA] text-xs">
                +{members.length - 3}
              </span>
            )}
          </div>
          <span className="text-neutrals-d-300 text-xs">
            {members.length} members
          </span>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
