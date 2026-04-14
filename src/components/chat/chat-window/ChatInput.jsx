import React, { useContext, useRef, useState } from 'react';
import { Paperclip, Send, Smile } from 'lucide-react';
import ChatContext from '../context/ChatContext';

const ChatInput = () => {
  const { selectedChat, drafts, setMessage } = useContext(ChatContext);
  const isChannel = selectedChat?.type === 'channel';
  const [showPicker, setShowPicker] = useState(false);
  const message = selectedChat ? drafts[selectedChat.id] || '' : '';
  const inputRef = useRef(null);
  const attachRef = useRef(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const insertEmoji = (emoji) => {
    // cursor position
    const start = inputRef.current.selectionStart;
    const end = inputRef.current.selectionEnd;
    setMessage(selectedChat.id, (prev) => {
      // allow adding emoji in the middle of the text
      const newValue = prev.slice(0, start) + emoji + prev.slice(end);
      return newValue;
    });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (selectedChat) {
    return (
      <div className="flex justify-between items-center gap-2 md:gap-4 px-6 py-4 md:py-6 bg-white">
        {/* attachement button */}
        <button
          type="button"
          className="max-w-18 rounded-lg p-1.5 md:p-4 bg-bg-muted-100 cursor-pointer"
          onClick={() => attachRef.current.click()}
        >
          <Paperclip size={20} color="#777777" />
          <input
            type="file"
            ref={attachRef}
            onChange={handleChange}
            className="hidden"
          />
        </button>
        {/* icon button */}
        <button
          type="button"
          className="relative max-w-18 rounded-lg p-1.5 md:p-4 bg-bg-muted-100 cursor-pointer"
          onClick={() => setShowPicker((prev) => !prev)}
        >
          <Smile size={20} color="#777777" />
          {showPicker && (
            <div className="flex absolute bottom-full bg-white shadow p-2 rounded">
              {['😀', '😂', '😍', '🔥', '👍'].map((emoji) => (
                <span
                  key={emoji}
                  className="cursor-pointer text-xl p-1 hover:bg-bg-muted-100 rounded-full"
                  onClick={(e) => {
                    insertEmoji(emoji);
                    setShowPicker(false);
                    e.stopPropagation();
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          )}
        </button>
        {/* message input */}
        <div className="w-full rounded-lg bg-bg-muted-100">
          <input
            className="w-full focus:outline-none px-4 py-2 md:min-h-14.25 placeholder:text-neutrals-l-800"
            placeholder={`Message ${isChannel ? '#' : ''}${selectedChat.name}`}
            type="text"
            value={message}
            ref={inputRef}
            onChange={(e) => setMessage(selectedChat.id, e.target.value)}
          />
        </div>
        {/* send button */}
        <button
          type="submit"
          className="max-w-18 rounded-lg p-1.5 md:p-4 bg-brand-primary cursor-pointer"
        >
          <Send size={20} color="#ffffff" />
        </button>
      </div>
    );
  }
};

export default ChatInput;
