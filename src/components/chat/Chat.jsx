import React from 'react';

const Chat = ({ msg }) => {
  return (
    <div className='message_card'>
      <span className='send_name'>
        {msg.senderName[0]}
      </span>
      <span className='text-gray-300 font-semibold'>{msg.message}</span>
    </div>
  );
};

export default Chat;