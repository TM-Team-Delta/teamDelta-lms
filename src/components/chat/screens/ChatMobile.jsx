import React, { useContext } from 'react';
import ChatWindow from '../chat-window/ChatWindow';
import Sidebar from '../sidebar/Sidebar';
import ChatContext from '../context/ChatContext';

const ChatMobile = () => {
  const { selectedChat, setSelectedChat } = useContext(ChatContext);
  if (!selectedChat) {
    return <Sidebar />;
  }

  return <ChatWindow onBack={() => setSelectedChat(null)} />;
};

export default ChatMobile;
