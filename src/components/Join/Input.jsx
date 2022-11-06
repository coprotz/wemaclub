import React from 'react';

const Input = ({ state, ...props }) => {
  return (
    <input
      value={state.username}
      onChange={(e) => state.setUsername(e.target.value)}
      className='input '
      {...props}
      type='text'
      placeholder='Weka Jina'
    />
  );
};

export default Input;