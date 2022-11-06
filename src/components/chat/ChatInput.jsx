import React from 'react';

const ChatInput = ({ value, onChange, onKeyPress }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type='text'
      className='chat_input'
      placeholder='Send Message'
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          if (!event.shiftKey) {
            event.preventDefault();
            if (value.trim() !== '') {
              onKeyPress();
            }
          }
        }
      }}
    />
  );
};

export default ChatInput;