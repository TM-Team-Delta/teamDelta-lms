import React from 'react';
import { Search } from 'lucide-react';

const SidebarHeader = () => {
  return (
    <div className="flex flex-col gap-6 p-6 border-b border-border">
      <h2 className="text-neutrals-d-600 font-semibold">
        Collaboration Workspace
      </h2>
      <div className="flex gap-3 px-4 py-2 rounded-lg bg-bg-muted-100">
        <Search size={20} color="#081811" />
        <input
          type="text"
          className="w-full focus:outline-none placeholder:text-primary-900 text-xs"
          placeholder="Search messages, files"
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
