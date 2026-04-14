import React, { useContext } from 'react';
import ChatContext from '../context/ChatContext';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatBody from './ChatBody';

const ChatWindow = ({ onBack = null }) => {
  // Todo: send message
  //     setMessages((prev) => ({
  //   ...prev,
  //   [activeConversationId]: [
  //     ...(prev[activeConversationId] || []),
  //     newMessage,
  //   ],
  // }));

  const messages = {
    c3: [
      {
        id: 'm1',
        senderId: 'u1',
        avatar: 'https://i.pravatar.cc/150?img=21',
        name: 'Biobele Owen',
        text: "Morning both! Just reviewed the tokens — they look really clean. The spacing scale especially. One thing though — should we add a border-radius token tier for the card components? Right now it's inconsistent across screens.",
        createdAt: '2026-03-25T09:22:00Z',
      },
      {
        id: 'm2',
        senderId: 'u2',
        avatar: 'https://i.pravatar.cc/150?img=58',
        name: 'Tunde Nwosu',
        text: 'Good morning everyone! 👋 Just a reminder that the UI/UX critique session is at 3 PM today. Please have your screens ready.',
        createdAt: '2026-03-25T09:14:00Z',
      },
      {
        id: 'm7',
        senderId: 'u2',
        avatar: 'https://i.pravatar.cc/150?img=58',
        name: 'Tunde Nwosu',
        text: "Also — I've shared the updated design system tokens in #design-critique. Would love early feedback before we finalize.",
        createdAt: '2026-03-25T09:14:00Z',
      },
      {
        id: 'm3',
        senderId: 'u3',
        avatar: 'https://i.pravatar.cc/150?img=1',
        name: 'Sola Kehinde',
        text: "Yes! Great catch Belle. I'll add --radius-card and --radius-input as distinct values. Want to jump on a quick screen share before the session?",
        createdAt: '2026-03-25T09:22:00Z',
      },
      {
        id: 'm4',
        senderId: 'u4',
        avatar: 'https://i.pravatar.cc/150?img=4',
        name: 'Rita Adeyemi',
        text: "+1 on the border-radius point. Also sharing today's updated Figma link — I reworked the card grid based on yesterday's feedback.",
        createdAt: '2026-03-25T10:00:00Z',
      },
      {
        id: 'm5',
        senderId: 'u5',
        avatar: 'https://i.pravatar.cc/150?img=63',
        name: 'Emeka Obi',
        text: 'Morning! Will check it out now. Also attaching the research brief from last sprint.',
        createdAt: '2026-03-25T09:22:00Z',
      },
      {
        id: 'm6',
        senderId: 'u1',
        avatar: 'https://i.pravatar.cc/150?img=21',
        name: 'Biobele Owen',
        text: 'Yes, works for me. 2:30 PM?',
        createdAt: '2026-03-25T10:00:00Z',
      },
    ],
    c5: [
      {
        id: 'm1',
        senderId: 'u1',
        avatar: 'https://i.pravatar.cc/150?img=21',
        name: 'Biobele Owen',
        text: "Morning both! Just reviewed the tokens — they look really clean. The spacing scale especially. One thing though — should we add a border-radius token tier for the card components? Right now it's inconsistent across screens.",
        createdAt: '2026-03-25T09:22:00Z',
      },
      {
        id: 'm2',
        senderId: 'u2',
        avatar: 'https://i.pravatar.cc/150?img=58',
        name: 'Tunde Nwosu',
        text: 'Good morning everyone! 👋 Just a reminder that the UI/UX critique session is at 3 PM today. Please have your screens ready.',
        createdAt: '2026-03-25T09:14:00Z',
      },
      {
        id: 'm3',
        senderId: 'u3',
        avatar: 'https://i.pravatar.cc/150?img=1',
        name: 'Sola Kehinde',
        text: "Yes! Great catch Belle. I'll add --radius-card and --radius-input as distinct values. Want to jump on a quick screen share before the session?",
        createdAt: '2026-03-25T09:22:00Z',
      },
      {
        id: 'm4',
        senderId: 'u4',
        avatar: 'https://i.pravatar.cc/150?img=4',
        name: 'Rita Adeyemi',
        text: "+1 on the border-radius point. Also sharing today's updated Figma link — I reworked the card grid based on yesterday's feedback.",
        createdAt: '2026-03-25T10:00:00Z',
      },
      {
        id: 'm5',
        senderId: 'u5',
        avatar: 'https://i.pravatar.cc/150?img=63',
        name: 'Emeka Obi',
        text: 'Morning! Will check it out now. Also attaching the research brief from last sprint.',
        createdAt: '2026-03-25T09:22:00Z',
      },
      {
        id: 'm6',
        senderId: 'u1',
        avatar: 'https://i.pravatar.cc/150?img=21',
        name: 'Biobele Owen',
        text: 'Yes, works for me. 2:30 PM?',
        createdAt: '2026-03-25T10:00:00Z',
      },
    ],
  };
  const { selectedChat } = useContext(ChatContext);
  const currentMessages = messages[selectedChat?.id];
  const sortedMessages = currentMessages?.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  );

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full h-[calc(100dvh-72px)] sm:h-[calc(100vh-76px)] bg-bg-muted">
      <ChatHeader onBack={onBack} />
      <ChatBody messages={sortedMessages} />
      <ChatInput />
      {/* onSend={sendMessage} */}
    </div>
  );
};

export default ChatWindow;
