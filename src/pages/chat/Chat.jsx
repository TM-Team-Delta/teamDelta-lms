import ChatMobile from '../../components/chat/screens/ChatMobile';
import ChatDesktop from '../../components/chat/screens/ChatDesktop';
import ChatProvider from '../../components/chat/context/ChatProvider';

const Chat = () => {
  return (
    <>
      <ChatProvider>
        <ChatDesktop />
        <div className="flex w-full md:hidden">
          <ChatMobile />
        </div>
      </ChatProvider>
    </>
  );
};

export default Chat;
