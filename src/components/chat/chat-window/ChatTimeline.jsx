import React from 'react';

const ChatTimeline = ({ time }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-neutrals-d-300" />

      <p className="text-[0.625rem] font-medium text-neutrals-d-700">
        {time} Today - March 25, 2026
      </p>

      <span className="h-px flex-1 bg-neutrals-d-300" />
    </div>
  );
};

export default ChatTimeline;
