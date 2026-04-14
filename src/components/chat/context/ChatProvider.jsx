import { useState } from 'react';
import ChatContext from './ChatContext';

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState({
    id: 'c3',
    type: 'channel',
    name: 'design-bootcamp',
  });

  const [drafts, setDrafts] = useState({});
  /**
   * Updates the draft message for a given chat id.
   * If the updater is a function, it will be called with the current draft message as an argument.
   * If the updater is not a function, the draft message will be set to the updater value.
   * @param {string} chatId - The id of the chat to update
   * @param {(string) => string | string} updater - The updater function or value to set the draft message to
   */
  const setMessage = (chatId, updater) => {
    setDrafts((prev) => {
      const current = prev[chatId] || '';

      const newValue =
        typeof updater === 'function' ? updater(current) : updater;

      return {
        ...prev,
        [chatId]: newValue,
      };
    });
  };
  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        drafts,
        setMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
