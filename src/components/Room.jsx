import { selectPeers, useHMSStore } from '@100mslive/hms-video-react';
import { useState } from 'react';
// import Footer from '../components/Footer/Footer';
import ChatContainer from './chat/ChatContainer';
import Footer from './footer/Footer';
import User from './Tile/User';




const Room = () => {
  const peers = useHMSStore(selectPeers);
  const [message, setMessage] = useState(false)
  return (
    <div className='room_wrapper'>
      
      {!message? 
      <div className='room_members'>
        <h1 className='app_name'>WemaClub</h1>
        <div className='wema_card_grid'>
          {peers.map((p) => (
            <User key={p.id} peer={p} />
          ))}
        </div> 
        <Footer count={peers.length} setMessage={setMessage}/>     
      </div>
      :
      <ChatContainer setMessage={setMessage}/> }
    </div>
  );
};

export default Room
