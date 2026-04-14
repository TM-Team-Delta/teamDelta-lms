import React, { useContext } from 'react';
import ChatTimeline from './ChatTimeline';
import ChatContext from '../context/ChatContext';
import MessageItem from './MessageItem';

const ChatBody = ({ messages }) => {
  const { selectedChat } = useContext(ChatContext);

  if (selectedChat) {
    return (
      <div className="p-6 overflow-y-auto">
        <ChatTimeline />
        {messages?.map((message, index) => {
          const prevMessage = messages[index === 0 ? null : index - 1];
          return (
            <div key={message.id} className="p-2">
              <MessageItem message={message} prevMessage={prevMessage} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default ChatBody;
