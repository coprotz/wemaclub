import React from 'react';

const ChatFeed = ({ children }) => {
  return (
    <div
      id='chat-feed'
      className='chat_feed'
      style={{ height: 'calc(80vh - 100px)' }}
    >
      {children}
    </div>
  );
};

export default ChatFeed;