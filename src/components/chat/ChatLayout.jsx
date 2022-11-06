import React from 'react';

const ChatLayout = ({ children, setMessage }) => {
  return (
    <div className='chat_layout'>
      <div className='font-bold text-lg my-1 py-1 border-b border-gray-100'>
        <button onClick={() =>setMessage(null)}>Rudi Nyuma</button>
        Ukumbi wa Meseji
      </div>
      {children}
    </div>
  );
};

export default ChatLayout;