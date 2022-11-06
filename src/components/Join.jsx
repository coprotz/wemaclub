import React, { useState } from 'react';
import { useHMSActions } from '@100mslive/hms-video-react';
import Input from './Join/Input';
import JoinButton from './Join/JoinButton';
// import Avatar from 'boring-avatars';
import Select from './Join/Select';
import getToken from '../utils/getToken';


const Join = () => {
  const hmsActions = useHMSActions();
  const [role, setRole] = useState('speaker');
  const [username, setUsername] = useState('');
  // const [sending, setSending] = useState(null)
  const joinRoom = () => {
    // setSending(true)
    getToken(role)
      .then((token) => {
        hmsActions.join({
          userName: username || 'Anonymous',
          authToken: token,
          settings: {
            isAudioMuted: true,
          },
          initEndpoint : process.env.REACT_APP_HMS_INIT_PEER_ENPOINT || undefined
        });
      })
      // setSending(null)
      .catch((error) => {
        console.log('Token API Error', error);
      });
  };
  return (
    <div className='join_wrapper'>
        <div className="join_inner">
          <div className="app_head">
             <h4>WemaClub</h4>
          </div>

          <div className="join_details">
            <h4>{username}</h4>
            <Input state={{ username, setUsername }} />
            <Select state={{ role, setRole }} />
            <JoinButton onClick={joinRoom} />
          </div>
          <div className="app_footer">
            <span>&copy;WemaClub 2022</span>
          </div>
        </div>
    </div>
  );
};

export default Join;