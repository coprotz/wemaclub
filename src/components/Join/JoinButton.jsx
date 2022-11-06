import React from 'react';
import Loading from '../loading/Loading'

const JoinButton = ({ onClick,sending }) => {
  return (
    <button
      type='button'
      onClick={() => onClick()}
      className='btn'
    >
      {sending? <Loading/> : 'Jiunge'}
    </button>
  );
};

export default JoinButton;