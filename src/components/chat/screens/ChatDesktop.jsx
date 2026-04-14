import React from 'react';
import ChatWindow from '../chat-window/ChatWindow';
import Sidebar from '../sidebar/Sidebar';
789;

const ChatDesktop = () => {
  return (
    <div className="md:flex hidden w-full">
      <div className="md:w-1/3 max-w-82 border-r border-border">
        <Sidebar />
      </div>

      <div className="flex-1 relative">
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatDesktop;
