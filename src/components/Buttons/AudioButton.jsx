import React from 'react';
// import MicOnIcon from '../../icons/MicOnIcon';
// import MicOffIcon from '../../icons/MicOffIcon';
import { BsMic, BsMicMute } from "react-icons/bs";

const AudioButton = ({ active, onClick }) => {
  return (
    <button
      className={`rounded-full ${active ? 'bg-brand-100' : 'bg-red-600'}`}
      onClick={onClick}
    >
      {active ? <button className='bg-brand-100'><BsMic/></button> : <BsMicMute />}
    </button>
  );
};

export default AudioButton;