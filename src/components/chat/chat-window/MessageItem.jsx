import React from 'react';

const MessageItem = ({ message, prevMessage }) => {
  const currentUser = 'u1';
  const date = new Date(message.createdAt);
  const isFirstMessageOfGroup =
    !prevMessage || prevMessage.senderId !== message.senderId;
  const time = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div
      className={`flex flex-col gap-2.5 ${currentUser === message.senderId ? 'items-end' : 'items-start'}`}
    >
      {isFirstMessageOfGroup && (
        <div
          className={`flex gap-1.5 ${currentUser === message.senderId ? 'flex-row-reverse' : ''}`}
        >
          <img
            className="w-8 h-8 rounded-full"
            src={message.avatar}
            alt={message.id}
          />
          <h4 className="text-xs text-neutrals-d-900">
            {currentUser === message.senderId ? 'You' : message.name}
          </h4>
          <span className="text-[0.625rem] text-neutrals-d-500">{time}</span>
        </div>
      )}
      <p
        className={`flex bg-white p-2.5 max-w-112.25 text-xs text-neutrals-d-800 rounded-[10px] ${currentUser === message.senderId ? 'rounded-tr-xs me-8' : 'rounded-tl-xs ms-8'}`}
      >
        {message.text}
      </p>
    </div>
  );
};

export default MessageItem;
