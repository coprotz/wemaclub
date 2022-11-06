import React from 'react';
import LeaveButton from '../Buttons/LeaveButton';
import AudioButton from '../Buttons/AudioButton';
import UserCount from '../Buttons/UserCount';
import {
    useHMSActions,
    useHMSStore,
    selectIsLocalAudioEnabled,
  } from '@100mslive/hms-video-react';


  
  const Footer = ({ count, setMessage, message }) => {
    const hmsActions = useHMSActions();
    const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
    return (
      <footer className='footer_wrapper'>
        <UserCount count={count} />
        <AudioButton
          active={isLocalAudioEnabled}
          onClick={() => {
            hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
          }}
        />
        <LeaveButton
          onClick={() => {
            hmsActions.leave();
          }}
        />
        <button className='btn_chat' onClick={() =>setMessage(!message)}>Chat Room</button>
      </footer>
    );
  };
  
  export default Footer;